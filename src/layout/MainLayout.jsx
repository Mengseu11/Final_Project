import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function MainLayout() {
    return (
        <main className="">
            {/* <AppNavbar/> */}
            <div className=""><Banner/></div>
            <Footer/>
        </main>
    )
}