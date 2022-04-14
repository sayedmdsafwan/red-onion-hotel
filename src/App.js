import Header from "./components/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import SignUp from "./components/Login/SignUp/SignUp";
import Checkout from "./components/Pages/Checkout/Checkout";
import Error from "./components/Pages/Error/Error";
import Footer from "./components/Shared/Footer/Footer";
import About from "./components/Pages/About/About";
import RequireAuth from "./components/Pages/RequireAuth/RequireAuth";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route
                    path="/checkout"
                    element={
                        <RequireAuth>
                            <Checkout></Checkout>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="*" element={<Error></Error>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
