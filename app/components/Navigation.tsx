import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-b border-accent/30 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-h4 text-foreground hover:text-primary transition-colors">
            Joseph J. Saltarelli ADR
          </Link>
          <div className="flex gap-6 items-center">
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
            <a
              href="https://www.linkedin.com/in/joe-saltarelli-158a6416"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
