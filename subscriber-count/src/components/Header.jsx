import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-red-600 text-white sticky top-0 z-10">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            <Link to={`/`}>YouTube Stats</Link>
          </h1>
          <div>
            <button
              id="hamburger-button"
              className="text-3xl md:hidden cursor-pointer"
              onClick={toggleMenu}
            >
              &#9776;
            </button>
            <nav
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } md:block space-x-8 text-xl`}
              aria-label="main"
            >
              <ul className="flex justify-evenly">
                <Link
                  to={`/search`}
                  className="mx-3 hover:opacity-90"
                  onClick={closeMenu}
                >
                  🔎 Search
                </Link>
                <li className="mx-3 hover:opacity-90">
                  <Link to={`/subscribers`} onClick={closeMenu}>
                    Live subs count
                  </Link>
                </li>
                <li className="mx-3 hover:opacity-90">
                  <Link to={`/views`} onClick={closeMenu}>
                    Live view count
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section
          id="mobile-menu"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden absolute top-0 bg-black w-full text-4xl flex-col justify-content-center origin-top animate-open-menu`}
        >
          <button className="text-8xl self-end px-6" onClick={toggleMenu}>
            &times;
          </button>
          <nav
            className="flex flex-col min-h-screen items-center py-8 gap-10"
            aria-label="mobile"
          >
            <Link
              to={`/`}
              className="mx-3 hover:opacity-80"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to={`/search`}
              className="mx-3 hover:opacity-80"
              onClick={closeMenu}
            >
              🔎 Search
            </Link>
            <Link
              to={`/subscribers`}
              className="mx-3 hover:opacity-80"
              onClick={closeMenu}
            >
              Live subs count
            </Link>
            <Link
              to={`/views`}
              className="mx-3 hover:opacity-80"
              onClick={closeMenu}
            >
              Live view count
            </Link>
          </nav>
        </section>
      </header>
    </>
  );
}
