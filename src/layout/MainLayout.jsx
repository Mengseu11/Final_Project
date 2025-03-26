import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

import Home from "../pages/Home";

export default function MainLayout() {
    return (
      <main>
             <Home />
      </main>
    )
}