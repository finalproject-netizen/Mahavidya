import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white">
      <Navbar />
      <main className="flex-grow px-8 py-6">{children}</main>
      <Footer />
    </div>
  );
}
