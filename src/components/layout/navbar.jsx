import { Link } from "react-router-dom";

function Navbar({ defaultText, isAdmin, adminText }) {
  return (
    <nav className="bg-gradient-to-r from-purple-700 to-indigo-500 text-white w-full py-4 px-8">
      <div className="flex items-center justify-between md:flex-row flex-col">
        <Link to="/">
          <h1 className="font-bold text-lg md:text-2xl">PORTOFOLIO</h1>
        </Link>
        {isAdmin ? (
          <span className="text-white font-bold text-lg md:text-2xl">
            {adminText}
          </span>
        ) : (
          <Link
            to="/login"
            className="bg-white text-blue-800 py-1 px-2 md:py-2 md:px-4 font-bold text-sm md:text-lg rounded-lg"
          >
            {defaultText}
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
