import React from "react";
import Layout from "../components/layout/Layout";

export default function HomePage() {
  return (
    <Layout>
      <section className="text-center py-16 space-y-6">
        <h1 className="text-4xl font-title text-white">Thaha Mahavidya</h1>
        <p className="max-w-3xl mx-auto text-gray-300">
          Platform pendidikan kolaboratif berbasis inovasi, prototipe, dan
          kontribusi untuk masyarakat sehinnga setiap ide berhak mendapatkan nilai.
        </p>
      </section>
    </Layout>
  );
}
