import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import SidebarLayout from "../components/layouts/SidebarLayout";
import Handouts from "../pages/handouts";
import Code from "../pages/code";
import Assignment from "../pages/assignment";
import Announcement from "../pages/announcement";
import Profile from "../pages/profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<SidebarLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/handouts' element={<Handouts />} />
          <Route path='/code' element={<Code />} />
          <Route path='/assignment' element={<Assignment />} />
          <Route path='/announcement' element={<Announcement />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
