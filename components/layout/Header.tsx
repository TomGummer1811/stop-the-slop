"use client";

import Link from "next/link";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex items-center justify-between py-3">
        <Link
          href="/"
          className="text-lg font-bold text-slate-900 hover:text-teal-600 transition-colors"
        >
          Stop the Slop
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/claim"
            className="inline-flex items-center gap-1 rounded-lg bg-teal-600 px-5 py-2 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
          >
            Start claim
          </Link>
        </div>
      </Container>
    </header>
  );
}
