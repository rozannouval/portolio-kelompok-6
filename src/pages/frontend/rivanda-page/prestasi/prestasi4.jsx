import Itb from "../img/itb.jpeg";
import "./prestasi.css";

function Prestasi4() {
  return (
    <>
      <div className="prestasi-container">
        <img className="gambar-prestasi" src={Itb} alt="futsal" />
        <div className="text-prestasi">
          <h1>
            ini waktu meraih kejuaraan di lapangan{" "}
            <span>jatinangor sumedang bersama</span> kaka kelas kami anak anak
            RPL 30 juli 2023
          </h1>
        </div>
      </div>
    </>
  );
}
export default Prestasi4;
