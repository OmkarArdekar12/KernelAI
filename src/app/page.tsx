import Header from "./components/Header";
import MatrixBackground from "./components/MatrixBackground";

export default function Home() {
  return (
    <main className="w-full h-full min-w-full relative min-h-screen bg-black text-white">
      <MatrixBackground />
      <div className="relative z-10 flex flex-column w-full items-center justify-center p-10">
        <Header />
      </div>
    </main>
  );
}
