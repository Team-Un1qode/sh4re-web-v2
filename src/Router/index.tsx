import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/index";
import Register from "../pages/register/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
