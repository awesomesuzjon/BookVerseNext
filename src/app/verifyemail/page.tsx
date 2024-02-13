"use client"

import axios from "axios";
import Link from "next/link";
import React, {useEffect, useState} from "react";

export default function VerifyEmailPage() {
    const [token, setToken] = useState("")
    const [message, setMessage] = useState("")
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState(false)


    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail', {token})
            setVerified(true)
        } catch (error: any) {
            setError(true)
            console.log(error.response.data)
        }
    }


    useEffect(() => {
        const url = window.location.search.split("=")[1]
        console.log(url, ' is token')
        setToken(url || ' ')
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail()
        }
    }, [token]);

    return (
        <div>
            <h1>Verify your Email</h1>
            <h2>{token ? `${token}` : "non token"}</h2>

            {verified && (
                <>
                    <h1>Email Verified</h1>
                    <Link href={"/login"}>Login</Link>
                </>

            )}
            {error && (
                <>
                    <h1> Caught Error,cannot Continue</h1>
                    <Link href={"/"}>Go to Home</Link>
                </>

            )}
        </div>
    )
}