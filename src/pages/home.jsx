import Button from "../components/Button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center fade-in">
      <h1 className="text-4xl mb-4 font-serif">Selamat Datang di Mahavidya</h1>
      <p className="max-w-xl text-lg font-sans mb-6">
        Membangun pendidikan agar terus berkembang, tempat gagasan bertemu dengan era masyarakat baru.
      </p>
      <Button>Mulai Membangun Bersama</Button>
    </section>
  );
}
