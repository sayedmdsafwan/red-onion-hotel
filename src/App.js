import auth from "./firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

function App() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(auth);

    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
    );
}

export default App;
