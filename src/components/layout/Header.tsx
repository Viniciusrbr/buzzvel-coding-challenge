import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { loginLink, mainNav, startLearningLink } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

/**
 * Sticky site header (Server Component). Only the mobile menu is a Client
 * Component. Below `lg` the full nav does not fit, so tablet uses the menu too.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 h-header border-b border-line bg-cream">
      <Container className="flex h-full items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Logo className="justify-self-start" />

        {/* Equal side columns keep the nav centered on the page, as in Figma. */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.href + item.label}>
                <a
                  href={item.href}
                  className="rounded-sm text-body-1 text-muted transition-colors hover:text-ink motion-reduce:transition-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 justify-self-end lg:flex">
          <a
            href={loginLink.href}
            className="rounded-sm text-body-1 text-muted transition-colors hover:text-ink motion-reduce:transition-none"
          >
            {loginLink.label}
          </a>
          <Button href={startLearningLink.href} size="sm">
            {startLearningLink.label}
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
