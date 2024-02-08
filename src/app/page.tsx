import Link from "next/link";

export default function Home() {
    return (
        <main
            className="flex flex-col items-center justify-between p-4 md:p-8 lg:p-12 min-h-screen bg-gradient-to-b from-yellow-100 to-white">
            <section className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                    Welcome to BookVerse
                </h1>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                    Explore a world of books and literature with BookVerse.
                </p>
            </section>

            <section className="flex flex-col items-center space-y-6">
                <img
                    src="/public/assets/bookverselogo.png"
                    alt="BookVerse Logo"
                    className="w-full max-w-lg rounded-md shadow-md mb-6 md:max-w-xl lg:max-w-2xl"
                />

                <Link href={"/signup"}
                      className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition">
                    Join BookVerse
                </Link>
                <Link href={"/login"}
                      className="bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition">
                    Log In
                </Link>
            </section>
        </main>
    );
}
