import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

const Layouts = ({ children }) => (
  <div>
    <NavBar />
    {children}
    <Footer />
  </div>
);

export default Layouts;
