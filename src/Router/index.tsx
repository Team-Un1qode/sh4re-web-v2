import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import SidebarLayout from "../components/layouts/SidebarLayout";
import Announcement from "../pages/announcement";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<SidebarLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/announcement' element={<Announcement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
