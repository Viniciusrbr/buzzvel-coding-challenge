"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { loginLink, mainNav, startLearningLink } from "@/data/navigation";

// Same value as Tailwind's `lg` breakpoint, where the desktop nav takes over.
const DESKTOP_QUERY = "(min-width: 64rem)";

/**
 * Disclosure menu for small screens (no open state in the design).
 * Not a modal: no focus trap, the page stays usable behind it.
 */
export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }

    // The panel is hidden by CSS on desktop; reset the state too, so it
    // does not reappear open when the window shrinks again.
    const desktop = window.matchMedia(DESKTOP_QUERY);
    function handleBreakpointChange(event: MediaQueryListEvent) {
      if (event.matches) setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleBreakpointChange);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleBreakpointChange);
    };
  }, [isOpen]);

  // Links are in-page anchors: close and let the browser scroll to the section.
  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-11 items-center justify-center rounded-lg text-ink lg:hidden"
      >
        <span className="sr-only">Toggle menu</span>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        id={panelId}
        hidden={!isOpen}
        // Positioned against the sticky <header>; its top border overlaps the header's.
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-var(--spacing-header))] overflow-y-auto border-y border-line bg-cream lg:hidden"
      >
        <Container className="pt-2 pb-6">
          <nav aria-label="Main">
            <ul>
              {mainNav.map((item) => (
                <li key={item.href + item.label}>
                  <a
                    href={item.href}
                    onClick={close}
                    className="block rounded-sm py-3 text-subtitle-1 font-medium text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Button href={loginLink.href} variant="secondary" onClick={close}>
              {loginLink.label}
            </Button>
            <Button href={startLearningLink.href} onClick={close}>
              {startLearningLink.label}
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
