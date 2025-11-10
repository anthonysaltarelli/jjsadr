import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ArbitrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display-md text-foreground mb-8">
            Arbitration
          </h1>

          <div className="space-y-12">
            {/* Opening Framing */}
            <section>
              <h2 className="text-h2 text-foreground mb-6">
                Fair, Efficient, and Predictable Arbitration
              </h2>
              <p className="text-body-lg text-foreground/80">
                Arbitration should offer what litigation often cannot — efficiency, expertise, and confidentiality — without sacrificing procedural fairness. I aim to provide a balanced, transparent process that counsel can trust.
              </p>
            </section>

            {/* Your Arbitration Philosophy */}
            <section>
              <h2 className="text-h2 text-foreground mb-6">
                Your Arbitration Philosophy
              </h2>
              <p className="text-body-lg text-foreground/80">
                My arbitration practice emphasizes clear procedural orders, early case management, and proportionate discovery. Hearings are structured to focus on key issues and evidence that truly matter to the outcome.
              </p>
            </section>

            {/* Procedural Management */}
            <section>
              <h2 className="text-h2 text-foreground mb-6">
                Procedural Management
              </h2>
              <ul className="space-y-3 text-body-lg text-foreground/80">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Preliminary conferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Scheduling orders and procedural checklists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Reasoned awards when appropriate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Remote hearings (if offered)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Streamlined discovery protocols</span>
                </li>
              </ul>
            </section>

            {/* Substantive Areas */}
            <section>
              <h2 className="text-h2 text-foreground mb-6">
                Substantive Areas
              </h2>
              <ul className="space-y-3 text-body-lg text-foreground/80">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Commercial and contract disputes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Business torts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Employment and partnership matters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Construction and professional services</span>
                </li>
              </ul>
            </section>

            {/* Arbitration Philosophy */}
            <section>
              <h2 className="text-h2 text-foreground mb-6">
                Process Integrity
              </h2>
              <p className="text-body-lg text-foreground/80">
                My focus is on process integrity. Counsel should never wonder if the procedure itself affected the outcome. I aim for hearings that are firm but fair, and awards that are clear, enforceable, and reasoned.
              </p>
            </section>

            {/* CTA */}
            <div className="mt-12 p-8 bg-primary/10 rounded-lg border border-primary/30">
              <h3 className="text-h3 text-foreground mb-4">
                Schedule a Consultation
              </h3>
              <p className="text-body text-foreground/80 mb-6">
                Contact me to discuss your case and explore how arbitration can provide fair, efficient resolution.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-button-lg hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
