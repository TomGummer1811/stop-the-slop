"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { defaultLocale, locales } from "@/i18n.config";
import enMessages from "@/messages/en.json";
import deMessages from "@/messages/de.json";
import frMessages from "@/messages/fr.json";
import esMessages from "@/messages/es.json";
import itMessages from "@/messages/it.json";
import nlMessages from "@/messages/nl.json";
import plMessages from "@/messages/pl.json";
import ptMessages from "@/messages/pt.json";
import svMessages from "@/messages/sv.json";

const translations: Record<string, any> = {
  en: enMessages,
  de: deMessages,
  fr: frMessages,
  es: esMessages,
  it: itMessages,
  nl: nlMessages,
  pl: plMessages,
  pt: ptMessages,
  sv: svMessages,
};

// Load remaining languages from English as fallback
locales.forEach((locale) => {
  if (!translations[locale.code]) {
    translations[locale.code] = enMessages;
  }
});

interface IntlContextType {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string, defaultValue?: string) => string;
}

const IntlContext = createContext<IntlContextType | undefined>(undefined);

export function IntlProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sts_locale");
    if (saved && locales.map((l) => l.code).includes(saved)) {
      setLocaleState(saved);
    }
    setMounted(true);
  }, []);

  const setLocale = (newLocale: string) => {
    if (locales.map((l) => l.code).includes(newLocale)) {
      setLocaleState(newLocale);
      localStorage.setItem("sts_locale", newLocale);
    }
  };

  const t = (key: string, defaultValue?: string): string => {
    const keys = key.split(".");
    let value: any = translations[locale] || translations[defaultLocale];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || defaultValue || key;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <IntlContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </IntlContext.Provider>
  );
}

export function useIntl() {
  const context = useContext(IntlContext);

  // Fallback for SSR/prerendering
  if (!context) {
    const defaultLocale = "en";
    const t = (key: string, defaultValue?: string): string => {
      const keys = key.split(".");
      let value: any = translations[defaultLocale];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || defaultValue || key;
    };
    return { locale: defaultLocale, setLocale: () => {}, t };
  }

  return context;
}
