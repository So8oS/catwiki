import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import Navbar from "../compnents/Navbar";
import Footer from "../compnents/Footer";





const MyApp: AppType = ({ Component, pageProps }) => {
  return (
  <div className="flex flex-col justify-center items-center font-Montserrat
  px-10 pt-3 
  md:mx-12 
  lg:mx-18 
  xl:mx-26 
  2xl:mx-56" >
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </div>
  )
};

export default MyApp;
