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

          <div className="text-center mb-12">
            <p className="text-body-lg text-foreground/80">
              Ready to discuss your case? Email me directly at{" "}
              <a
                href="mailto:joe@jjsadr.com"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                joe@jjsadr.com
              </a>
              , send a message below, or book a consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form - First on mobile, Left on desktop */}
            <div className="order-1">
              <h2 className="text-h2 text-foreground mb-6 font-semibold">
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
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-white text-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-label block text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-white text-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-label block text-foreground mb-2"
                  >
                    Tell me how I can help
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-white text-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Describe your situation and what you're looking for..."
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

            {/* Divider with "or" - Only visible on mobile */}
            <div className="relative my-8 lg:hidden order-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-accent/30"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-background px-4 text-body-lg text-foreground/60">or</span>
              </div>
            </div>

            {/* Booking Section - Second on mobile, Right on desktop */}
            <div className="order-3">
              <h2 className="text-h2 text-foreground mb-6 font-semibold">
                Book a Consultation
              </h2>
              <p className="text-body text-foreground/80 mb-6">
                Select a date and time that works for you
              </p>

              <div className="space-y-6">
                {/* Monday, December 18 */}
                <div className="bg-white rounded-xl p-6 border border-accent/20">
                  <h3 className="text-h4 text-foreground mb-4">Monday, December 18</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-4 py-3 rounded-lg border border-accent/30 text-body text-foreground hover:border-primary hover:bg-primary/5 transition-colors">
                      9:00 AM
                    </button>
                    <button className="px-4 py-3 rounded-lg border border-accent/30 text-body text-foreground hover:border-primary hover:bg-primary/5 transition-colors">
                      11:00 AM
                    </button>
                    <button className="px-4 py-3 rounded-lg border border-accent/30 text-body text-foreground hover:border-primary hover:bg-primary/5 transition-colors">
                      2:00 PM
                    </button>
                  </div>
                </div>

                {/* Tuesday, December 19 */}
                <div className="bg-white rounded-xl p-6 border border-accent/20">
                  <h3 className="text-h4 text-foreground mb-4">Tuesday, December 19</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-4 py-3 rounded-lg border border-accent/30 text-body text-foreground hover:border-primary hover:bg-primary/5 transition-colors">
                      10:00 AM
                    </button>
                    <button className="px-4 py-3 rounded-lg border border-accent/30 text-body text-foreground hover:border-primary hover:bg-primary/5 transition-colors">
                      1:00 PM
                    </button>
                    <button className="px-4 py-3 rounded-lg border border-accent/30 text-body text-foreground hover:border-primary hover:bg-primary/5 transition-colors">
                      3:30 PM
                    </button>
                  </div>
                </div>

                {/* Wednesday, December 20 */}
                <div className="bg-white rounded-xl p-6 border border-accent/20">
                  <h3 className="text-h4 text-foreground mb-4">Wednesday, December 20</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-4 py-3 rounded-lg border border-accent/30 text-body text-foreground hover:border-primary hover:bg-primary/5 transition-colors">
                      9:30 AM
                    </button>
                    <button className="px-4 py-3 rounded-lg border border-accent/30 text-body text-foreground hover:border-primary hover:bg-primary/5 transition-colors">
                      11:30 AM
                    </button>
                    <button className="px-4 py-3 rounded-lg border border-accent/30 text-body text-foreground hover:border-primary hover:bg-primary/5 transition-colors">
                      4:00 PM
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-body-sm text-foreground/60 text-center">
                All times are in Eastern Time (ET). Click a time slot to proceed with booking.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
