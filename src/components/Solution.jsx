import React from "react";
import { Brain, Stethoscope, Calendar, IndianRupee, CalendarCheck, PhoneForwarded } from "lucide-react";

export default function Solution() {
  const features = [
    {
      title: "Understands Patient Problems",
      desc: "Uses advanced clinical NLP to capture complex patient symptoms, recognize diagnosed diseases, and understand upcoming surgical/treatment needs.",
      icon: Brain,
      points: ["Symptom Detection", "Disease Recognition", "Surgery Classification", "Diagnosis Categorization"],
    },
    {
      title: "Smart Doctor Recommendation",
      desc: "Automatically maps patient complaints to the precise specialist. Avoids costly self-routing errors.",
      icon: Stethoscope,
      example: {
        patient: "I have sudden severe chest pain.",
        ai: "Would you like to consult Dr. Sharma, Senior Cardiologist?",
      },
    },
    {
      title: "Real-Time Slot Availability",
      desc: "Connects directly to your HIS/calendar software to check live dates, free slots, consultant availability, and departments.",
      icon: Calendar,
      fields: ["Consultant Designation", "Department Calendar", "Date & Time Options"],
    },
    {
      title: "Transparent Consultation Fees",
      desc: "Dynamically pulls and quotes correct consultant fees, follow-up parameters, and booking rules transparently.",
      icon: IndianRupee,
      fields: ["Consultation Fee", "Follow-up Policy", "Instant Payment Gateway Link"],
    },
    {
      title: "Instant Appointment Booking",
      desc: "Books the appointment on the spot in the hospital database and generates automated confirmation SMS and WhatsApp updates.",
      icon: CalendarCheck,
      points: ["Direct Database Entry", "Instant Booking ID", "WhatsApp Confirmation"],
    },
    {
      title: "Seamless Human Agent Transfer",
      desc: "When faced with complex, emotional, or emergency scenarios, the AI instantly hands off the call to a live staff member.",
      icon: PhoneForwarded,
      points: ["Context-preserved Handoff", "Emergency detection", "No call dropouts"],
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary-200/50 text-primary text-xs font-semibold uppercase tracking-wider">
            Our AI Solution
          </div>
          <h2
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight"
          >
            Meet Your AI Voice Receptionist
          </h2>
          <p className="text-base text-gray-600 font-sans">
            A state-of-the-art conversational voicebot that acts like your hospital's most experienced receptionist, working 24/7 without call wait times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white border border-primary-100/70 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center text-primary mb-5 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    className="text-lg font-bold text-primary mb-2.5"
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans mb-4">
                    {feature.desc}
                  </p>

                  {/* Points / Example / Fields section */}
                  {feature.points && (
                    <ul className="space-y-1.5">
                      {feature.points.map((pt, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}

                  {feature.example && (
                    <div className="bg-primary-50 rounded-xl p-3 border border-primary-100 text-xs space-y-2">
                      <div>
                        <span className="font-bold text-primary block">Patient:</span>
                        <span className="text-gray-700 italic">"{feature.example.patient}"</span>
                      </div>
                      <div>
                        <span className="font-bold text-primary block">AI:</span>
                        <span className="text-gray-700">"{feature.example.ai}"</span>
                      </div>
                    </div>
                  )}

                  {feature.fields && (
                    <div className="flex flex-wrap gap-1.5">
                      {feature.fields.map((f, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-semibold text-primary bg-primary-50 border border-primary-100 px-2 py-0.75 rounded-md"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
