import { type NextPage } from "next";
import Intro from "../compnents/Intro";
import Body from "../compnents/Body";

const Home: NextPage = () => {
  return (
    <div>
     <Intro/>
     <Body/>     
    </div>
  );
};

export default Home;
