import { type NextPage } from "next";
import Navbar from "../compnents/Navbar";
import Intro from "../compnents/Intro";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 py-3 
    
    lg:mx-18 
    xl:mx-26 
    2xl:mx-56
    ">
     <Navbar/>
     <Intro/>
     
    </div>
  );
};

export default Home;
