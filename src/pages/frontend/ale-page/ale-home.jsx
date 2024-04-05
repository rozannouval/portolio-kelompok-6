import Ale from "./img/ale.jpg";
import Navbar from "../../../components/layout/navbar";
import P5 from "./img/P5.jpg";
import ig from "./img/logo ig.png";
import wa from "./img/logo wa.png";
import "./ale-style.css";
import { Link } from "react-router-dom";

function AleHome() {
  return (
    <>
      <div className="ale-home-container">
        <Navbar />
        <div className="ale-home-bg">
          <div className="ale-home">
            <img className="profil" src={Ale} alt="ale" />
            <div className="ale-home-text">
              <h1>Who's Ale?</h1>
              <p>
                Nama saya adalah <span>Alefa firdaus fathurrizqi</span> saya
                adalah siswa SMK YADIKA SOREANG
              </p>
              <p>
                jurusan saya adalah <span>PPLG</span> (Pengembangan Perangkat
                Lunak & GIM)
              </p>
              <p>
                cita cita saya menjadi CEO suatu entertaiment, hobi saya
                menggambar dan mendesign
              </p>
              <p>saya lahir 23 januari 2007</p>
            </div>
            <div></div>
          </div>
          <div className="ale-content">
            <h1>PROJECT</h1>
            <div className="ale-project-content">
              <Link to="/ale/P5">
                <img src={P5} alt="P5" />
              </Link>
              <div className="ale-content-text">
                <h1 className="ale-aja">
                  Ini adalah project P5 yang di gelar pada tanggal 28 febuari
                  2023
                </h1>
              </div>
            </div>
          </div>
          <div className="rk">
            <div className="ig">
              <img src={ig} alt="pict ig" />
              <p>aleeeyyy__</p>
            </div>
            <div className="wa">
              <img src={wa} alt="pict wa" />
              <p>
                <a href="https://web.whatsapp.com/">+6283100120130</a>
              </p>
            </div>
          </div>
        </div>

        {/* <div className="ale-footer-content">
        <p>©Copyright by <span>odd'atelier</span></p>
      </div> */}
      </div>
    </>
  );
}
export default AleHome;
