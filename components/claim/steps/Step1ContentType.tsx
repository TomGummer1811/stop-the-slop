"use client";

import { motion } from "framer-motion";
import { ContentType } from "@/types";
import { useIntl } from "@/components/providers/IntlProvider";

interface Step1Props {
  value: ContentType;
  onChange: (value: ContentType) => void;
}

export function Step1ContentType({ value, onChange }: Step1Props) {
  const { t } = useIntl();

  const options: { value: ContentType; label: string; description: string }[] = [
    { value: "article", label: t("wizard.contentArticle", "Article"), description: t("wizard.contentArticleDesc", "Blog post or news article") },
    { value: "image", label: t("wizard.contentImage", "Image"), description: t("wizard.contentImageDesc", "Photo or graphic") },
    { value: "video", label: t("wizard.contentVideo", "Video"), description: t("wizard.contentVideoDesc", "Video content") },
    { value: "advertisement", label: t("wizard.contentAd", "Advertisement"), description: t("wizard.contentAdDesc", "Ad or sponsored content") },
    { value: "chatbot", label: t("wizard.contentChatbot", "Chatbot"), description: t("wizard.contentChatbotDesc", "AI chatbot response") },
    { value: "other", label: t("wizard.contentOther", "Other"), description: t("wizard.contentOtherDesc", "Something else") },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="mb-4">{t("wizard.step1Title")}</h2>
      <p className="text-slate-600 mb-8">
        {t("wizard.step1Desc")}
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
