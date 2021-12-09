import React from "react";
import Footer from "../Footer";
import Nav from "../Nav";

const Error = () => {
  return (
    <>
      <Nav />
      <div className="error">
        <h1>404 not found!</h1>
      </div>
      <Footer />
    </>
  );
};

export default Error;
