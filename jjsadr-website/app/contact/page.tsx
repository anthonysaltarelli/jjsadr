import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display-md text-foreground mb-8 text-center">
            Contact
          </h1>

          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-body-lg text-foreground/80 mb-8">
                Ready to discuss your case? Reach out to schedule a consultation or ask any questions about mediation and arbitration services.
              </p>

              <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-4 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-label text-foreground/60 mb-1">Email</h3>
                  <a
                    href="mailto:contact@example.com"
                    className="text-body-lg text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    [your email address]
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-h2 text-foreground mb-6 text-center">
                Send a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-label block text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-label block text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-background text-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-label block text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-background text-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="How can I help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-label block text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-background text-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Tell me about your case..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-3 rounded-lg text-button-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
              <p className="mt-4 text-body-sm text-foreground/60">
                Note: This form is not yet functional. Please use the contact information above to reach out directly.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
