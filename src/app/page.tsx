import Header from "./components/Header";
import MatrixBackground from "./components/MatrixBackground";

export default function Home() {
  return (
    <main className="w-full relative min-h-screen overflow-hidden bg-black-600 text-white">
      <MatrixBackground />
      <div className="relative z-10 flex flex-column w-full items-center justify-center py-6">
        <Header />
      </div>
    </main>
  );
}
