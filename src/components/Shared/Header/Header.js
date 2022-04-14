import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo2.png";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
    return (
        <div className="py-4 w-4/5 mx-auto flex justify-between items-center">
            <img className="w-44" src={logo} alt="logo" />
            <div className="flex gap-8 items-center">
                <Link to="/checkout">
                    <FaCartPlus />
                </Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">
                    <button className="px-4 py-2 bg-red-400 text-white rounded-full ">
                        SignUp
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
