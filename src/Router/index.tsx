import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/index";
import Register from "../pages/register/index";
import Home from "../pages/home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
