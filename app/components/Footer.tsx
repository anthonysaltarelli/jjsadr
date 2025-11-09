export default function Footer() {
  return (
    <footer className="border-t border-accent/30 py-8 bg-foreground/5">
      <div className="container mx-auto px-4 text-center">
        <p className="text-body-sm text-foreground/60">
          © {new Date().getFullYear()} Joseph Saltarelli ADR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
