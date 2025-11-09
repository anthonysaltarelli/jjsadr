import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Header Section with Background Image */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/joesaltarelli.png)' }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-display-lg text-foreground mb-4 whitespace-nowrap">
                Joseph J. Saltarelli ADR
              </h1>
              <p className="text-subtitle text-secondary mb-8 font-bold">
                Mediation & Arbitration
              </p>
              <blockquote className="border-l-4 border-primary/50 pl-6 py-2">
                <p className="text-body-lg text-foreground/90 italic mb-2">
                  "Peace is not an absence of war, it is a virtue, a state of mind, a disposition for benevolence, confidence, justice."
                </p>
                <cite className="text-body text-foreground/70 not-italic">
                  — Baruch Spinoza
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* About Joe Section */}
        <section id="about" className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-display-md text-foreground mb-12 text-center">
              About Joe Saltarelli
            </h2>

            {/* Main intro */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="space-y-6">
                <p className="text-body-lg text-foreground/80 leading-relaxed text-justify">
                  Joe's practice focuses on complex civil litigation. He has been lead counsel on numerous jury and non-jury trials, arbitrations, and administrative hearings, and appellate counsel on more than 40 appeals.
                </p>
                <p className="text-body-lg text-foreground/80 leading-relaxed text-justify">
                  Mr. Saltarelli has significant experience in alternative dispute resolution. In addition to his private mediation practice, he is an active volunteer mediator for the United States District Court for the Southern District of New York and the Commercial Division of the New York State Supreme Court, New York County. He serves on the Southern District's Mediator Advisory Committee, and is an Adjunct Professor with the Mediation Clinic program of the City University of New York Law School.
                </p>
              </div>
            </div>

            {/* Credentials grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg border border-accent/30">
                <h3 className="text-h3 text-foreground font-semibold mb-4 pb-3 border-b border-accent/20">
                  Education & Credentials
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-label text-primary font-semibold">Juris Doctor, cum laude</div>
                    <div className="text-body-sm text-foreground/80">Syracuse University College of Law, 1986</div>
                    <div className="text-body-sm text-foreground/60 italic">Editor-in-Chief, Syracuse Law Review</div>
                  </div>
                  <div>
                    <div className="text-label text-primary font-semibold">Master of International Affairs</div>
                    <div className="text-body-sm text-foreground/80">Columbia University School of International and Public Affairs, 1983</div>
                  </div>
                  <div>
                    <div className="text-label text-primary font-semibold">Bachelor of Arts</div>
                    <div className="text-body-sm text-foreground/80">New York University, 1981</div>
                  </div>
                  <div className="pt-2 border-t border-accent/20">
                    <div className="text-label text-foreground/70 font-semibold">Federal Clerkship</div>
                    <div className="text-body-sm text-foreground/80">Hon. John M. Cannella, US District Judge, SDNY</div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg border border-accent/30">
                <h3 className="text-h3 text-foreground font-semibold mb-4 pb-3 border-b border-accent/20">
                  Bar Admissions
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <div className="text-body text-foreground/80">Supreme Court of the United States</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <div className="text-body text-foreground/80">US Courts of Appeals for the Second, Third, Seventh and District of Columbia Circuits</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <div className="text-body text-foreground/80">US District Courts for the Southern, Eastern and Northern Districts of New York</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                    <div className="text-body text-foreground/80">New York State</div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg border border-accent/30">
                <h3 className="text-h3 text-foreground font-semibold mb-4 pb-3 border-b border-accent/20">
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-body-sm">Banking</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-body-sm">Business Tort</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-body-sm">Contract</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-body-sm">Corporate Governance</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-body-sm">Defamation</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-body-sm">Employment</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-body-sm">First Amendment</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-body-sm">Securities Fraud</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-body-sm">Unfair Trade Practices</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-body-sm">Class Action & MDL</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-body-sm">Financial Services</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-body-sm">International Arbitration</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-body-sm">Appeals</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Overview */}
        <section id="services" className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-display-md text-foreground mb-12 text-center">
              Core Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mediation Card */}
              <div className="bg-background p-8 rounded-lg border border-accent/30 hover:border-primary/50 transition-all hover:shadow-lg">
                <h3 className="text-h3 text-foreground font-semibold mb-4">
                  Mediation
                </h3>
                <p className="text-body text-foreground/80 mb-6">
                  A collaborative process where a neutral third party facilitates communication between disputing parties to help them reach a mutually acceptable resolution. Mediation is voluntary, confidential, and allows parties to maintain control over the outcome.
                </p>
                <a
                  href="/mediation"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-button-lg group"
                >
                  Learn More About Mediation
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              {/* Arbitration Card */}
              <div className="bg-background p-8 rounded-lg border border-accent/30 hover:border-primary/50 transition-all hover:shadow-lg">
                <h3 className="text-h3 text-foreground font-semibold mb-4">
                  Arbitration
                </h3>
                <p className="text-body text-foreground/80 mb-6">
                  A formal process where a neutral arbitrator hears evidence and arguments from both sides and renders a binding or non-binding decision. Arbitration provides a structured alternative to litigation, often with greater flexibility and efficiency than traditional court proceedings.
                </p>
                <a
                  href="/arbitration"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-button-lg group"
                >
                  Learn More About Arbitration
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* My Philosophy Section */}
        <section id="philosophy" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-display-md text-foreground mb-12 text-center">
              My Philosophy
            </h2>
            <div className="space-y-4">
              <p className="text-body text-foreground/80">
                [Your philosophy statement will go here. This section will describe your approach to alternative dispute resolution, your values, and what clients can expect when working with you.]
              </p>
              <p className="text-body text-foreground/80">
                [Additional paragraphs about your methodology, experience, and commitment to fair and effective dispute resolution.]
              </p>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-display-md text-foreground mb-12 text-center">
              Client Testimonials
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-background p-8 rounded-lg shadow-md border border-accent/30">
                <p className="text-body text-foreground/80 italic mb-4">
                  "Testimonial text will go here. Client feedback about your professional services."
                </p>
                <p className="text-label text-primary">
                  — Client Name
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-background p-8 rounded-lg shadow-md border border-accent/30">
                <p className="text-body text-foreground/80 italic mb-4">
                  "Another testimonial showcasing your expertise and professionalism."
                </p>
                <p className="text-label text-primary">
                  — Client Name
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-background p-8 rounded-lg shadow-md border border-accent/30">
                <p className="text-body text-foreground/80 italic mb-4">
                  "A third testimonial highlighting successful dispute resolution."
                </p>
                <p className="text-label text-primary">
                  — Client Name
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <h2 className="text-display-md text-foreground mb-6">
                Ready to Resolve Your Dispute?
              </h2>
              <p className="text-body-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
                Whether you're considering mediation or arbitration, I'm here to help guide you through the process. Let's discuss how we can work together to achieve a fair and efficient resolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg text-button-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Schedule a Consultation
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/30 text-primary rounded-lg text-button-lg font-semibold transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:shadow-lg"
                >
                  Learn More About My Process
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
