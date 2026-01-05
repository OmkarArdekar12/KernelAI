import Footer from "./components/Footer";
import Header from "./components/Header";
import MatrixBackground from "./components/MatrixBackground";

export default function Home() {
  return (
    <div className="w-full min-w-full relative min-h-screen bg-black text-white">
      <MatrixBackground />
      <div className="relative z-10 flex flex-col w-full min-h-screen items-center justify-center p-6">
        <header className="flex w-full items-center justify-center">
          <nav className="flex w-full items-center justify-center">
            <Header />
          </nav>
        </header>
        <main className="flex-1"></main>
        <footer className="flex w-full items-center justify-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
