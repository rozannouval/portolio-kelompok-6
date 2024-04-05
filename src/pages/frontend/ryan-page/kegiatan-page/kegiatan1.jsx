import ft1 from "../img/kegiatan1.jpeg";
import "./kegiatan.css";

import { Link } from "react-router-dom";

function Kegiatan1() {
  return (
    <>
      <div className="k-container">
        <img src={ft1} alt="ryan" />
        <h1>Kegiatan lomba di miko berbaris 3.0 sesi foto </h1>
        <p>
          Saya mengkuti lomba ini karena saya dan pasukan merasa tertantang oleh
          peserta lain yang katanya sudah mahir dan bagus saat tampil pada saat
          lomba. Lomba tersebut di laksanakan pada tanggal 03-04 Februari 2024,
          berlokasi di miko mall kopo.{" "}
        </p>
        <div className="back">
          <Link to="/ryan">back</Link>
        </div>
      </div>
    </>
  );
}

export default Kegiatan1;
