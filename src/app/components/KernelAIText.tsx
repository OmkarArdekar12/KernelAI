export default function KernelAIText({ size = "text-3xl" }: { size?: string }) {
  return (
    <span
      className={`${size} font-bold tracking-tight flex items-center gap-1 `}
    >
      <span className="text-white">Kernel</span>
      <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
        AI
      </span>
    </span>
  );
}
