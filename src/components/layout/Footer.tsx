import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footer } from "@/data/footer";

export function Footer() {
  return (
    // On the dark background the default blue focus ring would be too faint.
    <footer className="bg-ink text-line-light [--focus-color:var(--color-white)]">
      <Container className="pt-15 pb-5 lg:pt-20 lg:pb-10">
        {/* Mobile: brand on top, Explore | Company, then Support below.
            Desktop: brand + 3 columns (448/240/240/192px in the 1280px frame). */}
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-[448fr_240fr_240fr_192fr] lg:gap-0">
          <div className="col-span-2 lg:col-span-1">
            <Logo className="text-white" />
            <p className="mt-1.5 text-body-1 text-muted-on-dark lg:max-w-56">
              {footer.tagline}
            </p>
          </div>

          {footer.columns.map((column) => {
            const titleId = `footer-${column.title.toLowerCase()}`;
            return (
              // Named by its visible title: "Explore", "Company", "Support".
              <nav key={column.title} aria-labelledby={titleId}>
                <h2 id={titleId} className="text-overline">
                  {column.title}
                </h2>
                {/* Text style on the list, so each line box is exactly 24px. */}
                <ul className="mt-4 flex flex-col gap-3 text-body-1">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="rounded-sm text-muted-on-dark transition-colors hover:text-white motion-reduce:transition-none"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>

        <p className="mt-9 border-t border-muted pt-6 text-center text-body-1 lg:mt-16 lg:text-left">
          {footer.copyright}
        </p>
      </Container>
    </footer>
  );
}
