import { Link } from "react-router-dom";
import SwapiItems from "./SwapiItems";
import Nav from "../Template/Nav";

function Home(){
    return (
    <>
    <Nav/>
      <SwapiItems/>
    </>
  );
}

export default Home