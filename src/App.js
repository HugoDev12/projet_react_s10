import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./Template/Header";
import Footer from "./Template/Footer";
import Home from "./Home/Home";
import Search from "./Search/Search";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
