import { connect } from '../../../../dbConfig/dbConfig';
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../models/userModel";
import bcryptjs from 'bcryptjs';

// Connect to MongoDB
connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        console.log(reqBody, 'reqBody');

        // Check if user already exists
        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }

        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // Save the new user to the database
        const savedUser = await newUser.save();
        console.log(savedUser, 'savedUser');

        return NextResponse.json({
            message: 'User created successfully',
            success: true,
            savedUser
        });
    } catch (error: any) {
        console.error('Error creating user:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
