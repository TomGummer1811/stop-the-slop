"use client";

import { motion } from "framer-motion";
import { useIntl } from "@/components/providers/IntlProvider";

interface Step4Props {
  companyName: string;
  companyWebsite: string;
  companyCountry: string;
  incidentDescription: string;
  errors: {
    companyName?: string;
    companyWebsite?: string;
    incidentDescription?: string;
  };
  onChange: (field: string, value: string) => void;
}

export function Step4Company({
  companyName,
  companyWebsite,
  companyCountry,
  incidentDescription,
  errors,
  onChange,
}: Step4Props) {
  const { t } = useIntl();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="mb-4">{t("wizard.step4Title")}</h2>
      <p className="text-slate-600 mb-8">
        {t("wizard.step4Desc")}
      </p>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-2">
            Company name *
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => onChange("companyName", e.target.value)}
            placeholder="E.g., TechCorp Inc."
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 ${
              errors.companyName ? "border-red-500" : "border-slate-200"
            }`}
          />
          {errors.companyName && (
            <p className="text-red-600 text-sm mt-2">{errors.companyName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-900 mb-2">
            Website or contact
          </label>
          <input
            type="text"
            value={companyWebsite}
            onChange={(e) => onChange("companyWebsite", e.target.value)}
            placeholder="www.company.com"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 ${
              errors.companyWebsite ? "border-red-500" : "border-slate-200"
            }`}
          />
          {errors.companyWebsite && (
            <p className="text-red-600 text-sm mt-2">{errors.companyWebsite}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-900 mb-2">
            Company country
          </label>
          <select
            value={companyCountry}
            onChange={(e) => onChange("companyCountry", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <option value="">Select country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="EU">European Union</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="IE">Ireland</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
            <option value="OTHER">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-900 mb-2">
            What was the incident? *
          </label>
          <textarea
            value={incidentDescription}
            onChange={(e) => onChange("incidentDescription", e.target.value)}
            placeholder="Describe the AI-generated content, how you found it, and why you believe it was AI-generated..."
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none ${
              errors.incidentDescription ? "border-red-500" : "border-slate-200"
            }`}
            rows={5}
          />
          {errors.incidentDescription && (
            <p className="text-red-600 text-sm mt-2">
              {errors.incidentDescription}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
