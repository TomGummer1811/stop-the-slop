import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-auto">
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-3">
              Stop the Slop
            </h3>
            <p className="text-sm text-slate-600">
              Action against undisclosed AI-generated content.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="#faq" className="hover:text-slate-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-slate-900">
                  How it works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/privacy" className="hover:text-slate-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-900">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-8 text-center text-sm text-slate-600">
          <p>&copy; 2025 Stop the Slop. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
