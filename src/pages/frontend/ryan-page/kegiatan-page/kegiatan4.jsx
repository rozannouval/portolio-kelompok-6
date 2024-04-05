import ft4 from "../img/kegiatan4.jpeg";
import "./kegiatan.css";
import { Link } from "react-router-dom";

function Kegiatan4() {
  return (
    <>
      <div className="k-container">
        <img src={ft4} alt="ryan" />
        <h1>ini Kegiatan4</h1>
        <p>penampilan</p>

        <div className="back">
          <Link to="/ryan">back</Link>
        </div>
      </div>
    </>
  );
}

export default Kegiatan4;
