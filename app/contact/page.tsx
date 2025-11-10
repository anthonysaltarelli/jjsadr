"use client";

import { useState, FormEvent } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again or email me directly.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or email me directly at joe@jjsadr.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 border border-green-200 text-green-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                  >
                    <p className="text-body">{submitStatus.message}</p>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="text-label block text-foreground mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-label block text-foreground mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-white text-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-white text-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-label block text-foreground mb-2"
                  >
                    Tell me how I can help *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 bg-white text-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Describe your situation and what you're looking for..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white px-8 py-3 rounded-lg text-button-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
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
