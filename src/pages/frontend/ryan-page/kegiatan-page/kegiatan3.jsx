import ft3 from "../img/kegiatan3.jpeg";
import "./kegiatan.css";
import { Link } from "react-router-dom";

function Kegiatan3() {
  return (
    <>
      <div className="k-container">
        <img src={ft3} alt="ryan" />
        <h1>penampilan Eskul Pramuka di SMK Yadika Soreang</h1>
        <p>penampilan eskul pramuka pada awal masuk </p>

        <div className="back">
          <Link to="/ryan">back</Link>
        </div>
      </div>
    </>
  );
}

export default Kegiatan3;
