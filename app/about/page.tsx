"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the difference between mediation and arbitration?",
    answer: "Mediation is a collaborative process where a neutral third party helps disputing parties reach a mutually agreeable solution. The mediator facilitates discussion but doesn't impose a decision. Arbitration, on the other hand, is more like a private trial where the arbitrator hears evidence and arguments, then makes a binding decision to resolve the dispute."
  },
  {
    question: "How long does the mediation or arbitration process typically take?",
    answer: "The timeline varies depending on the complexity of the case and the parties' schedules. Simple mediations can be resolved in a single session (4-8 hours), while more complex matters may require multiple sessions over several weeks. Arbitrations typically take longer, ranging from a few weeks to several months, but are generally faster than court litigation."
  },
  {
    question: "Is the outcome of arbitration legally binding?",
    answer: "Yes, arbitration decisions (called 'awards') are legally binding and enforceable in court. Unlike mediation, where parties must agree to the resolution, arbitration results in a final decision made by the arbitrator that both parties must follow."
  },
  {
    question: "How much do your services cost?",
    answer: "Fee arrangements are flexible and can be structured on either an hourly basis or as a fixed fee for the entire matter. The specific cost depends on the complexity of your case, the expected time commitment, and your preferred fee structure. We'll discuss the best arrangement for your situation during the initial consultation."
  },
  {
    question: "What types of disputes do you handle?",
    answer: "I handle a wide range of commercial and civil disputes, including business conflicts, contract disagreements, employment matters, partnership disputes, and real estate issues. If you're unsure whether your case is suitable for mediation or arbitration, feel free to reach out for a consultation."
  },
  {
    question: "How do I prepare for a mediation or arbitration session?",
    answer: "Preparation typically includes gathering relevant documents, organizing key facts and timelines, identifying your goals and priorities, and considering potential solutions. I'll provide specific guidance based on your case during our initial consultation to ensure you're fully prepared."
  }
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="group border border-accent/20 rounded-xl overflow-hidden bg-background transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-all duration-300"
          >
            <span className="text-h4 text-foreground group-hover:text-primary transition-colors duration-300">
              {faq.question}
            </span>
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-500 ${
                openIndex === index ? "rotate-180 bg-primary/20" : "rotate-0"
              }`}
            >
              <svg
                className={`w-5 h-5 transition-colors duration-300 ${
                  openIndex === index ? "text-primary" : "text-foreground/60"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          <div
            className={`transition-all duration-500 ease-in-out ${
              openIndex === index
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6 pt-2">
              <div
                className={`text-body text-foreground/80 leading-relaxed transition-all duration-500 delay-75 ${
                  openIndex === index
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* About / History Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-display-md text-foreground mb-12 text-center">
                About
              </h1>

              <div className="bg-accent/5 rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h2 className="text-h3 text-foreground font-semibold">
                    History of the Practice
                  </h2>
                </div>
                <div className="space-y-4 text-body-lg text-foreground/80 leading-relaxed">
                  <p>
                    Founded with a commitment to providing efficient and effective dispute resolution, our practice has been serving clients with integrity and professionalism for many years. What began as a focused mediation practice has evolved into a comprehensive alternative dispute resolution service.
                  </p>
                  <p>
                    Through decades of experience in both mediation and arbitration, we've helped countless parties resolve complex disputes across various industries. Our approach combines legal expertise with practical problem-solving, always keeping the clients' best interests at the forefront.
                  </p>
                  <p>
                    Today, the practice is recognized for its track record of successful resolutions, professional excellence, and commitment to making the dispute resolution process as smooth and cost-effective as possible for all parties involved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Process Section */}
        <section className="py-16 bg-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-h1 text-foreground mb-4 font-semibold">
                Our Process
              </h2>
              <p className="text-body-lg text-foreground/80 max-w-2xl mx-auto">
                A clear, structured approach to resolving your dispute efficiently and effectively
              </p>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-h2 text-primary font-bold">1</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-h3 text-foreground mb-3">Initial Consultation</h3>
                  <p className="text-body text-foreground/80 leading-relaxed">
                    We begin with a confidential consultation to understand your dispute, discuss your goals, and determine whether mediation or arbitration is the best path forward. This is also when we'll discuss fee arrangements and timeline expectations.
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              <div className="ml-8 h-8 w-0.5 bg-accent/30"></div>

              {/* Step 2 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-h2 text-primary font-bold">2</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-h3 text-foreground mb-3">Preparation & Information Gathering</h3>
                  <p className="text-body text-foreground/80 leading-relaxed">
                    Both parties submit relevant documents, evidence, and position statements. We'll work with you to ensure all necessary information is organized and presented clearly. For arbitration, this phase may include discovery and witness preparation.
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              <div className="ml-8 h-8 w-0.5 bg-accent/30"></div>

              {/* Step 3 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-h2 text-primary font-bold">3</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-h3 text-foreground mb-3">Mediation or Arbitration Sessions</h3>
                  <p className="text-body text-foreground/80 leading-relaxed">
                    For mediation, we facilitate constructive discussions between parties to reach a mutually acceptable solution. For arbitration, we conduct formal hearings where both sides present their cases, after which a binding decision is issued. Sessions can be conducted in-person or virtually.
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              <div className="ml-8 h-8 w-0.5 bg-accent/30"></div>

              {/* Step 4 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-h2 text-primary font-bold">4</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-h3 text-foreground mb-3">Resolution & Documentation</h3>
                  <p className="text-body text-foreground/80 leading-relaxed">
                    Once an agreement is reached in mediation, we help formalize it into a binding settlement agreement. For arbitration, a written award is issued that outlines the decision and any remedies. All documentation is prepared professionally and delivered promptly.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Fee Arrangements Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-h1 text-foreground mb-4 font-semibold">
                  Fee Arrangements
                </h2>
                <p className="text-body-lg text-foreground/80 max-w-2xl mx-auto">
                  Flexible fee structures to meet your needs
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-h3 text-foreground">Hourly Basis</h3>
                  </div>
                  <p className="text-body text-foreground/80">
                    Pay for the time spent on your case, with transparent billing and detailed time tracking.
                  </p>
                </div>

                <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
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
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-h3 text-foreground">Fixed Fee</h3>
                  </div>
                  <p className="text-body text-foreground/80">
                    Agree on a predetermined fee for the entire matter, providing budget certainty from the start.
                  </p>
                </div>
              </div>
              <p className="text-body-sm text-foreground/60 text-center mt-6">
                Fee arrangements will be discussed during the initial consultation to determine the best option for your specific case.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-h1 text-foreground mb-4 font-semibold">
                  Frequently Asked Questions
                </h2>
                <p className="text-body-lg text-foreground/80 max-w-2xl mx-auto">
                  Find answers to common questions about mediation, arbitration, and the dispute resolution process.
                </p>
              </div>
              <FAQAccordion />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
