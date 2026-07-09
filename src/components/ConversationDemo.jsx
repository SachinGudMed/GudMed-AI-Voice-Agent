import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Bot, UserRound, Phone, Volume2, CalendarCheck, IndianRupee } from "lucide-react";

export default function ConversationDemo() {
  const dialogue = [
    {
      sender: "patient",
      text: "I have severe back pain.",
      time: "0:02",
    },
    {
      sender: "ai",
      text: "I recommend Dr. Mehta, Orthopedic Surgeon. He is available tomorrow. We have slots at 10:30 AM and 11:15 AM. The consultation fee is ₹700. Would you like to book?",
      time: "0:08",
      details: {
        doctor: "Dr. Mehta",
        specialty: "Orthopedic Surgeon",
        slots: ["10:30 AM", "11:15 AM"],
        fee: "₹700",
      },
    },
    {
      sender: "patient",
      text: "Yes, please book the 10:30 AM slot.",
      time: "0:12",
    },
    {
      sender: "ai",
      text: "Your appointment with Dr. Mehta for tomorrow at 10:30 AM has been confirmed. I am sending a confirmation SMS and WhatsApp message right away.",
      time: "0:18",
      badge: "Appointment Confirmed",
    },
  ];

  const [currentStep, setCurrentStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      if (currentStep < dialogue.length - 1) {
        timer = setTimeout(() => {
          setCurrentStep((prev) => prev + 1);
        }, 3000); // 3 seconds delay per chat bubble
      } else {
        setIsPlaying(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep]);

  const handlePlayPause = () => {
    if (currentStep === dialogue.length - 1) {
      // Reset first
      setCurrentStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
      if (currentStep === -1) {
        setCurrentStep(0);
      }
    }
  };

  const handleReset = () => {
    setCurrentStep(-1);
    setIsPlaying(false);
  };

  return (
    <section id="conversation-demo" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-600/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-primary-200 text-xs font-semibold uppercase tracking-wider">
            Live Simulator
          </div>
          <h2
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Voice Conversation Demo
          </h2>
          <p className="text-base text-primary-200">
            Click play below to simulate an interactive patient call and watch how CareVoice.AI books appointments in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Simulator Panel Control */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
              <h3
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="text-lg font-bold"
              >
                Simulation Controls
              </h3>
              <p className="text-sm text-primary-200/80 leading-relaxed font-sans">
                Experience the natural language processing, quick check parameters, and doctor mapping flow.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={handlePlayPause}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary-600 text-white font-semibold transition-all shadow-lg"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-current" /> Play Call
                    </>
                  )}
                </button>
                <button
                  onClick={handleReset}
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all"
                  aria-label="Reset simulation"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* AI Call Stats indicator */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-green-400">0.2s</div>
                <div className="text-xs text-primary-200/70 font-sans">Response Latency</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-green-400">98.4%</div>
                <div className="text-xs text-primary-200/70 font-sans">Intent Accuracy</div>
              </div>
            </div>
          </div>

          {/* Interactive Chat Window */}
          <div className="lg:col-span-7">
            <div className="w-full max-w-2xl mx-auto bg-primary-800/80 border border-primary-700/80 rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Voice call status header */}
              <div className="px-6 py-4 bg-primary-900 border-b border-primary-700/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-300">
                    <Volume2 className={`w-5 h-5 ${isPlaying ? 'animate-bounce' : ''}`} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold block">CareVoice Incoming Line 1</span>
                    <span className="text-xs text-green-400 flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                      Active Call Simulation
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono bg-white/10 px-2.5 py-1 rounded-md text-primary-200">
                  {currentStep >= 0 ? dialogue[currentStep].time : "0:00"}
                </span>
              </div>

              {/* Chat Content Body */}
              <div className="p-6 min-h-[350px] flex flex-col justify-end space-y-4">
                {currentStep === -1 && (
                  <div className="flex flex-col items-center justify-center h-full py-20 text-center text-primary-200/60">
                    <Phone className="w-12 h-12 mb-3 animate-pulse text-primary-400" />
                    <p className="text-sm">Click "Play Call" to start the conversation simulation</p>
                  </div>
                )}

                {dialogue.map((chat, index) => {
                  if (index > currentStep) return null;
                  const isAi = chat.sender === "ai";

                  return (
                    <div
                      key={index}
                      className={`flex items-start gap-3.5 transition-all duration-500 ${
                        isAi ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-md ${
                          isAi ? "bg-primary text-white" : "bg-white/15 text-primary-100"
                        }`}
                      >
                        {isAi ? <Bot className="w-5 h-5" /> : <UserRound className="w-5 h-5" />}
                      </div>

                      <div className="space-y-2 max-w-[80%]">
                        <div
                          className={`text-sm px-4 py-3 rounded-2xl shadow-sm leading-relaxed ${
                            isAi
                              ? "bg-primary text-white rounded-tr-none"
                              : "bg-white/10 text-white rounded-tl-none border border-white/5"
                          }`}
                        >
                          {chat.text}
                        </div>

                        {/* Interactive UI card attachments for AI */}
                        {isAi && chat.details && (
                          <div className="bg-primary-950 border border-primary-700/60 p-4 rounded-xl space-y-3.5 text-xs text-left max-w-sm">
                            <div className="flex justify-between items-center pb-2 border-b border-primary-800">
                              <span className="font-bold text-primary-300">Recommended Consultant</span>
                              <span className="bg-primary/20 px-2 py-0.5 rounded text-[10px] text-primary-200">
                                {chat.details.specialty}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <span className="text-[10px] text-primary-400 block uppercase font-bold">Doctor</span>
                                <span className="font-semibold text-white">{chat.details.doctor}</span>
                              </div>
                              <div>
                                <span className="text-[10px] text-primary-400 block uppercase font-bold">Fee</span>
                                <span className="font-semibold text-white flex items-center gap-0.5">
                                  <IndianRupee className="w-3.5 h-3.5" /> 700
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="text-[10px] text-primary-400 block uppercase font-bold mb-1.5">Available Slots</span>
                              <div className="flex gap-2">
                                {chat.details.slots.map((s, i) => (
                                  <span
                                    key={i}
                                    className="px-2.5 py-1 bg-white/10 rounded-md text-[10px] font-semibold text-white"
                                  >
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {isAi && chat.badge && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/20 border border-green-500/40 text-green-300 text-[11px] font-semibold rounded-full">
                            <CalendarCheck className="w-3.5 h-3.5" />
                            {chat.badge}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
