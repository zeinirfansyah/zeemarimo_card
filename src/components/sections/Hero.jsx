import React from "react";
import foto from "../../assets/images/foto.jpg";
import pixel_totoro1 from "../../assets/images/pixel_totoro1.png";
import discordicon from "../../assets/images/icons8-discord-50-7.svg";
import instagramicon from "../../assets/images/icons8-instagram-50.svg";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="container">
        <div className="card w-75 ms-auto">
          <div className="row">
            <h2 className="title-card text-center">Zeemarimo Card</h2>
            <div className="col-3">
              <div className="hero__img">
                <img className="foto foto1" src={foto} alt="" />
              </div>
            </div>
            <div className="col">
              <div className="hero__text w-75">
                <div className="row">
                  <div className="col text">
                    Hai I'm <b>zeemarimo</b>, you can call me <b>zee</b>. I'm a
                    frontend engineer and I love to create things. I'm currently
                    live in Yogyakarta, Indonesia. I'm a self-taught programmer
                    and I love to learn new things.
                  </div>
                </div>
                <div className="row">
                  <div className="col socmed">
                    <div className="row">
                      <div className="col">
                        <a href="">
                          <img src={discordicon} alt="" className="discord" />
                          zee #1790
                        </a>
                      </div>
                      <div className="col">
                        <a href="">
                          <img src={instagramicon} alt="" />
                          zeemarimo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="imgassets imgasset3" src={pixel_totoro1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
