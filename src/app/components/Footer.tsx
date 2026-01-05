import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <p className="text-emerald-300/70 text-center md:text-left">
        © {new Date().getFullYear()} KernelAI. Created by{" "}
        <a
          href="https://github.com/OmkarArdekar12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-300/70 hover:text-emerald-300 hover:underline transition"
        >
          Omkar Ardekar
        </a>
        .
      </p>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/OmkarArdekar12"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-emerald-300/70 hover:text-emerald-300 transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/omkarardekar09"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-emerald-300/70 hover:text-emerald-300 transition"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
