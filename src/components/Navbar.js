import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-white shadow-lg">
      <div className="uppercase navbar-menu lg:order-1 lg:block w-full lg:w-2/5 bold">
        <Link
          className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-900 hover:text-indigo-600"
          to="/"
        >
          Cafe React
        </Link>
      </div>
    </nav>
  );
}
