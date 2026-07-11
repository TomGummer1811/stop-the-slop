"use client";

import Link from "next/link";
import { Container } from "./Container";
import { useIntl } from "@/components/providers/IntlProvider";

export function Footer() {
  const { t } = useIntl();

  return (
    <footer className="border-t border-slate-200 bg-white mt-auto">
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-3">
              {t("footer.tagline", "Stop the Slop")}
            </h3>
            <p className="text-sm text-slate-600">
              {t("footer.tagline", "Action against undisclosed AI-generated content.")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">
              {t("footer.resources", "Resources")}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#faq" className="hover:text-slate-900">
                  {t("footer.faq", "FAQ")}
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-slate-900">
                  {t("footer.howItWorks", "How it works")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">{t("footer.legal", "Legal")}</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/privacy" className="hover:text-slate-900">
                  {t("footer.privacy", "Privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-900">
                  {t("footer.terms", "Terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-8 text-center text-sm text-slate-600">
          <p>{t("footer.copyright", "© 2025 Stop the Slop. All rights reserved.")}</p>
        </div>
      </Container>
    </footer>
  );
}
