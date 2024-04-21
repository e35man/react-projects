import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBell } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <div className="absolute bottom-0 container mx-auto px-2 bg-red-100 min-h-screen min-w-full flex flex-col justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Welcome to My React App
      </h1>

      <main className="text-center">
        <p className="text-lg mb-4">
          Get started by exploring the following sections:
        </p>
        <nav className="flex flex-wrap gap-2 justify-center text-slate-50">
          <Link
            to="/subscribers"
            className="border p-2 bg-red-500 rounded-lg font-semibold hover:opacity-90"
          >
            <FontAwesomeIcon icon={faBell} /> View Subscriber Count
          </Link>
          <Link
            to="/views"
            className="border bg-red-500 rounded-lg p-2 font-semibold hover:opacity-90"
          >
            <FontAwesomeIcon icon={faEye} /> View Video View Count
          </Link>
        </nav>
      </main>
      <footer className="text-center mt-8">
        <p className="text-sm">
          For more information, check out the{" "}
          <a
            href="https://reactrouter.com"
            className="text-blue-500 hover:underline"
          >
            docs
          </a>{" "}
          at reactrouter.com
        </p>
      </footer>
    </div>
  );
}

/////////////////// HOW TO USE FA ICONS in REACT //////////////////////
// STEP 1:
//  Packages needed for fa icons for react projects
//  npm i --save @fortawesome/fontawesome-svg-core
//  npm i --save @fortawesome/free-solid-svg-icons
//  npm i --save @fortawesome/free-regular-svg-icons
//  npm i --save @fortawesome/free-brands-svg-icons
//  npm i --save @fortawesome/react-fontawesome@latest

// STEP 2:
// import statements:
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faBell } from "@fortawesome/free-solid-svg-icons";

// STEP 3:
//ready to use
{
  /* <FontAwesomeIcon icon={faEye} */
}
///////////////////////////////////////////////////////////////////////
