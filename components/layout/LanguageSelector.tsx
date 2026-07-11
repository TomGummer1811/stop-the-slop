"use client";

import { useState, useRef, useEffect } from "react";
import { locales } from "@/i18n.config";
import { motion, AnimatePresence } from "framer-motion";
import { useIntl } from "@/components/providers/IntlProvider";

export function LanguageSelector() {
  const { locale, setLocale } = useIntl();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find((l) => l.code === locale);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors text-sm font-medium text-slate-900"
      >
        <span className="text-lg">{currentLocale?.flag}</span>
        <span>{currentLocale?.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 z-50"
          >
            <div className="max-h-80 overflow-y-auto">
              {locales.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => handleLanguageChange(loc.code)}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                    locale === loc.code
                      ? "bg-teal-50 text-teal-900"
                      : "hover:bg-slate-50 text-slate-900"
                  }`}
                >
                  <span className="text-lg">{loc.flag}</span>
                  <span className="flex-1">{loc.name}</span>
                  {locale === loc.code && (
                    <svg
                      className="w-4 h-4 text-teal-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
