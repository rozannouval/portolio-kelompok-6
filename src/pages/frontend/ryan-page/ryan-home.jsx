import ryan from "./img/pp gj.jpg";
import ig from "./img/logo ig.png";
import wa from "./img/logo wa.png";
import ft1 from "./img/kegiatan1.jpeg";
import ft2 from "./img/kegiatan2.jpeg";
import ft3 from "./img/kegiatan3.jpeg";
import ft4 from "./img/kegiatan4.jpeg";
import "./ryan-style.css";

import { Link } from "react-router-dom";

function RyanHome() {
  return (
    <div className="ryan-home-container">
      <div className="ryan-home-background">
        <div className="ryan-home">
          <img className="ryan-foto" src={ryan} alt="ryan" />
          <div className="ryan-text">
            <h1>Ryan</h1>
            <p>
              Saya <span>Riri Ryan</span>,saya biasa di pangil ryan oleh
              teman-teman saya.Saya bersekolah di SMK YADIKA soreang. Sekarang
              saya kelas 11 dengan jurusan
              <span>RPL (Rekasaya Perangkat Lunak)</span>.Saya lahir pada
              tanggal 28 desember 2006,di sekolah saya mengikuti eskul Pramuka
              dan sudah beberapa kali mengikuti perlombaan di tingkat kabupaten
              dan sudah beberapa kali mendapatkan piala dan piagam. Hobi saya
              membaca dan berolahraga
            </p>
            <p>
              Alamat tinggal saya di kp.JuntiGirang RT.03 RW.11, Desa Banyusari
              Kecamatan Katapang Kab.Bandung
            </p>
          </div>
        </div>
      </div>
      <div className="project-aktv-bg">
        <div className="project-aktv">
          <h1>KEGIATAN</h1>
          <div className="ft-kegiatan-container">
            <div className="ft-kegiatan">
              <Link to="/ryan/kegiatan1">
                <div>
                  <img className="ft0" src={ft1} alt="ryan" />
                  <p>sesi foto lomba miko berbaris 3.0 </p>
                </div>
              </Link>
              <Link to="/ryan/kegiatan2">
                <div>
                  <img className="ft0" src={ft2} alt="ryan" />
                  <p>Kegiatan saat MOPK di SMK Yadika </p>
                </div>
              </Link>
            </div>

            <div className="ft-kegiatan">
              <Link to="/ryan/kegiatan3">
                <div>
                  <img className="ft0" src={ft3} alt="ryan" />
                  <p>Penampilan saat demo eskul </p>
                </div>
              </Link>
              <Link to="/ryan/kegiatan4">
                <div>
                  <img className="ft0" src={ft4} alt="ryan" />
                  <p>Kegiatan sebelum tampil di GTP</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mh">
          <div className="ig">
            <img className="logo-ig" src={ig} alt="foto ig" />
            <p>ownerDOHC</p>
          </div>
          <div className="wa">
            <img className="logo-wa" src={wa} alt="foto wa" />
            <p>+6283896732535</p>
          </div>
        </div>
      </div>
      <div className="ryan-footer-content">
        <p>
          ©Copyright by <span>ryan™ </span>
        </p>
      </div>
    </div>
  );
}
export default RyanHome;
