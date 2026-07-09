import React from "react";
import { Bot, Zap, Clock, Users } from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      value: "95%",
      label: "Call Automation",
      desc: "Resolves patient queries without human receptionist involvement.",
      icon: Bot,
    },
    {
      value: "70%",
      label: "Faster Booking",
      desc: "Cuts average appointment confirmation timelines down by minutes.",
      icon: Zap,
    },
    {
      value: "24/7",
      label: "Availability",
      desc: "Answers calls during holidays, night shifts, and emergency surges.",
      icon: Clock,
    },
    {
      value: "1000+",
      label: "Calls Managed Daily",
      desc: "Scales dynamically to support high-traffic hospital networks.",
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary-800 to-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-4 right-4 text-white/10 group-hover:scale-110 transition-transform">
                  <Icon className="w-12 h-12" />
                </div>
                <div
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  className="text-4xl font-extrabold text-white mb-2"
                >
                  {stat.value}
                </div>
                <div
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  className="text-sm font-bold text-primary-200 mb-1"
                >
                  {stat.label}
                </div>
                <p className="text-xs text-primary-100/70 font-sans leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
