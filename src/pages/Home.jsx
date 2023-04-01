import React from "react";

import Hero from "../components/sections/Hero";
import laying_totoro from "../assets/images/laying_totoro.png";
import paperplane from "../assets/images/paperplane.png";
import totoro_family from "../assets/images/totoro_friends.png";
import smile_totoro from "../assets/images/smile_totoro.png";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <div className="img1">
        <img className="imgassets imgasset1" src={smile_totoro} alt="" />
      </div>

      <img className="imgassets imgasset5" src={totoro_family} alt="" />
    </div>
  );
};

export default Home;
