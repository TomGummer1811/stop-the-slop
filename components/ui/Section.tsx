import { ReactNode } from "react";
import { Container } from "../layout/Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`section-spacing ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
