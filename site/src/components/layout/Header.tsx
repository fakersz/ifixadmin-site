"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || mobileOpen
          ? "bg-white/90 shadow-soft backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div
        className="container-app flex items-center justify-between"
        style={{ height: "var(--header-height)" }}
      >
        <Link
          href="/#inicio"
          onClick={closeMobile}
          className="flex items-center gap-2"
        >
          <Image
            src="/brand/icon-96.png"
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />
          <span className="flex items-baseline gap-1.5 text-xl font-semibold tracking-tight">
            <span className="text-brand-700">iFix</span>
            <span className="font-medium text-ink-soft">Admin</span>
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/acompanhar/" size="md">
            Acompanhe sua OS
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-ink transition-colors hover:bg-surface-muted md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "grid overflow-hidden border-t border-surface-border bg-white/95 backdrop-blur-md transition-all duration-300 ease-out md:hidden",
          mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Navegação mobile"
            className="container-app flex flex-col gap-1 py-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-surface-muted hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
            <Button href="/acompanhar/" size="md" className="mt-2 w-full" onClick={closeMobile}>
              Acompanhe sua OS
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
