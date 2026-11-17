import Link from "next/link";
import { navLinks, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface-muted">
      <Container className="py-8 text-xs text-ink-faint sm:py-10">
        <nav aria-label="Institucional" className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-surface-border pt-5">
          <span>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </span>
          <span aria-hidden="true">·</span>
          <Link href="/" className="hover:text-brand-700">
            {siteConfig.domain}
          </Link>
          <span aria-hidden="true">·</span>
          <span className="cursor-default" title="Documento em preparação">
            Política de Privacidade
          </span>
          <span aria-hidden="true">·</span>
          <span className="cursor-default" title="Documento em preparação">
            Termos de Uso
          </span>
        </div>
      </Container>
    </footer>
  );
}
