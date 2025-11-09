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
            <p className="text-body-lg text-foreground/80">
              [Overview of your mediation services will go here. Describe your approach, expertise, and what makes your mediation services unique.]
            </p>

            <div>
              <h2 className="text-h2 text-foreground mb-6">
                What is Mediation?
              </h2>
              <p className="text-body-lg text-foreground/80">
                [Explanation of the mediation process and how it works.]
              </p>
            </div>

            <div>
              <h2 className="text-h2 text-foreground mb-6">
                Types of Cases
              </h2>
              <p className="text-body-lg text-foreground/80">
                [List the types of cases you handle through mediation.]
              </p>
            </div>

            <div>
              <h2 className="text-h2 text-foreground mb-6">
                The Mediation Process
              </h2>
              <p className="text-body-lg text-foreground/80">
                [Step-by-step overview of your mediation process.]
              </p>
            </div>

            <div className="mt-12 p-8 bg-primary/10 rounded-lg border border-primary/30">
              <h3 className="text-h3 text-foreground mb-4">
                Ready to Schedule a Mediation?
              </h3>
              <p className="text-body text-foreground/80 mb-6">
                Contact me to discuss your case and schedule a mediation session.
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
