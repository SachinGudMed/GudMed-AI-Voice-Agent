import React from "react";
import {
  Clock,
  ShieldCheck,
  UserCheck,
  Zap,
  TrendingUp,
  PhoneCall,
  GitMerge,
  Cpu
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "24×7 Availability",
      desc: "Answering patient calls on weekends, holidays, and late nights without dropouts.",
      icon: Clock,
    },
    {
      title: "Reduce Reception Load",
      desc: "Saves up to 80% of receptionist hours so they can focus on in-person patient hospitality.",
      icon: ShieldCheck,
    },
    {
      title: "Better Patient Experience",
      desc: "Empathetic, clear, and instant answers to queries with minimal waiting times.",
      icon: UserCheck,
    },
    {
      title: "Faster Appointment Booking",
      desc: "Complete booking loop resolved in under 2 minutes compared to standard 8-minute waiting calls.",
      icon: Zap,
    },
    {
      title: "Higher Conversion",
      desc: "Reduces missed calls to zero, converting every patient inquiry into a confirmed scheduling slot.",
      icon: TrendingUp,
    },
    {
      title: "Never Miss Calls",
      desc: "Processes unlimited parallel calls simultaneously without returning a busy tone.",
      icon: PhoneCall,
    },
    {
      title: "Intelligent Routing",
      desc: "Connects doctors to symptoms accurately and routes complex queries to the correct extension.",
      icon: GitMerge,
    },
    {
      title: "AI Powered Voice Calls",
      desc: "Engineered on next-generation LLM technology customized specifically for healthcare semantics.",
      icon: Cpu,
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary-200/50 text-primary text-xs font-semibold uppercase tracking-wider">
            Key Outcomes
          </div>
          <h2
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight"
          >
            Why Hospitals Choose CareVoice.AI
          </h2>
          <p className="text-base text-gray-600">
            Streamline operational hospital workflows, save personnel costs, and deliver immediate value to patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    className="text-base font-bold text-primary mb-2"
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
