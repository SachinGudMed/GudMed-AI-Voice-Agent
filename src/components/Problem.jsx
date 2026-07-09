import React from "react";
import {
  Hourglass,
  CalendarOff,
  CircleDollarSign,
  UserX,
  GitFork,
  UserMinus,
} from "lucide-react";

export default function Problem() {
  const problems = [
    {
      title: "Long Waiting Times",
      desc: "Patients wait on hold for minutes just to book a simple routine consultation, leading to frustration and drop-offs.",
      icon: Hourglass,
      badge: "Hold Time: ~8 min",
    },
    {
      title: "Missed Appointments",
      desc: "Without proactive confirmations or reminders, patients forget sessions, leading to unused slots and wasted medical hours.",
      icon: CalendarOff,
      badge: "No-show Rate: ~25%",
    },
    {
      title: "High Manpower Costs",
      desc: "Running a 24/7 call center requires massive scaling of support agents, training, shifts, and high monthly payrolls.",
      icon: CircleDollarSign,
      badge: "Cost: Very High",
    },
    {
      title: "Poor Patient Experience",
      desc: "Repetitive, robotic scripts and human fatigue during rush hours lead to poor patient satisfaction rates.",
      icon: UserX,
      badge: "Satisfaction: < 60%",
    },
    {
      title: "Incorrect Doctor Routing",
      desc: "Non-medical receptionist staff often routes patients to the wrong specialty, forcing rescheduling or refunds.",
      icon: GitFork,
      badge: "Routing Error: ~12%",
    },
    {
      title: "Lost Leads & Patients",
      desc: "Unanswered calls during peak hours or holidays mean patients instantly call alternative clinics in the area.",
      icon: UserMinus,
      badge: "Lost Revenue: ~18%",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gray-50/50 relative overflow-hidden"
    >
      {/* Background decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-55/80 border border-[#2E4168] text-[#2E4168] text-xs font-semibold uppercase tracking-wider">
            The Healthcare Challenge
          </div>
          <h2
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight"
          >
            Hospital Call Centers Are Overloaded
          </h2>
          <p className="text-base text-gray-600">
            Traditional voice call handling is expensive, error-prone, and
            severely limits patient booking capabilities during peak periods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2E4168]/5 flex items-center justify-center text-[#2E4168] mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    className="text-lg font-bold text-primary mb-2.5"
                  >
                    {problem.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">
                    {problem.desc}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md">
                    {problem.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
