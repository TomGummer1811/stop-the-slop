"use client";

import Link from "next/link";
import { Container } from "./Container";
import { LanguageSelector } from "./LanguageSelector";
import { useIntl } from "@/components/providers/IntlProvider";

export function Header() {
  const { t } = useIntl();

  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex items-center justify-between py-3 gap-4">
        <Link
          href="/"
          className="text-lg font-bold text-slate-900 hover:text-teal-600 transition-colors"
        >
          {t("header.stopTheSlop")}
        </Link>

        <div className="flex items-center gap-4 ml-auto">
          <LanguageSelector />
          <Link
            href="/login"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            {t("header.signIn")}
          </Link>
          <Link
            href="/claim"
            className="inline-flex items-center gap-1 rounded-lg bg-teal-600 px-5 py-2 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
          >
            {t("header.startClaim")}
          </Link>
        </div>
      </Container>
    </header>
  );
}
