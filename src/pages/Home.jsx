import { FaMinus, FaPlus } from "react-icons/fa";


import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export default function Home() {
  

  return (
    <main>
      
      <div className="">
        <Banner />

      </div>
      <Footer />
    </main>
  );
}
