"use client";

import { motion } from "framer-motion";
import { DisclosureLevel } from "@/types";

interface Step3Props {
  hadDisclosure: DisclosureLevel;
  details: string;
  onDisclosureChange: (value: DisclosureLevel) => void;
  onDetailsChange: (value: string) => void;
}

export function Step3Disclosure({
  hadDisclosure,
  details,
  onDisclosureChange,
  onDetailsChange,
}: Step3Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="mb-4">Was the AI use disclosed?</h2>
      <p className="text-slate-600 mb-8">
        Did the company clearly disclose that the content was AI-generated?
      </p>

      <div className="space-y-3 mb-8">
        {[
          { value: "yes", label: "Yes", description: "It was clearly disclosed" },
          {
            value: "no",
            label: "No",
            description: "There was no disclosure at all",
          },
          {
            value: "unsure",
            label: "Unsure",
            description: "Not sure if it was disclosed",
          },
        ].map((option) => (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onDisclosureChange(option.value as DisclosureLevel)}
            className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
              hadDisclosure === option.value
                ? "border-teal-600 bg-teal-50"
                : "border-slate-200 bg-white hover:border-teal-200"
            }`}
          >
            <h4
              className={
                hadDisclosure === option.value ? "text-teal-900" : "text-slate-900"
              }
            >
              {option.label}
            </h4>
            <p className="text-sm text-slate-600 mt-1">{option.description}</p>
          </motion.button>
        ))}
      </div>

      {hadDisclosure !== "yes" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <label className="block text-sm font-medium text-slate-900 mb-2">
            Any additional details?
          </label>
          <textarea
            value={details}
            onChange={(e) => onDetailsChange(e.target.value)}
            placeholder="E.g., where did you see it? What made you think it was AI?"
            className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-colors resize-none"
            rows={4}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
