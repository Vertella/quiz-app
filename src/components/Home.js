import React from "react";
import Link from "next/link";
import PlanetGallery from "./PlanetGenerator";
import planets from "../data/planets.json";


const Home = () => {
    return(
        <div className="flex vw-full h-screen content-center bg-black">
            <div className=" w-full h-full m-6 relative rounded flex flex-col">
                <div className="relative flex justify-center">
                <div className="w-11/12 md:w-1/2 blur-lg opacity-50 absolute inset-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-purple-600 animate-pulse rounded-lg"></div>
                    <div className="relative md:w-1/2 flex self-center mt-5 p-4">
                        <Link href="/quiz">
                            <div className=" relative rounded flex flex-col items-center">
                                <div className="flex content-center rounded">
                                    <img src="solar.png" className="rounded-lg opacity-90" />
                                </div>
                                <h1 className="text-xl text-yellow-200 underline"> Our Solar System</h1>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-10/12 h-auto flex justify-center self-center mt-10 flex-col">
                    <div>
                        <p className="text-white sm:text-xl self-start text-left italic">Test your knowledge on specific planets</p>
                    </div>
                    <PlanetGallery planets={planets} />
                </div>
            </div>
        </div>
    );
}

export default Home;