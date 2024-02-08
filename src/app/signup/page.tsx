"use client";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function SignupPage() {
    const router = useRouter()
    const [user, setUser] = useState({
        email: '',
        password: "",
        username: ""
    })
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const onSignup = async () => {

        try {

            setLoading(true)
            const response = await axios.post("/api/users/signup", user)
            console.log(response.data)
            router.push("/login")
        } catch (error: any) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setBtnDisabled(false)
            console.log(user.email, user.password, user.username, btnDisabled)
        } else {
            setBtnDisabled(true)
        }

    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Processing" : "Signup"}</h1>
            <hr/>
            <label htmlFor="username">username</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username"
            />
            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
            />
            <button
                onClick={onSignup}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{btnDisabled ? "No signup" : "Signup"}</button>
            <Link href={"/login"}>Visit login page</Link>
        </div>
    )
}