import Futsal from "../img/futsal.jpeg";
import "./prestasi.css";

function Prestasi() {
  return (
    <>
      <div className="prestasi-container">
        <img className="gambar-prestasi" src={Futsal} alt="futsal" />
        <div className="text-prestasi">
          <h1>
            ini waktu meraih kejuaraan bandung{" "}
            <span> cibiru bersama kaka kelas kami</span> yang sudah menjadi
            alumni di tahun 2023.Bersinergi membawa Futsal yadika menuju ke liga
            nasional dan berlaga di Pentas nasional. Menjadikan Futsal sebagai
            olahraga industri dan membanggakan di kancah internasional.
          </h1>
        </div>
      </div>
    </>
  );
}
export default Prestasi;
