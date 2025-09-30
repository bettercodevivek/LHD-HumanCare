import React from "react";
import { useState,useEffect } from "react";
import Preloader from "./Components/Preloader";
import 'aos/dist/aos.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet,ScrollRestoration } from "react-router-dom";


export default function Layout(){

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000); 
  }, []);
   
    return(
        <>
        {loading ? (
            <Preloader/> 
        ) : (
            <>
            <ScrollRestoration/>
                <Navbar/>
                <Outlet/>
                <Footer/>
                </>
            )
        }
       
        </>

    );
}