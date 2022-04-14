import React from "react";
import { useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
    const navigate = useNavigate();

    const navigateCheckout = () => {
        navigate("/checkout");
    };

    const { img, name } = meal;
    return (
        <div className="p-8 my-6 rounded-lg shadow hover:shadow-xl duration-300">
            <img className="w-40" src={img} alt="" />
            <h2 className="text-2xl text-center">{name}</h2>
            <button
                onClick={navigateCheckout}
                className="block mx-auto mt-4 px-4 py-2 bg-red-400 text-white rounded-full"
            >
                Add Item
            </button>
        </div>
    );
};

export default Meal;
