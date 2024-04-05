import Ouh from "../img/ouh.jpeg";
import "./prestasi.css";

function Prestasi2() {
  return (
    <>
      <div className="prestasi-container">
        <div className="prestasi-content">
          <img className="gambar-prestasi" src={Ouh} alt="futsal" />
          <div className="text-prestasi">
            <h1>
              ini waktu pertama kali adik kelas{" "}
              <span> kami meraih kejuaraan bandung</span> progresif bersama kami
              tahun 2023 Kejuaraan \ pertama kali mengikuti turnamen antar
              sekolah alhamdulilahnya kami mendapatkan juara ke 1{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default Prestasi2;
