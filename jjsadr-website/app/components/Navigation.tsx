import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-b border-accent/30 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-h4 text-foreground hover:text-primary transition-colors">
            Joseph J. Saltarelli ADR
          </Link>
          <div className="flex gap-6">
            <Link
              href="/about"
              className="text-button text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/mediation"
              className="text-button text-foreground hover:text-primary transition-colors"
            >
              Mediation
            </Link>
            <Link
              href="/arbitration"
              className="text-button text-foreground hover:text-primary transition-colors"
            >
              Arbitration
            </Link>
            <Link
              href="/contact"
              className="text-button text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
