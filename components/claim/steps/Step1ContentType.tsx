"use client";

import { motion } from "framer-motion";
import { ContentType } from "@/types";

interface Step1Props {
  value: ContentType;
  onChange: (value: ContentType) => void;
}

const options: { value: ContentType; label: string; description: string }[] = [
  { value: "article", label: "Article", description: "Blog post or news article" },
  { value: "image", label: "Image", description: "Photo or graphic" },
  { value: "video", label: "Video", description: "Video content" },
  { value: "advertisement", label: "Advertisement", description: "Ad or sponsored content" },
  { value: "chatbot", label: "Chatbot", description: "AI chatbot response" },
  { value: "other", label: "Other", description: "Something else" },
];

export function Step1ContentType({ value, onChange }: Step1Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="mb-4">What type of AI content?</h2>
      <p className="text-slate-600 mb-8">
        Tell us what kind of content you encountered.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option) => (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChange(option.value)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              value === option.value
                ? "border-teal-600 bg-teal-50"
                : "border-slate-200 bg-white hover:border-teal-200"
            }`}
          >
            <h4 className={value === option.value ? "text-teal-900" : "text-slate-900"}>
              {option.label}
            </h4>
            <p className="text-sm text-slate-600 mt-1">{option.description}</p>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
