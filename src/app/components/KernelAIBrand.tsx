import Image from "next/image";

export default function KernelAIBrand({
  size = "text-3xl",
  logoSize = 48,
}: {
  size?: string;
  logoSize?: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/kernelAI-logo.png"
        alt="KernelAI Logo"
        width={logoSize}
        height={logoSize}
        priority
      />
      <span
        className={`${size} font-extrabold tracking-tight flex items-center`}
      >
        <span className="text-white">Kernel</span>
        <span className="bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
          AI
        </span>
      </span>
    </div>
  );
}
