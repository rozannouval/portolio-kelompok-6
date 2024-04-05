import kegiatan2 from "../img/kegiatan2.jpeg";
import "./kegiatan.css";
import { Link } from "react-router-dom";

function KegiatanPC2() {
  return (
    <>
      <div className="kegiatanPC-container">
        <img src={kegiatan2} alt="2" />
        <h1>kegiatan PC</h1>

        <p>
          saya dari eskul pc membantu memperbaiki pc yang sudah rusak dan
          memperbaiki jaringan{" "}
        </p>
        <Link to="/christian">back</Link>
      </div>
    </>
  );
}

export default KegiatanPC2;
