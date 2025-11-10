import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function MediationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display-md text-foreground mb-8">
            Mediation
          </h1>

          <div className="space-y-12">
            {/* Opening Framing */}
            <section>
              <h2 className="text-h2 text-foreground mb-6">
                A Focus on Resolution, Not Position
              </h2>
              <p className="text-body-lg text-foreground/80">
                In complex disputes, mediation isn't just about closing a file — it's about crafting resolution that works for everyone in the real world. My role is to create a setting where counsel can advocate fully, clients feel heard, and outcomes remain durable after the papers are signed.
              </p>
            </section>

            {/* Your Mediation Approach */}
            <section>
              <h2 className="text-h2 text-foreground mb-6">
                Your Mediation Approach
              </h2>
              <p className="text-body-lg text-foreground/80 mb-4">
                I take a pragmatic, evaluative approach, grounded in understanding risk, litigation realities, and business objectives. My aim is to help parties move from positional advocacy toward risk-based decision-making.
              </p>
              <p className="text-body-lg text-foreground/80">
                I work flexibly with counsel — offering pre-session prep calls, facilitating joint sessions or shuttle diplomacy as needed, and remaining available for follow-ups to help bring matters to conclusion.
              </p>
            </section>

            {/* Types of Matters Mediated */}
            <section>
              <h2 className="text-h2 text-foreground mb-6">
                Types of Matters Mediated
              </h2>
              <ul className="space-y-3 text-body-lg text-foreground/80">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Commercial contract disputes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Employment and partnership matters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Business breakups and governance issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Professional liability cases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Construction and real estate disputes</span>
                </li>
              </ul>
            </section>

            {/* Your Process & Efficiency */}
            <section>
              <h2 className="text-h2 text-foreground mb-6">
                Your Process & Efficiency
              </h2>
              <p className="text-body-lg text-foreground/80">
                I schedule pre-mediation calls to identify key issues, decision-makers, and barriers to settlement. Sessions are tightly managed but flexible. I often continue engagement post-session to help finalize remaining issues.
              </p>
            </section>

            {/* Results-Oriented Philosophy */}
            <section>
              <h2 className="text-h2 text-foreground mb-6">
                Results-Oriented Philosophy
              </h2>
              <p className="text-body-lg text-foreground/80">
                Counsel appreciate a neutral who respects their advocacy but knows when to reframe the conversation. My goal is not to force compromise — it's to surface the best achievable resolution.
              </p>
            </section>

            {/* CTA */}
            <div className="mt-12 p-8 bg-primary/10 rounded-lg border border-primary/30">
              <h3 className="text-h3 text-foreground mb-4">
                Schedule a Consultation
              </h3>
              <p className="text-body text-foreground/80 mb-6">
                Contact me to discuss your case and explore how mediation can help achieve practical, durable resolution.
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
