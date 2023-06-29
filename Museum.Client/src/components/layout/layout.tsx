import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

function Layout() {
    return (
        <div className="layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;