import { async } from "@firebase/util";
import React, { useRef } from "react";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo2.png";
import auth from "../../../firebase.init";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, errorReset] =
        useSendPasswordResetEmail(auth);

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
        useSignInWithGoogle(auth);

    const emailRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const sendResetEmail = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            alert("Already sent");
        } else {
            alert("Please type email");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
        navigate(from, { replace: true });
    };
    if (user) {
    }

    const navigateSignUp = () => {
        navigate("/signup");
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="mt-10 w-96 mx-auto">
                <img src={logo} alt="" />
                <input
                    name="email"
                    ref={emailRef}
                    type="text"
                    placeholder="Email"
                    className="bg-slate-100 py-3 px-4 mt-6 mb-4 rounded w-full"
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="bg-slate-100 py-3 px-4 rounded w-full"
                    required
                />
                <p className="mt-4">
                    New to this website?{" "}
                    <span
                        onClick={navigateSignUp}
                        className="text-blue-500 cursor-pointer"
                    >
                        Please Login
                    </span>
                </p>
                <input
                    type="submit"
                    value="Login"
                    className="px-4 cursor-pointer py-2 bg-red-400 text-white w-full rounded mt-4"
                />
                <p className="mt-2">
                    Forgot password?{" "}
                    <span
                        onClick={sendResetEmail}
                        className="text-blue-600 cursor-pointer"
                    >
                        Reset
                    </span>
                </p>
            </form>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="px-4 py-2 bg-red-400 text-white rounded-full block mx-auto mt-6"
                >
                    Login With Google
                </button>
            </div>
        </>
    );
};

export default Login;
