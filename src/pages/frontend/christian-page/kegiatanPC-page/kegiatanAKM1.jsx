import kegiatan1 from "../img/pj.jpeg";
import bg1 from "../img/bg.jpg";
import "./kegiatan.css";
import { Link } from "react-router-dom";

function KegiatanAKM1() {
  return (
    <>
      <div className="kegiatanAKM-container">
        <img src={kegiatan1} alt="1" />
        <img src={bg1} alt="1" />
        <h1>kegiatan saat AKM</h1>
        <p>
          saya dan teman-teman dari eskul pc membatu mengawasi kegiatan AKM dan
          membantu mengawasi siswa/siswi saat sedang AKM berlangsung dan
          membantu apa bila ada yg tidak bisa/error.{" "}
        </p>
        <Link to="/christian">back</Link>
      </div>
    </>
  );
}

export default KegiatanAKM1;
