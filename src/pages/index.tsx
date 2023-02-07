import { type NextPage } from "next";
import Navbar from "../compnents/Navbar";
import Intro from "../compnents/Intro";
import Body from "../compnents/Body";
import Footer from "../compnents/Footer";

const Home: NextPage = () => {
  return (
    <div>
     <Intro/>
     <Body/>     
    </div>
  );
};

export default Home;
