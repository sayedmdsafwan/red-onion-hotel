import React, { useRef } from "react";
import logo from "../../../assets/images/logo2.png";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
        useSignInWithGoogle(auth);
    const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);

    const emailRef = useRef("");
    const nameRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };

    const navigateLogin = () => {
        navigate("/login");
    };

    return (
        <div>
            <>
                <form onSubmit={handleSubmit} className="mt-10 w-96 mx-auto">
                    <img src={logo} alt="" />
                    <input
                        ref={nameRef}
                        type="text"
                        placeholder="Name"
                        className="bg-slate-100 py-3 px-4 mt-6 rounded w-full"
                        required
                    />
                    <input
                        ref={emailRef}
                        type="text"
                        placeholder="Email"
                        className="bg-slate-100 py-3 px-4 my-4 rounded w-full"
                        required
                    />
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                        className="bg-slate-100 py-3 px-4 rounded w-full"
                        required
                    />
                    <p className="mt-4">
                        Already have an account?{" "}
                        <span
                            onClick={navigateLogin}
                            className="text-blue-500 cursor-pointer"
                        >
                            Please Login
                        </span>
                    </p>
                    <input
                        type="submit"
                        value="SignUp"
                        className="px-4 cursor-pointer py-2 bg-red-400 text-white w-full rounded mt-4"
                    />
                </form>
                <div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="px-4 py-2 bg-red-400 text-white rounded-full block mx-auto mt-6"
                    >
                        SignUp With Google
                    </button>
                </div>
            </>
        </div>
    );
};

export default SignUp;
