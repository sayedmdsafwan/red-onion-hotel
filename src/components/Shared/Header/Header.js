import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo2.png";
import { FaCartPlus } from "react-icons/fa";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const navigateHome = () => {
        navigate("/");
    };

    const navigateToSignUP = () => {
        navigate("/signup");
    };

    return (
        <div className="py-4 w-4/5 mx-auto flex justify-between items-center">
            <img
                onClick={navigateHome}
                className="w-44 cursor-pointer"
                src={logo}
                alt="logo"
            />
            <div className="flex gap-8 items-center">
                <Link to="/checkout">
                    <FaCartPlus />
                </Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>

                {user ? (
                    <button
                        onClick={() => signOut(auth)}
                        className="px-4 py-2 bg-red-400 text-white rounded-full "
                    >
                        SignOut
                    </button>
                ) : (
                    <button
                        onClick={navigateToSignUP}
                        className="px-4 py-2 bg-red-400 text-white rounded-full "
                    >
                        SignUp
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
