import { type NextPage } from "next";
import Navbar from "../compnents/Navbar";
import Intro from "../compnents/Intro";
import Body from "../compnents/Body";
import Footer from "../compnents/Footer";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center font-Montserrat
     px-10 pt-3 
    md:mx-12 
    lg:mx-18 
    xl:mx-26 
    2xl:mx-56
    ">
     <Navbar/>
     <Intro/>
     <Body/>
     <Footer/>
     
    </div>
  );
};

export default Home;
