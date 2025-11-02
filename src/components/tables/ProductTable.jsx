import React from "react";
import { ProductModel } from "../../models/productModel";
import { useSheetData } from "../../hooks/useSheetData";

export default function ProductTable() {
  const { data, loading } = useSheetData(ProductModel.getAll);

  if (loading) return <p className="text-gray-400">Memuat data produk...</p>;

  return (
    <div className="overflow-x-auto shadow-lg border-2 border-[#450000] rounded-xl">
      <table className="w-full border-collapse text-left">
        <thead className="bg-[#450000] text-white font-semibold">
          <tr>
            <th className="py-3 px-4">ID</th>
            <th className="py-3 px-4">Nama Produk</th>
            <th className="py-3 px-4">Deskripsi</th>
            <th className="py-3 px-4">Link</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr
              key={i}
              className="hover:bg-[#2A0001] transition-all duration-200"
            >
              <td className="py-3 px-4">{item.id}</td>
              <td className="py-3 px-4">{item.name}</td>
              <td className="py-3 px-4">{item.desc}</td>
              <td className="py-3 px-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffffff] hover:text-[#2A0001] underline"
                >
                  Kunjungi
                </a>
              </td>
              <td className="py-3 px-4">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
