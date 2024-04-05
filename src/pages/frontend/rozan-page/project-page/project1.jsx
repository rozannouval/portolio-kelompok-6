import Project from "./../img/project.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Bg from "../img/bg-project.mp4";
import "./project.css";

export default function ProjectRozan1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="rozan-project-container">
        <div className="rozan-project-bg">
          <video autoPlay loop muted>
            <source src={Bg} type="video/mp4" />
          </video>
        </div>
        <div className="rozan-project-gambar">
          <img src={Project} />
        </div>
        <div className="rozan-project-tulisan">
          <h1>Cloning Website SMK Yadika Soreang</h1>
          <p>
            Project ini dibuat oleh saya menggunakan react.js dan website ini
            hanya cloning dari website aslinya yaitu website SMK Yadika Soreang
          </p>
        </div>
        <div className="tombol-container">
          <Link to="/rozan" className="tombol">
            BACK
          </Link>
        </div>
      </div>
    </>
  );
}
