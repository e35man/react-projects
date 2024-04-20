import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-red-600 text-white sticky top-0 z-10 ">
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            <Link to={`/`}>Subscriber Count</Link>
          </h1>
          <div>
            <button
              id="mobile-open-button"
              className="text-3xl sm:hidden focus:outline-none"
            >
              &#9776;
            </button>
            <nav
              className="hidden sm:block space-x-8 text-xl"
              aria-label="main"
            >
              <ul className="flex justify-evenly">
                <Link to={`search`} className="mx-3 hover:opacity-90">
                  🔎 Search
                </Link>
                <li className="mx-3 hover:opacity-90">
                  <Link to={`subscribers`}>Live subs count</Link>
                </li>
                <li className="mx-3 hover:opacity-90">
                  <Link to={`views`}>Live view count</Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
}
