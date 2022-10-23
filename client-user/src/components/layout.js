import { Outlet } from "react-router-dom"
import Footer from "./Footer";
import NavbarComponent from "./Navbar";

const Layout = () => {
    return (
        <>
            <NavbarComponent/>
            <Outlet />

            <Footer/>
        </>
    )
}

export default Layout;