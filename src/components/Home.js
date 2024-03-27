import React from "react";
import Link from "next/link";

const Home = () => {
    return(
        <div className="flex vw-full h-screen bg-blue-900">
            <div className=" w-full m-6 border rounded border-x-gray-100">
                <Link href="/quiz">
                    <div className="w-10/12 border rounded m-5 p-5 items-center">
                        <div className="w-full">
                            <img src="solar.png" />
                        </div>
                        <h1 className=" text-4xl "> Our Solar System</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;