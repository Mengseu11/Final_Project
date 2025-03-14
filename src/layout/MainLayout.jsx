import { Outlet } from "react-router";
import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function MainLayout() {
    return (
        <main className="py-5">
            <AppNavbar/>
            <div className="p-1 py-9"><Banner/></div>
            <Footer/>
        </main>
    )
}