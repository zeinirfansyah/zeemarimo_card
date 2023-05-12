import React from "react";
import Hero from "../components/sections/Hero";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <div className="mobile">
        <p className="text-center text-dark mt-5 fs-3 p-3">
          Sorry, for now this website doesn't support mobile devices. Make sure
          you open it in your desktop browser. -zee
        </p>
      </div>
    </div>
  );
};

export default Home;
