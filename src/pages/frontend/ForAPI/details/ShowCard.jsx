import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ShowCard() {
  const { id } = useParams();
  const [anggota, setAnggota] = useState([]);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/anggota/${id}`
      );
      const data = response.data.data;
      setAnggota(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 
  return (
    <div className="min-h-[90vh] flex items-center bg-gradient-to-br from-gray-800 via-purple-900 to-pink-900 px-4 md:px-10 lg:px-20">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center text-center justify-center gap-8">
          <img src={anggota.image_url} alt={anggota.nama} className="w-80 h-80 rounded-lg" />
          <h2 className="text-4xl md:text-6xl font-bold text-white font-serif">{anggota.nama}</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mt-4 font-serif">{anggota.full_deskripsi}</p>
          <p className="text-sm italic text-gray-500 mt-2 font-serif">{anggota.qoutesOps}</p>
        </div>
      </div>
    </div>

  );
}
