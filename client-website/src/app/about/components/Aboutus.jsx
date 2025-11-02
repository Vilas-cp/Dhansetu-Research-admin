"use client";
import React, { useState, useEffect } from 'react';
import { Shield, TrendingUp, Brain, Zap, Lock, Users, Award, BookOpen } from 'lucide-react';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "SEBI-Registered & Ethically Driven",
      subtitle: "Your Bridge to Trust and Compliance",
      description: "Dhansetu Research operates as a SEBI-Registered Research Analyst firm, ensuring every recommendation follows strict regulatory guidelines. Your trust is our foundation, and we maintain 100% compliance with transparent communication and ethical practices.",
      highlights: [
        "100% compliant with SEBI regulations",
        "Transparent communication with no false profit claims",
        "Ethical, data-backed recommendations",
        "Your funds remain in your own trading account"
      ],
      benefits: [
        "Protection under SEBI framework",
        "Long-term credibility and trust",
        "Trade confidently in safe hands"
      ]
    },
    {
      icon: TrendingUp,
      title: "Research + Algo Integration",
      subtitle: "One Powerful, Unified Solution",
      description: "We've bridged the gap between expert research and automated execution. Our platform combines deep market analysis with cutting-edge algorithmic trading technology, delivering a seamless trading experience.",
      highlights: [
        "Research-backed algorithmic strategies",
        "Fully automated trade execution",
        "Backtested models for accuracy",
        "Smart risk filters and capital protection"
      ],
      benefits: [
        "Convert expert insights into real-time trades",
        "Eliminate emotional decision-making",
        "Focus on growth, not screen time"
      ]
    },
    {
      icon: Brain,
      title: "8+ Years of Market Expertise",
      subtitle: "Experience That Delivers Results",
      description: "Led by Vivek Singh Rajpoot with over 8 years of hands-on experience, our team comprises dedicated analysts, developers, and support professionals trained to deliver excellence across multiple market cycles.",
      highlights: [
        "Expert-designed research models",
        "Practical experience from multiple market cycles",
        "Real-time guidance from seasoned professionals",
        "Dedicated team of analysts and developers"
      ],
      benefits: [
        "Experience converts into accuracy",
        "Understanding of data and trader psychology",
        "Every recommendation is tested, not assumed"
      ]
    },
    {
      icon: Zap,
      title: "Technology-Driven Precision",
      subtitle: "Speed and Accuracy Define Success",
      description: "Our proprietary algorithm technology executes trades within milliseconds, ensuring perfect timing on every opportunity. Cloud-based infrastructure provides real-time execution and seamless connectivity.",
      highlights: [
        "Cloud-based, real-time execution system",
        "Multi-broker connectivity (Zerodha, Angel One, Dhan, etc.)",
        "Live dashboards for trade monitoring",
        "Auto SL, target, trailing stop, and alerts"
      ],
      benefits: [
        "Perfect timing on every trade",
        "Seamless experience without manual errors",
        "Real-time visibility and portfolio control"
      ]
    },
    {
      icon: Lock,
      title: "Risk Management First",
      subtitle: "Protecting Your Capital is Priority One",
      description: "Every strategy we deploy is built with risk-first architecture. We believe the first rule of trading is protecting your capital, keeping you safe during market volatility through systematic controls.",
      highlights: [
        "Predefined stop-loss & target structures",
        "Max loss per trade / per day limits",
        "Automatic stop-trading after drawdown",
        "Diversified strategy selection"
      ],
      benefits: [
        "Avoid emotional over-trading",
        "Preserve profits and capital",
        "Enable long-term sustainability"
      ]
    },
    {
      icon: Users,
      title: "End-to-End Client Support",
      subtitle: "We're With You Every Step",
      description: "From onboarding to strategy setup, live execution, and post-trade analytics, our dedicated team provides continuous support through multiple channels, ensuring you never feel stuck or confused.",
      highlights: [
        "Direct call assistance",
        "WhatsApp & Telegram support",
        "Email helpdesk available",
        "Live remote setup & strategy review"
      ],
      benefits: [
        "Never feel stuck or confused",
        "Immediate resolution of queries",
        "Real people, real support"
      ]
    }
  ];

  const coreValues = [
    {
      title: "Transparency",
      description: "Every trade and result is open for audit. Complete visibility into our operations and performance.",
      icon: "📊"
    },
    {
      title: "Technology",
      description: "Smart automation and advanced analytics simplify complex research for better decision-making.",
      icon: "⚙️"
    },
    {
      title: "Trust",
      description: "Ethical operations, SEBI compliance, and focus on long-term client growth over short-term gains.",
      icon: "🤝"
    }
  ];

  const comparisonData = [
    { feature: "SEBI Registration", dhansetu: true, typical: false },
    { feature: "Research + Algo Combined", dhansetu: true, typical: false },
    { feature: "Transparent Reporting", dhansetu: true, typical: false },
    { feature: "Automated Risk Control", dhansetu: true, typical: false },
    { feature: "24/7 Human Support", dhansetu: true, typical: false },
    { feature: "Educational Resources", dhansetu: true, typical: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002366] via-[#003399] to-[#004499] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold">SEBI Registered Research Analyst</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Why Choose<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-cyan-200">
                Dhansetu Research?
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mb-8 leading-relaxed">
              Your bridge to smarter, safer, and systematic trading. In a world full of noise and false promises, we stand apart with transparency, technology, and trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="px-8 py-4 bg-white text-[#002366] font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started
              </a>
              <a href="/services" className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              We Don't Sell Dreams, We Build Systems
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dhansetu Research helps you grow consistently through data-driven research, automated execution, and complete risk control. Our SEBI-registered platform combines expert analysis with cutting-edge technology to deliver results you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions backed by experience, technology, and unwavering commitment to your success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#002366]/20"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#002366] to-[#004499] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#002366] mb-4">
                        {feature.subtitle}
                      </p>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {feature.highlights.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-600">
                                <span className="w-1.5 h-1.5 bg-[#002366] rounded-full mt-2 flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Benefits:</h4>
                          <ul className="space-y-2">
                            {feature.benefits.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-600">
                                <span className="text-green-500 flex-shrink-0">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#002366] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Built on three non-negotiable pillars that define everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-blue-100 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-blue-100 text-lg max-w-2xl">
                Every client, big or small, will receive the same quality of research, technology, and support. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Empowerment */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                <BookOpen className="w-5 h-5 text-[#002366]" />
                <span className="text-sm font-semibold text-[#002366]">Education + Empowerment</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Learn While You Earn
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We don't just provide signals—we help you understand the reasoning behind every decision. Our mission is to make every trader self-reliant through continuous education and transparent communication.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#002366] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Market Reasoning</h4>
                    <p className="text-gray-600">Detailed explanation with every trading call</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#002366] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Learning Resources</h4>
                    <p className="text-gray-600">Comprehensive notes and strategy guides</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#002366] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Live Sessions</h4>
                    <p className="text-gray-600">Webinars on risk management, psychology & automation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="border-l-4 border-[#002366] pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">Build Confidence</h4>
                    <p className="text-gray-600">Understand the 'why' behind every trade decision</p>
                  </div>
                  <div className="border-l-4 border-[#002366] pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">Data-Based Decisions</h4>
                    <p className="text-gray-600">Create awareness about systematic trading approaches</p>
                  </div>
                  <div className="border-l-4 border-[#002366] pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">Continuous Growth</h4>
                    <p className="text-gray-600">Develop skills that last beyond individual trades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Dhansetu Stands Apart
            </h2>
            <p className="text-xl text-gray-600">
              See how we compare to typical advisory firms
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#002366] to-[#004499]">
                    <th className="px-6 py-5 text-left text-white font-bold text-lg">Feature</th>
                    <th className="px-6 py-5 text-center text-white font-bold text-lg">Dhansetu Research</th>
                    <th className="px-6 py-5 text-center text-white font-bold text-lg">Typical Advisory</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-blue-50/50 transition-colors">
                      <td className="px-6 py-5 font-semibold text-gray-900">{row.feature}</td>
                      <td className="px-6 py-5 text-center">
                        {row.dhansetu ? (
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                            <span className="text-green-600 font-bold text-xl">✓</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                            <span className="text-red-600 font-bold text-xl">✗</span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-5 text-center">
                        {row.typical ? (
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                            <span className="text-green-600 font-bold text-xl">✓</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                            <span className="text-red-600 font-bold text-xl">✗</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}