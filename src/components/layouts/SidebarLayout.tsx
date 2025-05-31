import { Outlet } from "react-router-dom";
import Sidebar from "../common/sidebar/index";

const SidebarLayout = () => (
    <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />
        <main style={{ flex: 1, paddingLeft: "18rem" }}>
            <Outlet />
        </main>
    </div>
);

export default SidebarLayout;
