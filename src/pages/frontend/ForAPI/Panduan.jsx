import { Link } from "react-router-dom";
import Footer from "../../../components/layout/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Panduan() {
  return (
    <div className="bg-slate-200 min-h-screen pt-4">
      <div className="px-4">
        <div
          className="relative mt-8 mb-12 flex flex-col items-center "
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <h1 className="bg-gray-300 border-solid border-2 border-gray-400 rounded-full px-10 py-2 shadow-md shadow-black">
            <span className="font-extrabold text-6xl text-transparent bg-gradient-to-br from-orange-600 via-purple-600 to-indigo-700 bg-clip-text">
              PANDUAN
            </span>
            <div className="h-1 rounded-full animated-gradient"></div>
          </h1>
          <Link
            to="/card"
            className="absolute right-0 bottom-0 mr-4 py-4 pl-8 pr-6 rounded-full text-white font-bold transition duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:shadow-gray-600 transform hover:scale-105 bg-gray-900"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            SKIP
            <FontAwesomeIcon icon={faArrowRight} className="px-2" />
          </Link>
        </div>
        <div
          className="bg-gray-900 text-gray-300 rounded-xl text-center px-16 py-8"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1 className="font-extrabold text-3xl">DINAMIS & STATIS</h1>
          <p className="my-2">
            Di website kami, ada dua jenis data yaitu data <span>Statis</span>{" "}
            dan <span>Dinamis</span>. Data ataupun Website <span>Statis</span>{" "}
            itu seperti buku yang isinya tetap, tidak berubah-ubah. kalian bisa
            membaca halaman-halaman yang sama setiap kali mengunjungi website
            kami. Sementara Data atau Website <span>Dinamis</span> itu lebih
            seperti acara TV yang bisa berubah-ubah setiap kali kalian
            menontonnya. Kontennya bisa berbeda tergantung pada apa yang kalian
            lakukan atau masukkan ke dalam database saat mengunjungi website
            kami. Jadi, website kami bisa menampilkan, mengedit, menghapus,
            bahkan menambahkan data di sisi client dalam konsep/format
            portofolio yang ada di database kalian. Terutama untuk kami kelompok
            6 yang merupakan pengembang website ini, karena kami ditugaskan
            membuat website portofolio untuk melatih skill pemograman kami.
          </p>
        </div>

        <div
          className="bg-gray-900 text-gray-300 rounded-xl text-left px-16 py-8 mt-12"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h1 className="font-extrabold text-3xl">APA YANG DIBUTUHKAN ?</h1>
          <h3 className="mb-1 mt-4 font-semibold text-lg">
            1. XAMPP (untuk menjalankan server)
          </h3>
          <p>
            Pertama, kalian membutuhkan XAMPP untuk menjalankan server APACHE &
            MYSQL jika sudah terinstall lalu jalankan dan klik tombol START pada
            bagian APACHE & MYSQL.
          </p>
          <p>
            <span>Download</span> :
            <a
              href="https://www.apachefriends.org/download.html"
              className="underline text-blue-500 hover:text-red-500 mx-1"
            >
              https://www.apachefriends.org/download.html
            </a>
            (download sesuai OS yang kalian gunakan)
          </p>

          <h3 className="mb-1 mt-4 font-semibold text-lg">
            2. Database & Tabel
          </h3>
          <p className="my-4">
            <span>
              DOWNLOAD Data Tabel Anggota Kelompok 6 (format SQL) (nama database
              = portofolio) :{" "}
            </span>
            <a
              href="https://drive.google.com/file/d/1bd_gHhdi06k3rugeEI4Yt_iko8qJjzSu/view?usp=sharing"
              className="font-bold mx-2 underline text-blue-500"
            >
              klik disini
            </a>
          </p>

          <p className="mb-2">
            bagi kalian yang mau berusaha untuk membuat tabel secara mandiri
            maka ikuti langkah-langkah dibawah ini
          </p>
          <span>~ Database</span>
          <p className="mb-2">
            untuk menambahkan database dan tabel, kalian perlu mengunjungi
            <a
              href="http://localhost/phpmyadmin/"
              className="underline text-blue-500 hover:text-red-500 mx-1"
            >
              http://localhost/phpmyadmin/
            </a>
            lalu klik tombol New di bagian kiri website dan untuk nama
            databasenya yaitu <span>portofolio</span>.
          </p>

          <span>~ Tabel</span>
          <p>
            Setelah membuat database, lalu membuat table dengan nama{" "}
            <span>card_anggota</span> dan buat <span>4 kolom</span>
          </p>
          <table className="table-auto w-full text-center border-solid border border-gray-400 mt-2 mb-4">
            <thead>
              <tr>
                <th className="border-solid border border-gray-400">Name</th>
                <th className="border-solid border border-gray-400">Type</th>
                <th className="border-solid border border-gray-400">
                  Length/Values
                </th>
                <th className="border-solid border border-gray-400">Index</th>
                <th className="border-solid border border-gray-400">A_I</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-solid border border-gray-400">id</td>
                <td className="border-solid border border-gray-400">INT</td>
                <td className="border-solid border border-gray-400">11</td>
                <td className="border-solid border border-gray-400">PRIMARY</td>
                <td className="border-solid border border-gray-400">✓</td>
              </tr>
              <tr>
                <td className="border-solid border border-gray-400">nama</td>
                <td className="border-solid border border-gray-400">VARCHAR</td>
                <td className="border-solid border border-gray-400">255</td>
                <td className="border-solid border border-gray-400"></td>
                <td className="border-solid border border-gray-400"></td>
              </tr>
              <tr>
                <td className="border-solid border border-gray-400">
                  image_url
                </td>
                <td className="border-solid border border-gray-400">TEXT</td>
                <td className="border-solid border border-gray-400"></td>
                <td className="border-solid border border-gray-400"></td>
                <td className="border-solid border border-gray-400"></td>
              </tr>
              <tr>
                <td className="border-solid border border-gray-400">
                  deskripsi_singkat
                </td>
                <td className="border-solid border border-gray-400">TEXT</td>
                <td className="border-solid border border-gray-400"></td>
                <td className="border-solid border border-gray-400"></td>
                <td className="border-solid border border-gray-400"></td>
              </tr>
            </tbody>
          </table>
          <p className="mb-2">
            Klik <span>Save</span>
          </p>

          <span>~ Insert</span>
          <p>
            Setelah membuat <span>Tabel</span> sesuai dengan format yang telah
            diberikan, lalu sekarang klik <span>Insert</span> yang berada diatas
            dan kalian <span>jangan mengisi bagian id</span>, biarkan saja kolom
            id tetap kosong.{" "}
            <span>Selain id, kalian isi sesuai dengan Judul Field.</span>
          </p>
          <p>
            (id akan terisi otomatis jika kalian mengosongkannya karena{" "}
            <span> A_I = ✓ (AUTO_INCREMENT = true)</span>)
          </p>

          <h3 className="mb-1 mt-4 font-semibold text-lg">3. Server Backend</h3>
          <p>
            Selain itu, untuk menambahkan data ke dalam database dari{" "}
            <span>sisi server</span>, kalian memerlukan sesuatu yang disebut{" "}
            <span>server backend</span>. Jadi, bayangkan server backend seperti{" "}
            <span>pelayan yang bekerja di balik layar </span>
            untuk membantu menyimpan dan mengelola data kalian.
          </p>
          <p className="my-2">
            Sebelum kalian bisa menggunakan <span>Express.js</span>, kalian
            harus menginstal <span>Node.js</span> terlebih dahulu. Node.js
            adalah seperti mesin yang memungkinkan kita menjalankan kode
            JavaScript di komputer kita. Sedangkan Express.js adalah kerangka
            kerja khusus JavaScript yang memungkinkan kita membuat situs web
            dengan mudah menggunakan Node.js. Jadi, untuk menggunakan
            Express.js, kita perlu memiliki Node.js terlebih dahulu.
          </p>
          <p>
            <span>Alternatifnya,</span> kalian juga bisa mengunduh kode
            Express.js kami di sini menggunakan github dengan cara GIT CLONE{" "}
            <a
              href="https://github.com/rozannouval/backend-portofolio"
              className="font-bold underline text-blue-400 "
            >
              GITHUB
            </a>{" "}
            <span>
              (maaf, belum sempurna karena situs web kami masih tahap
              pengembangan).{" "}
            </span>
            Untuk Belajar Express.js kalian bisa mengunjungi website
            <a
              href="https://www.santrikoding.com/kategori/express-js"
              className="underline text-blue-400 hover:text-red-500 mx-1"
            >
              santrikoding
            </a>
          </p>

          {/* END POINT */}
          <div className="my-8 text-center">
            <h1 className="text-3xl font-bold mb-4">End Point API Anggota</h1>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="bg-blue-600 p-4 rounded-lg shadow-lg"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <h2 className="text-xl font-semibold mb-2">GET</h2>
                <p className="text-lg text-white">localhost:3002/api/anggota</p>
                <p className="text-sm text-gray-300">
                  (Mendapatkan semua anggota)
                </p>
              </div>
              <div
                className="bg-green-600 p-4 rounded-lg shadow-lg"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h2 className="text-xl font-semibold mb-2">POST</h2>
                <p className="text-lg text-white">
                  localhost:3002/api/anggota/tambahAnggota
                </p>
                <p className="text-sm text-gray-300">
                  (Menambahkan anggota baru)
                </p>
              </div>
              <div
                className="bg-yellow-600 p-4 rounded-lg shadow-lg"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <h2 className="text-xl font-semibold mb-2">UPDATE</h2>
                <p className="text-lg text-white">
                  localhost:3002/api/anggota/update/:id
                </p>
                <p className="text-sm text-gray-300">
                  (Mengupdate anggota dengan ID tertentu)
                </p>
              </div>
              <div
                className="bg-red-600 p-4 rounded-lg shadow-lg"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h2 className="text-xl font-semibold mb-2">DELETE</h2>
                <p className="text-lg text-white">
                  localhost:3002/api/anggota/delete/:id
                </p>
                <p className="text-sm text-gray-300">
                  (Menghapus anggota dengan ID tertentu)
                </p>
              </div>
              <div
                className="bg-purple-600 p-4 rounded-lg shadow-lg col-span-2"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h2 className="text-xl font-semibold mb-2">GET</h2>
                <p className="text-lg text-white">
                  localhost:3002/api/anggota/:id
                </p>
                <p className="text-sm text-gray-300">
                  (Mendapatkan anggota dengan ID tertentu)
                </p>
              </div>
            </div>
          </div>

          <h3 className="mb-1 mt-4 font-semibold text-lg">4. Jalankan</h3>
          <div className="text-md italic">
            <h4>1. START APACHE DAN MYSQL DI XAMPP</h4>
            <h4>
              2. START SERVER BACKEND KALIAN (npm start, node server.js, npm run
              dev) TERGANTUNG FILE DAN PACKAGE.JSON KALIAN.
            </h4>
            <h4>
              3. KUNJUNGI WEBSITE KAMI ATAU START WEBSITE KAMI JIKA DIREPLIT
            </h4>
          </div>

          <h3 className="mb-1 mt-4 font-semibold text-lg italic">NOTE PLUS</h3>
          <p className="italic">
            KALIAN BISA MENGGUNAKAN <span>MODE ADMIN</span> DENGAN CARA KLIK{" "}
            <span>FORGOT PASSWORD</span> DAN KALIAN BISA MENGATUR DATA DARI
            DATABASE KALIAN
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-16 py-16">
        <Link
          to="/"
          className="py-4 px-8 rounded-full bg-white text-blue-800 font-bold hover:shadow-2xl hover:shadow-orange-300 transition duration-300 ease-in-out shadow-lg transform hover:scale-105 "
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="px-2" /> BACK
        </Link>

        <Link
          to="/card"
          className="py-4 pl-8 pr-6 rounded-full text-white font-bold transition duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:shadow-orange-300 transform hover:scale-105 bg-gradient-to-br from-pink-500 via-pink-500 to-orange-300"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          NEXT
          <FontAwesomeIcon icon={faArrowRight} className="px-2" />
        </Link>
      </div>

      <Footer />
    </div>
  );
}
