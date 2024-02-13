import User from '../models/userModel'
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";


export const sendEmail = async ({email, emailType, userId}: any) => {
    try {
        //create a hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId,
                {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000},
            )
        } else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId,
                {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000},
            )
        }

        //create a transporter
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "13ab7495376fd3",
                pass: "27a19f1cec109e"
            }
        });

        console.log(process.env.Domain, 'ain`t I a url from env ???')

        const mailOptions = {
            from: 'suzjonbohara39@gmail.com',
            to: email,
            subject: emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',
            html: `<p>Click <a href="${process.env.Domain}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"} your account or copy and paste the link below in your browser . <br>
${process.env.Domain}/verifyemail?token=${hashedToken}</p>`
        }

        return await transport.sendMail(mailOptions)
    } catch
        (error: any) {
        throw new Error(error.message)
    }
}