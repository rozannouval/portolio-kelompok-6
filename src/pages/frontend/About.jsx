import Footer from "../../components/layout/footer";

export default function About() {
  const skills = [
    { name: "HTML", percentage: 80 },
    { name: "CSS", percentage: 80 },
    { name: "JavaScript", percentage: 50 },
    { name: "React.js", percentage: 40 },
    { name: "Next.js", percentage: 50 },
    { name: "Tailwind", percentage: 70 },
  ];
  return (
    <div className="bg-gray-900 py-4">
      <h1 className="font-extrabold text-4xl py-4 text-gray-200 text-center">
        TENTANG KAMI
      </h1>
      <div className="flex items-center justify-center gap-8 pt-6">
        <div
          className="relative overflow-hidden w-32 h-32 rounded-full border-solid border-2 border-white"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(79, 59, 169, 0.5), rgba(247, 187, 151, 0.5)), url(https://i.ibb.co/F6RMG1D/ri.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-aos="fade-right"
          data-aos-duration="2000"
        ></div>

        <div
          className="relative overflow-hidden w-32 h-32 rounded-full border-solid border-2 border-white"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(79, 59, 169, 0.6), rgba(247, 187, 151, 0.3)), url(https://i.ibb.co/Hhc0903/ipang.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-aos="fade-up"
          data-aos-duration="2000"
        ></div>

        <div
          className="relative overflow-hidden w-32 h-32 rounded-full border-solid border-2 border-white"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img
            src="https://i.ibb.co/cCJpKG5/rozan.jpg"
            className="absolute inset-0 w-full h-full object-cover animate-move"
            alt="Foto Anggota 3"
          />
        </div>

        <div
          className="relative overflow-hidden w-32 h-32 rounded-full border-solid border-2 border-white"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(79, 59, 169, 0.5), rgba(247, 187, 151, 0.5)), url(https://i.ibb.co/2Z9FSYg/ale.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-aos="fade-down"
          data-aos-duration="2000"
        ></div>

        <div
          className="relative overflow-hidden w-32 h-32 rounded-full border-solid border-2 border-white"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(79, 59, 169, 0.3), rgba(247, 187, 151, 0.3)), url(https://i.ibb.co/BCq6W79/ch.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-aos="fade-left"
          data-aos-duration="2000"
        ></div>
      </div>

      <div
        className="px-8 py-6 mx-8 my-16 bg-gray-200 text-gray-700 rounded-lg"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h1 className="font-extrabold text-2xl mb-2">SIAPAKAH KAMI ?</h1>
        <p>
          Kami adalah sekumpulan siswa yang berada di jurusan
          <span> Rekayasa Perangkat Lunak </span> dan berlokasi tepatnya di SMK
          Yadika Soreang. Kami merupakan Kelompok ke 6 dari 7 Kelompok yang ada
          dikelas kami. Kami Kelompok 6 beranggota 6 orang yang terdiri atas
          <span>
            {" "}
            Riri Ryan, Rivanda Pratama, Rozan Nouval, Alefa Firdaus, dan
            Christian Basa{" "}
          </span>
          (lihat di gambar dari kiri ke kanan). Kelompok 6 memiliki
          <span> Ketua</span> yaitu
          <span> Rozan Nouval</span> yang gambarnya berada di tengah.
        </p>
      </div>

      <div
        className="px-8 py-6 mx-8 my-16 bg-gray-200 text-gray-700 rounded-lg"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <h1 className="font-extrabold text-2xl mb-6">LEADER SKILLS</h1>
        <div className="flex flex-col items-center justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="w-full mb-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-gray-600">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4 mt-1">
                <div
                  className="bg-blue-500 h-full rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
