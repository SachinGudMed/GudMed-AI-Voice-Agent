import React from "react";
import { Hospital, HeartPulse, ShieldCheck, Activity } from "lucide-react";

export default function TrustedBy() {
  const logos = [
    { name: "Sir Ganga Ram Hospital", icon: Hospital },
    { name: "Lilavati Hospital", icon: HeartPulse },
    { name: "AIIMS", icon: ShieldCheck },
    { name: "Sarvodaya Hospital", icon: Activity },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Trusted by India's Leading Healthcare Providers & Hospitals
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-65">
          {logos.map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  className="text-base font-bold text-primary tracking-tight"
                >
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
