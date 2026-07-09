import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "How does AI recommend doctors?",
      answer:
        "The AI uses advanced clinical natural language processing (NLP) to parse patient complaints, mentioned symptoms, or preliminary diagnoses. It then compares this information with doctor profiles, designations, and clinical departments in your hospital directory to suggest the most appropriate medical specialist.",
    },
    {
      question: "Can AI book appointments?",
      answer:
        "Yes, absolutely. The voice bot integrates with your Hospital Information System (HIS) or doctor calendar database to check live dates and times, quotes consultation fees, accepts confirmations, writes the appointment record directly, and sends confirmation messages instantly.",
    },
    {
      question: "Can it transfer to humans?",
      answer:
        "Yes. If a patient asks a query beyond the AI's current configuration, is dealing with a high-stress medical emergency, or explicitly requests to speak with a human agent, the voicebot immediately patches the call to a receptionist or nurse extension without dropping the call.",
    },
    {
      question: "Does it integrate with HIS?",
      answer:
        "Yes, our software offers native APIs and HL7/FHIR compatibility to integrate seamlessly with major Hospital Information Systems (HIS), Electronic Health Records (EHR), and third-party scheduling calendars.",
    },
    {
      question: "Can consultation fees be customized?",
      answer:
        "Definitely. The pricing engine supports custom doctor fees, distinct morning/evening rates, senior consultant rates, follow-up parameters (e.g., free follow-up within 7 days), and discount rules.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary-200/50 text-primary text-xs font-semibold uppercase tracking-wider">
            FAQ Section
          </div>
          <h2
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-600">
            Find answers to common questions about our healthcare voice AI capabilities and installation procedure.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="border border-primary-100/80 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-primary text-sm sm:text-base font-sans focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary-400 shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-primary-50 p-5" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-sm text-gray-550 leading-relaxed font-sans">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
