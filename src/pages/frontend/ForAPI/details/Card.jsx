import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../../../components/layout/footer";
import HeaderMenu from "./HeaderMenu";

import { Link } from "react-router-dom";

export default function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/api/anggota");
    const data = await response.data.data;
    setData(data);
  };

  const sortedAnggota = data.sort((a, b) => a.id - b.id).slice(0, 3);

  return (
    <>
      <div className="min-h-screen px-4 pt-4 pb-16 bg-slate-200">
        <div className="text-center my-8">
          <h1 className="text-gray-600 font-extrabold text-3xl">DATA STATIS</h1>
          <p className="text-gray-500 px-32 my-2 italic">
            Card di bawah ini adalah contoh data statis yang dibuat tanpa
            menggunakan backend dan API dari database. Oleh karena itu, data
            pada card tersebut umumnya tidak dapat diubah, kecuali oleh
            pengembang secara manual. Kami menyediakan card seperti ini agar
            pengguna dapat dengan mudah membayangkan jenis card yang mungkin
            muncul ketika menggunakan database.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-4 items-center">
          <Link
            to={`/card/example`}
            className="block w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl bg-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-t-lg">
              <h1 className="text-xl font-bold">PORTOFOLIO</h1>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center">
                <img
                  src={"https://i.ibb.co/cCJpKG5/rozan.jpg"}
                  alt="example"
                  className="w-24 h-24 rounded-full border-4 border-indigo-600 object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-lg font-bold text-indigo-600">
                  Card Example
                </h2>
                <p className="text-sm text-gray-700">
                  gambaran card dan card ini dibuat secara statis
                </p>
              </div>
              <div className="h-1 mt-4 rounded-full animated-gradient"></div>
            </div>
          </Link>
        </div>
        <div className="text-center mb-8 mt-32">
          <h1 className="text-gray-600 font-extrabold text-3xl">
            DATABASE API
          </h1>
          <p className="text-gray-500 px-32 my-2 italic">
            Card di bawah ini adalah contoh card yang berasal dari data API
            database. Jika tidak ada card di bawah ini, berarti komputer kalian
            tidak memiliki backend, database, atau data tabel yang telah
            ditentukan, atau mungkin juga terjadi kesalahan. Pastikan XAMPP
            telah diaktifkan dan periksa konsol jika terjadi kesalahan.
          </p>
        </div>
        <HeaderMenu
          title={"CARD DINAMIS"}
          linkHref={"/card/all"}
          linkTitle={"Lihat Semua"}
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 items-center">
          {sortedAnggota.length > 0 ? (
            sortedAnggota.map((data) => (
              <div key={data.id}>
                <Link
                  to={`/card/${data.id}`}
                  className="block w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl bg-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="p-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-t-lg">
                    <h1 className="text-xl font-bold">PORTOFOLIO</h1>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-center">
                      <img
                        src={data.image_url}
                        alt=""
                        className="w-24 h-24 rounded-full border-4 border-indigo-600 object-cover"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h2 className="text-lg font-bold text-indigo-600">
                        {data.nama}
                      </h2>
                      <p className="text-sm text-gray-700">
                        {data.deskripsi_singkat}
                      </p>
                    </div>
                    <div className="h-1 mt-4 rounded-full animated-gradient"></div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-600 text-sm font-bold">
              (Data tidak ditemukan sehingga tidak akan muncul card)
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
