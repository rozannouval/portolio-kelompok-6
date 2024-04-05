import chris from "./img/ch.jpg";
import kegiatan1 from "./img/pj.jpeg";
import kegiatan2 from "./img/kegiatan2.jpeg";
import ig from "./img/logo ig.png";
import wa from "./img/logo wa.png";
import "./chris-style.css";

import { Link } from "react-router-dom";

function ChristianHome() {
  return (
    <div className="christian-home-container">
      <div className="pr">
        <div className="christian-home">
          <img className="christian-foto" src={chris} alt="christian" />
          <div className="chris">
            <h1>
              <span>Christian basa rico hutauruk</span>
            </h1>
            <p className="deskripsi">
              saya <span>Christian</span>, saya bersekolah di SMK yadika soreang
              saya mengambil jurusan <span>RPL (Rekayasa Perangkat Lunak)</span>
              . saya Lahir pada tanggal 25 Desember 2006. Saya sering di panggil
              christian,saya mengikuti Eskul PC Networking dan sudah merakit PC
              dan menyambungkan jaringan dari wifi ke PC. Hobi saya berolahraga.
            </p>
          </div>
        </div>
        <div className="project-text">
          <h1>
            {" "}
            <span>KEGIATAN</span>
          </h1>
          <div className="pro">
            <Link to="/christian/kegiatanAKM1">
              <img className="project-pc" src={kegiatan1} alt="christian" />
            </Link>
            <p>
              {" "}
              saya dari eskul PC Networking membantu kegiatan AKM memperbaikin
              yang error saat kegiatan berlangsung dan kami juga memperbaiki PC
              yang sudah rusak{" "}
            </p>

            <Link to="/christian/kegiatanPC2">
              <img className="project-pc" src={kegiatan2} alt="christian" />
            </Link>
          </div>
          <div className="pro">
            <Link to="/christian/kegiatanAKM1">
              <img className="project-pc" src={kegiatan1} alt="christian" />
            </Link>
            <p>
              {" "}
              saya dari eskul PC Networking membantu kegiatan AKM memperbaikin
              yang error saat kegiatan berlangsung dan kami juga memperbaiki PC
              yang sudah rusak{" "}
            </p>

            <Link to="/christian/kegiatanPC2">
              <img className="project-pc" src={kegiatan2} alt="christian" />
            </Link>
          </div>
        </div>
        <div className="rk">
          <div className="ig">
            <img src={ig} alt="foto ig" />
            <p>
              <a href="https://www.instagram.com/">christianbasarico_h</a>
            </p>
          </div>
          <div className="wa">
            <img src={wa} alt="foto wa" />
            <p>
              <a href="https://web.whatsapp.com/">+6289521849393</a>
            </p>
          </div>
        </div>
      </div>
      <div className="chris-footer-content">
        <p>
          ©Copyright by <span>christian</span>
        </p>
      </div>
    </div>
  );
}
export default ChristianHome;
