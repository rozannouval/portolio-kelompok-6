import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeaderMenu from "./HeaderMenu";

export default function ShowPages() {
  const [anggota, setAnggota] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/api/anggota");
    const data = await response.data.data;
    setAnggota(data);
  };

  const sortedAnggota = anggota.sort((a, b) => a.id - b.id);

  return (
    <div className="bg-gray-200 min-h-screen">
      <HeaderMenu
        title={"SEMUA KARTU ANGGOTA "}
        className="flex flex-col items-center"
      />

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 items-center">
        {sortedAnggota.length > 0 ? (
          sortedAnggota.map((anggota) => (
            <div key={anggota.id}>
              <Link
                to={`/card/${anggota.id}`}
                className="block w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl bg-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="p-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-t-lg">
                  <h1 className="text-xl font-bold">PORTOFOLIO</h1>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center">
                    <img
                      src={anggota.image_url}
                      alt=""
                      className="w-24 h-24 rounded-full border-4 border-indigo-600 object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-lg font-bold text-indigo-600">
                      {anggota.nama}
                    </h2>
                    <p className="text-sm text-gray-700">
                      {anggota.deskripsi_singkat}
                    </p>
                  </div>
                  <div className="h-1 mt-4 rounded-full animated-gradient"></div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="absolute right-96 text-center w-72">
            <h1 className="font-bold text-4xl font-sans">Data tidak ditemukan</h1>
          </div>
        )}
      </div>
      <div className="text-center mb-8 mt-16">
        <Link
          to={"/card"}
          className="text-white bg-blue-500 px-4 py-2 rounded-lg"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
}
