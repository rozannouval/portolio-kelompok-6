import Footer from "../../components/layout/footer";
import { Link } from "react-router-dom";
import Background from "../../assets/img/background.png";

// import AOS from 'aos';

function Home() {
  return (
    <div>
      <section
        className="relative flex flex-col items-center justify-center py-60 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(79, 59, 169, 0.7), rgba(247, 187, 151, 0.7)), url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0"></div>
        <div className="z-10 text-center md:text-left text-white relative px-4 md:px-16">
          <h1 className="font-bold text-2xl md:text-5xl leading-snug mb-8">
            Selamat Datang di Website Portofolio Kelompok 6
          </h1>
          <div className="flex items-center gap-4 flex-col md:flex-row">
            <Link
              to="/panduan"
              className="py-2 px-6 md:py-4 md:px-10 rounded-full text-white font-semibold text-sm md:text-lg md:font-bold transition duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:shadow-orange-300 transform hover:scale-105 bg-gradient-to-br from-pink-500 via-pink-500 to-orange-300"
            >
              Get Started
            </Link>

            <Link
              to="/about"
              className="py-2 px-6 md:py-4 md:px-10 rounded-full bg-white text-blue-800 font-semibold md:font-bold text-sm md:text-lg hover:shadow-2xl hover:shadow-white transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
            >
              About
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
