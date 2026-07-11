"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useIntl } from "@/components/providers/IntlProvider";

interface QualificationCheckProps {
  onQualify: () => void;
}

export function QualificationCheck({ onQualify }: QualificationCheckProps) {
  const { t } = useIntl();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl"
    >
      <h1 className="mb-4">{t("qualification.beforeBegin")}</h1>
      <p className="text-lg text-slate-700 mb-8">
        {t("qualification.confirm")}
      </p>

      <div className="bg-white rounded-lg border border-slate-200 p-8 mb-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-600 font-bold flex items-center justify-center text-sm mt-1">
            ✓
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">
              {t("qualification.euCitizen")}
            </h3>
            <p className="text-slate-600 text-sm">
              {t("qualification.euCitizenDesc")}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-600 font-bold flex items-center justify-center text-sm mt-1">
            ✓
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">
              {t("qualification.euContent")}
            </h3>
            <p className="text-slate-600 text-sm">
              {t("qualification.euContentDesc")}
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-600 mb-4">
            {t("qualification.doesApply")}
          </p>
          <div className="flex gap-3">
            <button
              onClick={onQualify}
              className="flex-1 px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
            >
              {t("qualification.yesApply")}
            </button>
            <Link
              href="/"
              className="flex-1 px-6 py-3 rounded-lg border-2 border-slate-200 text-slate-900 font-semibold hover:border-slate-300 transition-colors text-center"
            >
              {t("qualification.noGoBack")}
            </Link>
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-500 text-center">
        {t("qualification.jurisdictionNote")}
      </p>
    </motion.div>
  );
}
