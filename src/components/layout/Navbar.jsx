import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#000000] border-b-2 border-[#450000]">
      <h1 className="text-2xl font-title text-white">Mahavidya</h1>
      <ul className="flex gap-6">
        {["Home", "Prototype", "Partnership", "Experiment", "Token", "Dashboard"].map((page) => (
          <li key={page}>
            <Link
              to={`/${page.toLowerCase()}`}
              className="text-white hover:text-[#2A0001] transition-colors"
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
