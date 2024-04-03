import React from "react";
import Link from "next/link";

const Home = () => {
    return(
        <div className="flex vw-full h-full content-center bg-black">
            <div className=" w-full h-full m-6 relative border rounded border-x-gray-100 flex flex-col">
                <div className="relative flex justify-center">
                <div className="md:w-1/2 blur-lg opacity-50 absolute inset-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg"></div>
                    <div className="relative md:w-1/2 flex self-center mt-5 p-4">
                        <Link href="/quiz">
                            <div className=" relative rounded flex flex-col items-center">
                                <div className="flex content-center rounded">
                                    <img src="solar.png" className="rounded-lg opacity-90" />
                                </div>
                                <h1 className=" text-4xl text-white "> Our Solar System</h1>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-10/12 flex justify-center self-center mt-10 flex-col">
                    <div>
                        <p className="text-white text-xl self-start">Test your knowledge on planets</p>
                    </div>
                    <div className="flex flex-row w-full justify-center">
                        <div className=" w-1/4 h-1/4 overflow-hidden border rounded m-3 p-3">
                            <img src="jupiter2.png" />
                        </div>
                        <div className=" w-1/4 h-1/4 border rounded m-3 p-3">
                            <img src="saturn.png" />
                        </div>
                        <div className=" w-1/4 h-1/4 border rounded m-3 p-3">
                            <img src="solar.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;