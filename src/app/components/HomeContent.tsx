import React from 'react';
import Link from "next/link";

const HomeContent = () => {
    return (
        <div className="container ml-4 mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4">Book Recommendation</h2>


            <Link href={"/login"}
                  className="p-2 mr-4 mt-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                Go To Login
            </Link>
            <Link href={"/signup"}
                  className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                Go To Signup </Link>

        </div>
    );
};

export default HomeContent;
