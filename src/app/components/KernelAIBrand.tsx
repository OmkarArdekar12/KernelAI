import Image from "next/image";

const KernelAIBrand = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 px-4">
      <Image
        src="/kernelAI-logo.png"
        alt="KernelAI Logo"
        width={100}
        height={100}
        priority
      />
      <span
        className={`text-4xl sm:text-5xl font-extrabold tracking-tight flex items-center`}
      >
        <span className="text-white">Kernel</span>
        <span className="bg-linear-to-r from-lime-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
          AI
        </span>
      </span>
    </div>
  );
};

export default KernelAIBrand;
