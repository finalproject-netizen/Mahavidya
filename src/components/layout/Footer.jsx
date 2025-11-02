import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-6 border-t-2 border-[#450000] text-sm text-gray-400">
      © {new Date().getFullYear()} Mahavidya — Thaha Corporation
    </footer>
  );
}
