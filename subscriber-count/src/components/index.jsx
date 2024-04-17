import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBell } from "@fortawesome/free-solid-svg-icons";
import Warning from "./Warning";
export default function Index() {
  return (
    <div className="absolute bottom-0 container mx-auto px-2 bg-red-100 min-h-screen min-w-full flex flex-col justify-center">
      <Warning />
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Welcome to My React App</h1>
        <p className="text-lg mt-2">This project is made using React Router.</p>
      </header>
      <main className="text-center">
        <p className="text-lg mb-4">
          Get started by exploring the following sections:
        </p>
        <nav className="flex justify-center space-x-4">
          <Link
            to="/subscribers"
            className="text-blue-500 hover:underline font-semibold"
          >
            <FontAwesomeIcon icon={faBell} /> View Subscriber Count
          </Link>
          <Link
            to="/views"
            className="text-blue-500 hover:underline font-semibold"
          >
            <FontAwesomeIcon icon={faEye} /> View Video Views Count
          </Link>
        </nav>
      </main>
      <footer className="text-center mt-8">
        <p className="text-sm">
          For more information, check out{" "}
          <a
            href="https://reactrouter.com"
            className="text-blue-500 hover:underline"
          >
            the docs at reactrouter.com
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

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
