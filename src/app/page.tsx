import Header from "./components/Header";
import MatrixBackground from "./components/MatrixBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <MatrixBackground />

      {/* Foreground Content */}
      <div className="relative z-10">
        <Header />

        <section className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center space-y-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Kernel<span className="text-emerald-400">AI</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl">
              Your intelligent coding assistant powered by Gemini AI. Write.
              Fix. Optimize. Master code.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <button className="px-6 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-all">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-xl border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all">
                View Docs
              </button>
            </div>
          </div>
        </section>

        <footer className="py-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} KernelAI. Built for developers.
        </footer>
      </div>
    </main>
  );
}
