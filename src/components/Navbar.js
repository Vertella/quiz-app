import React from "react";
import Link from "next/link";


function Navbar() {
    return ( 
        <div className="w-full h-16 bg-blue-950 sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <Link href="/">
                    <img src="planet-logo.svg" className="h-14" alt="Planet"/>
                    </Link>
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