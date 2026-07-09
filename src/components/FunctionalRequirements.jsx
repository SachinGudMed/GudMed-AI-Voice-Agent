import React from "react";
import { Brain, Sparkles, Calendar, BadgePercent, CheckCircle, PhoneForwarded } from "lucide-react";

export default function FunctionalRequirements() {
  const specs = [
    {
      title: "Capture Patient Problem",
      icon: Brain,
      capabilities: [
        { label: "Symptoms", val: "Fever, acute pain, headaches" },
        { label: "Diagnosis", val: "Hypertension, diabetes type-2" },
        { label: "Surgery", val: "Bypass scheduling, post-op check" },
        { label: "Treatment", val: "Physiotherapy, dialysis slots" },
      ],
      bg: "from-blue-50/50 to-white",
    },
    {
      title: "Suggest Relevant Doctor",
      icon: Sparkles,
      capabilities: [
        { label: "Consultant Name", val: "Dr. A. K. Sharma, MD" },
        { label: "Department", val: "Cardiology & Vascular Surgery" },
        { label: "Designation", val: "Senior Intervention Specialist" },
        { label: "Slot Match", val: "Matched by highest specialty ranking" },
      ],
      bg: "from-primary-50/50 to-white",
    },
    {
      title: "Slot Availability",
      icon: Calendar,
      capabilities: [
        { label: "Available Dates", val: "Dynamically synced real-time calendar" },
        { label: "Available Time", val: "Morning & evening sessions" },
        { label: "Working Days", val: "Mon-Sat exclusions automatically filtered" },
        { label: "Consultant Status", val: "Shows on-leave or unavailable warnings" },
      ],
      bg: "from-teal-50/50 to-white",
    },
    {
      title: "Consultation Fee Check",
      icon: BadgePercent,
      capabilities: [
        { label: "Fee Quotes", val: "Standard, premium, and senior rates" },
        { label: "Follow-up Fee", val: "Free within 7 days, custom policies" },
        { label: "Payment Info", val: "Online booking links & cash-at-counter option" },
      ],
      bg: "from-amber-50/50 to-white",
    },
    {
      title: "Appointment Booking",
      icon: CheckCircle,
      capabilities: [
        { label: "Confirm Booking", val: "Voice confirmation via OTP or details" },
        { label: "Receive Confirmation", val: "Sends SMS, WhatsApp, and email alerts" },
        { label: "Cancellation & Edits", val: "Option to reschedule via link" },
      ],
      bg: "from-green-50/50 to-white",
    },
    {
      title: "Human Handoff Integration",
      icon: PhoneForwarded,
      capabilities: [
        { label: "Reception", val: "Direct local extension routing" },
        { label: "Call Center", val: "IVR queue insertion" },
        { label: "Hospital Staff", val: "Duty doctor / emergency unit transfer" },
      ],
      bg: "from-red-55/50 to-white",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary-200/50 text-primary text-xs font-semibold uppercase tracking-wider">
            Technical Matrix
          </div>
          <h2
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight"
          >
            Functional Capabilities
          </h2>
          <p className="text-base text-gray-600">
            CareVoice.AI covers the complete range of hospital reception duties, ensuring no calls are dropped or mismanaged.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className={`border border-primary-100/80 rounded-2xl p-6 bg-gradient-to-br ${spec.bg} shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-primary-100 flex items-center justify-center text-primary shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    className="text-base font-bold text-primary"
                  >
                    {spec.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {spec.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex flex-col border-b border-primary-50/40 pb-2 last:border-0 last:pb-0">
                      <span className="text-[11px] font-bold text-primary-400 uppercase tracking-wider">
                        {cap.label}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {cap.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
