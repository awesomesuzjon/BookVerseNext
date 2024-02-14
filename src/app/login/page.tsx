"use client";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter()
    const [user, setUser] = useState({
        password: "",
        email: ""
    })
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const onLogIn = async () => {

        try {


            setLoading(true)
            const response = await axios.post("/api/users/login", user)
            console.log(response.data)
            router.push("/profile")
        } catch (error: any) {
            console.log(error.message, "Login Failed")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user.password.length > 0 && user.email.length > 0) {
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true)
        }

    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className='mb-2'>{loading ? "Processing..." : "Login Page"}</h1>
            <hr/>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
            />
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
            />
            <button
                onClick={onLogIn}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{btnDisabled ? "No LogIn" : "LogIn"}</button>
           <span className='flex '>

            <Link href={"/signup"} className="p-2 mr-4  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Visit Signup page</Link>

            <Link href={"/home"}
                  className="p-2  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                Go To HomePage </Link>
           </span>

        </div>
    )
}