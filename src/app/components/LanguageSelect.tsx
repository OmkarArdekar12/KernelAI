"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface LanguageSelectProps {
  value: string;
  options: string[];
  disabled?: boolean;
  onChange: (value: string) => void;
  open: boolean;
  toggleSelect: (value: boolean) => void;
}

const LanguageSelect = ({
  value,
  options,
  disabled,
  onChange,
  open,
  toggleSelect,
}: LanguageSelectProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        toggleSelect(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        disabled={disabled}
        onClick={() => toggleSelect(!open)}
        className="w-full group flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-black/60 border border-emerald-500/40 text-emerald-100 backdrop-blur-md hover:border-emerald-400/60 cursor-pointer transition-all disabled:hover:border-emerald-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <span className="flex items-center gap-2">
          <PiBracketsCurlyBold className="text-emerald-400 size-5" />
          {value}
        </span>
        <span
          className={`text-xs text-emerald-500/40 ${
            disabled
              ? "group-hover:text-emerald-500/40"
              : "group-hover:text-emerald-400"
          }`}
        >
          {open ? (
            <IoIosArrowUp className="size-5" />
          ) : (
            <IoIosArrowDown className="size-5" />
          )}
        </span>
      </button>

      <AnimatePresence>
        {open && !disabled && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 mt-2 w-full max-h-60 overflow-y-auto kernel-scrollbar rounded-xl bg-black/80 border border-emerald-500/40 backdrop-blur-lg"
          >
            {options.map((lang) => (
              <li key={lang}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(lang);
                    toggleSelect(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition cursor-pointer rounded-xl
                  ${
                    value === lang
                      ? "bg-emerald-600/30 text-emerald-200"
                      : "text-emerald-100 hover:bg-emerald-500/20 hover:border hover:border-emerald-500/50"
                  }`}
                >
                  {lang}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelect;
