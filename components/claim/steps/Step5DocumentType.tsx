"use client";

import { motion } from "framer-motion";
import { DocumentType } from "@/types";
import { useIntl } from "@/components/providers/IntlProvider";

interface Step5Props {
  value: DocumentType;
  onChange: (value: DocumentType) => void;
}

export function Step5DocumentType({ value, onChange }: Step5Props) {
  const { t } = useIntl();

  const documents: {
    value: DocumentType;
    label: string;
    description: string;
    price: string;
    impact: string;
  }[] = [
    {
      value: "complaint",
      label: t("wizard.complaintLetter", "Complaint Letter"),
      description: t("wizard.complaintLetterDesc", "Direct communication to the company"),
      price: "€2",
      impact: t("wizard.complaintLetterImpact", "Opens dialogue with the company"),
    },
    {
      value: "regulatory",
      label: t("wizard.regulatoryComplaint", "Regulatory Complaint"),
      description: t("wizard.regulatoryComplaintDesc", "File with government regulators"),
      price: "€2",
      impact: t("wizard.regulatoryComplaintImpact", "Alerts authorities to violations"),
    },
    {
      value: "letter-before-action",
      label: t("wizard.letterBeforeAction", "Letter Before Action"),
      description: t("wizard.letterBeforeActionDesc", "Formal notice before legal proceedings"),
      price: "€25",
      impact: t("wizard.letterBeforeActionImpact", "Maximum legal impact"),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="mb-4">{t("wizard.step5Title")}</h2>
      <p className="text-slate-600 mb-8">
        {t("wizard.step5Desc")}
      </p>

      <div className="space-y-4">
        {documents.map((doc) => (
          <motion.button
            key={doc.value}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onChange(doc.value)}
            className={`w-full p-6 rounded-lg border-2 transition-all text-left ${
              value === doc.value
                ? "border-teal-600 bg-teal-50"
                : "border-slate-200 bg-white hover:border-teal-200"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4
                  className={value === doc.value ? "text-teal-900" : "text-slate-900"}
                >
                  {doc.label}
                </h4>
                <p className="text-sm text-slate-600 mt-1">{doc.description}</p>
                <p className="text-xs text-slate-500 mt-3">
                  <span className="font-semibold">Impact:</span> {doc.impact}
                </p>
              </div>
              <div className="text-right ml-4">
                <p className="text-2xl font-bold text-teal-600">{doc.price}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="mt-8 p-4 bg-teal-50 rounded-lg border border-teal-200">
        <p className="text-sm text-teal-900">
          <span className="font-semibold">Not sure?</span> Start with a complaint
          letter—you can escalate later if needed.
        </p>
      </div>
    </motion.div>
  );
}
