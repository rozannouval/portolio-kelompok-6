import Project from "./../img/project-2.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Bg from "../img/bg-project.mp4";
import "./project.css";

export default function ProjectRozan2() {
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
          <h1>Website LAJURI</h1>
          <p>
            Project ini dibuat oleh saya dan teman-teman saya dan bertujuan
            untuk membuat sebuah tempat jual beli{" "}
          </p>
        </div>
        <div className="btn-container">
          <Link to="/rozan" className="btn">
            BACK
          </Link>
        </div>
      </div>
    </>
  );
}
