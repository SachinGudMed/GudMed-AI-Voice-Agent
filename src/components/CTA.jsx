import React from "react";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card */}
        <div className="relative bg-gradient-to-r from-primary to-primary-800 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl text-center text-white">
          {/* Background Decorative Shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl -z-10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl -z-10 -translate-x-1/3 translate-y-1/3" />

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-primary-200 text-xs font-semibold uppercase tracking-wider">
              <Sparkles
                className="w-4 h-4 text-white animate-spin"
                style={{ animationDuration: "3s" }}
              />
              Get Started Today
            </div>

            <h2
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Ready to Automate Your Hospital Appointment Booking?
            </h2>

            <p className="text-sm sm:text-base text-primary-200/90 max-w-xl mx-auto font-sans leading-relaxed">
              Book a live demonstration tailored to your clinic or hospital
              system. Experience first-hand how GudMed.AI handles real caller
              traffic.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="mailto:demo@GudMed.ai"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-primary-50 text-primary font-bold text-sm sm:text-base transition-all shadow-md hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4.5 h-4.5 text-primary" />
                Book Live Demo
              </a>
              <a
                href="tel:+91999999999"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm sm:text-base transition-all border border-primary-500 hover:-translate-y-0.5"
              >
                Contact Sales
                <ArrowRight className="w-4.5 h-4.5" />
              </a>
            </div>

            <div className="pt-6 text-xs text-primary-300/80 font-sans">
              No credit card required • Installed in under 48 hours • HL7/FHIR
              Compliant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
