import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <>
                <button>

                    <Link href={"/signup"}>Visit SignUp page</Link>
                </button>
                <button>

                    <Link href={"/login"}>Visit Login page</Link>
                </button>

            </>

        </main>
    );
}
