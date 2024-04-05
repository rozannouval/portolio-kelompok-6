import { Link } from "react-router-dom";

export default function HeaderMenu({ title, linkHref, linkTitle, linkBack }) {
  return (
    <div>
      {linkHref && linkTitle ? (
        <div className="flex justify-between items-center p-4 text-gray-700">
          <h1 className="md:text-2xl text-xl font-bold">{title}</h1>
          <Link
            to={linkHref}
            className="md:text-xl text-sm no-underline hover:text-indigo-500 transition all"
          >
            {linkTitle}
          </Link>
        </div>
      ) : (
        <div className="flex text-center flex-col items-center py-8 text-gray-700">
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
      )}
    </div>
  );
}
