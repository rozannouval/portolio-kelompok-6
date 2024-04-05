import ft2 from "../img/kegiatan2.jpeg";
import "./kegiatan.css";
import { Link } from "react-router-dom";

function Kegiatan2() {
  return (
    <>
      <div className="k-container">
        <img src={ft2} alt="ryan" />
        <h1>pelaksnaan MOPK di SMK YADIKA Soreang</h1>
        <p>
          Kegiatan ini dilasksanakan pada tanggal 17 juli 2023 bertujuan untuk
          melatih dan mendidik siswa siswi baru{" "}
        </p>
        <div className="back">
          <Link to="/ryan">back</Link>
        </div>
      </div>
    </>
  );
}

export default Kegiatan2;
