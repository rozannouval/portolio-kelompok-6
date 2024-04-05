import Ipang from "./img/ipang.jpg";
import "./rivanda-style.css";
import Futsal from "./img/futsal.jpeg";
import Ouh from "./img/ouh.jpeg";
import Minsok from "./img/minsok.jpeg";
import Itb from "./img/itb.jpeg";
import { Link } from "react-router-dom";

function RivandaHome() {
  return (
    <div className="rivanda-home-container">
      <div className="rivanda-home">
        <img src={Ipang} alt="ipang" className="profil" />
        <div className="text">
          <h1>Rivanda</h1>
          <p>
            Hallo saya <span>Rivanda pratama</span> biasa di panggil ipang,saya
            lahir 28 agustus 2006 saya adalah siswa smk yadika soreang saya
            berada di jurusan RPL <span>(Rekayasa Perangkat Lunak)</span> hobi
            saya bermain futsal cita cita saya menjadi pemain FFI di U20{" "}
          </p>
        </div>
      </div>
      <div className="rivanda-content">
        <h1>
          <span> PRESTASI</span> FUTSAL
        </h1>

        <div className="rivanda-gambar">
          <Link to="/rivanda/prestasi">
            <img className="futsal" src={Futsal} alt="futsal" />
          </Link>
          <Link to="/rivanda/prestasi2">
            <img className="futsal" src={Ouh} alt="futsal" />
          </Link>
        </div>
        <div className="rivanda-gambar">
          <Link to="/rivanda/prestasi3">
            <img className="futsal" src={Minsok} alt="futsal" />
          </Link>
          <Link to="/rivanda/prestasi4">
            <img className="futsal" src={Itb} alt="futsal" />
          </Link>
        </div>
        <div className="teks"></div>
      </div>
    </div>
  );
}
export default RivandaHome;
