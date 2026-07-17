import React from "react";
import {
  PhoneCall,
  Bot,
  Brain,
  Stethoscope,
  Calendar,
  CalendarCheck,
  MessageSquare,
  PhoneForwarded,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Incoming Call",
      desc: "Patient calls the hospital helpline",
      icon: PhoneCall,
      color: "bg-[#2E4168]",
    },
    {
      title: "AI Greets",
      desc: "Instant answers with zero queue wait",
      icon: Bot,
      color: "bg-primary",
    },
    {
      title: "Captures Symptoms",
      desc: "NLP analyzes what the patient needs",
      icon: Brain,
      color: "bg-[#2E4168]",
    },
    {
      title: "Recommends Doctor",
      desc: "Suggests the best cardiologist, etc.",
      icon: Stethoscope,
      color: "bg-[#2E4168]",
    },
    {
      title: "Checks Schedule",
      desc: "Integrates with HIS/EHR live database",
      icon: Calendar,
      color: "bg-[#2E4168]",
    },
    {
      title: "Books Appointment",
      desc: "Direct reservation in database",
      icon: CalendarCheck,
      color: "bg-[#2E4168]",
    },
    {
      title: "SMS / WhatsApp",
      desc: "Patient gets instant confirmation details",
      icon: MessageSquare,
      color: "bg-[#2E4168]",
    },
    {
      title: "Live Transfer",
      desc: "Optionally routes to staff if needed",
      icon: PhoneForwarded,
      color: "bg-[#2E4168]",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-primary-50/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary-200/50 text-primary text-xs font-semibold uppercase tracking-wider">
            Patient Journey
          </div>
          <h2
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight"
          >
            How It Works
          </h2>
          <p className="text-base text-gray-600">
            A seamless 8-step timeline of how our voice AI agent resolves a
            patient inquiry from start to finish.
          </p>
        </div>

        {/* Desktop timeline flow (Horizontal on lg screens, grid on md, vertical on mobile) */}
        <div className="relative">
          {/* Connector line on large displays */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gray-200 -translate-y-12 -z-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step bubble */}
                  <div className="relative mb-4 flex items-center justify-center">
                    <div
                      className={`w-14 h-14 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative z-10`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Small number badge */}
                    <span className="absolute -top-2 -right-2 bg-white text-primary text-[10px] font-extrabold w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center shadow-sm z-20">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Text Details */}
                  <h3
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    className="text-sm font-bold text-primary mb-1"
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-sans max-w-[120px] mx-auto">
                    {step.desc}
                  </p>

                  {/* Connectors for small screens */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden mt-4 text-primary-200">
                      <ArrowDown className="w-5 h-5 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
