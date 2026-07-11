"use client";

import { motion } from "framer-motion";

interface Step2Props {
  value: Date;
  onChange: (value: Date) => void;
  error?: string;
}

export function Step2ExposureDate({ value, onChange, error }: Step2Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(new Date(e.target.value));
  };

  const dateString = value.toISOString().split("T")[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="mb-4">When were you exposed to this content?</h2>
      <p className="text-slate-600 mb-8">
        Approximately when did you first encounter this AI-generated content?
      </p>

      <div className="max-w-sm">
        <input
          type="date"
          value={dateString}
          onChange={handleChange}
          max={new Date().toISOString().split("T")[0]}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 ${
            error ? "border-red-500" : "border-slate-200"
          }`}
        />
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>

      <p className="text-sm text-slate-600 mt-6">
        This helps establish a timeline for your claim.
      </p>
    </motion.div>
  );
}
