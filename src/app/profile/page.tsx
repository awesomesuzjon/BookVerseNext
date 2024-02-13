"use client"
import {useRouter} from "next/navigation";
import axios from "axios";
import {useState} from "react";
import Link from "next/link";

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("")
    const logOut = async () => {
        try {
            const response = await axios.get('/api/users/logout')
            localStorage.removeItem(('token'))
            window.location.href = '/login'
        } catch (error: any) {
            console.log(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios('/api/users/me')
        setData(res?.data?.data._id)
    }

    return (
        <div>
            <h1>Profile Page</h1>
            <h2>{data ? <Link href={`/profile/${data}`}>
                User Id
            </Link> : "No data"}</h2>
            <button onClick={getUserDetails} className={"p-4 bg-green-700 mt-4 hover:bg-blue-700"}>Get User Details
            </button>
            <button onClick={logOut} className={"p-4 bg-blue-500 mt-4 hover:bg-blue-700"}>Log Out</button>
        </div>
    )
}