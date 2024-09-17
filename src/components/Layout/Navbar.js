import React from "react";
import Link from "next/link";


function Navbar() {
    return ( 
        <div className="w-full h-16 bg-gradient-to-r from-violet-950 to-pink-800 sticky top-0 z-10">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full text-white">
                    <Link href="/">
                    <img src="planet-logo.svg" className="h-14 animate-spin-slow" alt="Planet"/>
                    </Link>
                    <h1 className="text-xl text-slate-200 hover:text-violet-400 cursor-pointer">Planet Quiz</h1>
                    <ul className="hidden md:flex gap-x-6 text-white">
                        <li>
                            <Link href="/quiz">
                                <p>Quizzes</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin">
                                <p>Admin</p>
                            </Link>
                        </li>
                    </ul>
                </div> 
            </div>
        </div>
    );
}

export default Navbar;