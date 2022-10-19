import NavbarComponent from "./Navbar";
import { Outlet } from 'react-router-dom'

function Layout() {

    return (
        <>
        <NavbarComponent/>
        <Outlet/>
        </>
    )
}

export default Layout;