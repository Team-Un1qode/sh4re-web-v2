import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import SidebarLayout from "../components/layouts/SidebarLayout";
import Class from "../pages/class";
import Code from "../pages/code";
import Task from "../pages/task";
import Announcement from "../pages/announcement";
import Profile from "../pages/profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<SidebarLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/class" element={<Class />} />
          <Route path="/code" element={<Code />} />
          <Route path="/task" element={<Task />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
