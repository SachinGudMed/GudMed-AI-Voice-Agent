import React from "react";
import {
  Play,
  ArrowRight,
  Bot,
  Sparkles,
  Phone,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import ai from "../assets/Ai_voice_bot.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-white">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-50 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary-200/55 text-primary text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-primary-400 animate-pulse" />
              Next-Gen Healthcare AI
            </div>

            <h1
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary"
            >
              AI Voice Agent for Hospital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-400">
                Appointment Booking
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed font-sans">
              Automate inbound patient calls seamlessly. GudMed.AI greets
              patients, captures symptoms, recommends the right doctors, checks
              availability, books appointments instantly, and intelligently
              transfers complex calls to hospital staff.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary hover:bg-primary-600 text-white font-semibold text-[15px] transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 max-w-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-xs font-semibold text-gray-700">
                  DPDP Act
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-xs font-semibold text-gray-700">
                  95%+ Accuracy
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-xs font-semibold text-gray-700">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-90 -z-10" />

              <img
                src={ai}
                alt="AI Voice Agent"
                className="w-full h-full rounded-3xl object-contain mt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
