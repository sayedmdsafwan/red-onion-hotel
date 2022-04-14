import React from "react";

import "./HeroArea.css";

const HeroArea = () => {
    return (
        <div className="bg-hero py-48 flex items-center justify-center">
            <div>
                <h1 className="text-center text-5xl my-6">
                    Best food waiting for your belly
                </h1>
                <div className="flex justify-center">
                    <div className="form-control bg-white inline-block rounded-full">
                        <input
                            className="px-4 w-96"
                            type="text"
                            placeholder="Search Food"
                        />
                        <button className="px-4 py-2 bg-red-400 text-white rounded-full ">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;
