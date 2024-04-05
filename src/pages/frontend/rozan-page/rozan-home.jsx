import React, { useEffect } from "react";
import "./rozan-style.css";
import { TypeAnimation } from "react-type-animation";

import { Link } from "react-router-dom";

// img
import Project from "./img/project.png";
import Project2 from "./img/project-2.png";
import Rozan from "./img/rozan.png";
import People from "./img/people.png";

import Bg2 from "./img/bg2.mp4";

function RozanHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="">
        <div
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg rounded-lg p-8"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="rozan-foto w-40 h-40 rounded-full mx-auto mb-8"
            src={Rozan}
            alt="Rozan"
          />

          <div className="rozan-home-text text-center">
            <TypeAnimation
              sequence={[
                "Who Is This Student?",
                1000,
                `I Am Rozan Nouval`,
                1000,
                "I Want To be a Programmer",
                1000,
                "I went to school in Yadika",
                1000,
              ]}
              wrapper="div"
              speed={30}
              style={{
                fontSize: "2em",
                display: "inline-block",
                fontWeight: "400",
                marginBottom: "1rem",
                letterSpacing: "0.1em",
                fontFamily: "Lilita One",
              }}
              repeat={Infinity}
            />

            <p className="text-lg leading-relaxed">
              Halo, Perkenalkan nama saya Rozan Nouval dan saya seorang pelajar
              di sekolah SMK Yadika Soreang dan tentunya saya mengambil jurusan
              Rekayasa Perangkat Lunak atau biasa disebut RPL. Hobi saya bermain
              game, jika ngoding bisa disebut hobi maka saya juga terkadang
              menggunakan waktu luang untuk mengoding.
            </p>
            <div className="mt-8">
              <p className="text-lg font-bold">
                "Jangan Menilai Buku dari Sampulnya terkadang Kita Kagum dengan
                Isinya."
              </p>
            </div>
          </div>
        </div>

        <div className="rozan-project">
          <h1>PROJECT</h1>
          <div className="rozan-project-content">
            <Link to="/rozan/project1">
              <img src={Project} alt="Project" />
            </Link>
            <Link to="/rozan/project2">
              <img src={Project2} alt="Project" />
            </Link>
            {/* <div className="rozan-project-text">
            <h2>Website Cloning SMK Yadika Soreang</h2>
            <p>Saya pernah membuat cloning website sekolah SMK Yadika Soreang menggunakan react.js </p>
            </div> */}
          </div>
        </div>
      </div>
      <section className="rozan-footer">
        <div className="rozan-footer-content">
          <p>©Copyright by Rozan Nouval 2024</p>
        </div>
      </section>
    </>
  );
}

export default RozanHome;
