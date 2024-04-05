import { Link } from "react-router-dom";
import P5 from "./img/P5.jpg";
import "./ale-style.css";

function ProjectP5() {
  return (
    <>
      <div className="project-container">
        <img src={P5} alt="P5" />
        <h1>Project P5</h1>
        <p>
          P5 adalah kegiatan kokurikuler berbasis proyek yang dirancang untuk
          menguatkan upaya pencapaian kompetensi. Juga sebagai upaya mewujudkan
          karakter sesuai dengan profil pelajar pancasila yang disusun
          berdasarkan Standar Kompetensi Lulusan.
        </p>
        <Link to="/ale">back</Link>
      </div>
    </>
  );
}

export default ProjectP5;
