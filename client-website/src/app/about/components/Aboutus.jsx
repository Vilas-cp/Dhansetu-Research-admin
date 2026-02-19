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
      title: "About Dhansetu Research & Registration",
      subtitle: "What is Dhansetu Research?",
      description: " It is a SEBI-registered Research Analyst firm specializing in Indian equity and commodity markets.",
      highlights: [
        "Is the founder SEBI registered? Yes, Vivek is a SEBI-registered Research Analyst (Reg No: INH000024550).",
        "What is your SEBI registration number? Our official registration is INH000024550.",
        "How do I verify this registration? You can verify it on the official SEBI website under the \"Research Analyst\" category.",
        "What is the primary role of a Research Analyst? To conduct objective analysis and provide \"buy / sell / hold\" recommendations based on data."
      ],
      benefits: [
        "Is Dhansetu an Investment Adviser? No. We provide research reports and recommendations; we do not provide personalized financial planning.",
        "Where is Dhansetu based? Our corporate office is located in Indore, Madhya Pradesh.",
        "What is Dhansetu's experience? Our team has over 10 years of experience in derivative and technical analysis.",
        "What is Dhansetu's mission? To provide retail traders with institutional-grade data and research for better decision-making.", 
        "Are your reports public? We offer a mix of free daily 'Market Pulse' reports and premium in-depth research."
      ]
    },
    {
      icon: TrendingUp,
      title: "Dhansetu Algo Basics",
      subtitle: "What is Dhansetu Algo? It is an automated software bridge that executes Dhansetu's research-based strategies in your broker account.",
      description: "Is it fully automated? Yes, it is \"set- and - forget\" automation that handles entries, exits, and trailing stop-losses.",
      highlights: [
        "Do I need to be a coder? No. Dhansetu Algo is designed for non-technical retail traders with zero coding skills.",
        "Is it legal to use Algos in India? Yes, SEBI explicitly allows algo trading through broker-authorized APIs.",
        "What is an API bridge? It is a secure connection between our research logic and your broker's terminal.",
        "How do I activate the Algo daily? You simply need to login to the dashboard once before 9:15 AM to authorize the API.",
      ],
      benefits: [
        "Which brokers are supported? We support Dhan, Zerodha, Angel One, and Alice Blue.",
        "Can I use Dhansetu Algo on mobile? Yes, the dashboard is fully responsive and works on any smartphone browser.",
        "Does it guarantee a monthly return? No. We provide research logic; market outcomes can never be guaranteed.",
        "Is Algo better than manual trading? It is faster and removes emotional biases like greed and fear."
      ]
    },
    {
      icon: Brain,
      title: "Strategy & Market Coverage",
      subtitle: "What segments do you cover? Nifty, Bank Nifty, FinNifty, Equity Stocks, and MCX (Crude/Natural Gas).",
      description: "What is the logic behind Nifty Algos? They are based on a combination of Price Action, RSI, and Open Interest (OI) analysis.",
      highlights: [
        "Do you use Technical or Fundamental analysis? For Intraday/Algo, we use 100% Technical. For long-term picks, we use Fundamental.",
        "Are these \"Black Box\" Algos? No, we explain the research logic behind our strategies to our paid members.",
        "How are stocks selected for Algos? We filter for high-volume breakouts and sector momentum.",
        "What chart timeframe is used? Most of our Algos operate on 5-minute and 15-minute intervals.",
      ],
      benefits: [
        "Do you provide MCX research? Yes, specialized research for Crude Oil and Natural Gas is available.",
        "How often are strategies updated? Our models are reviewed weekly to adapt to changing market volatility.",
        "What is Slippage in Algos? It's a minor price difference during execution. We use limit orders to minimize this.",
        "Do you provide wealth-building picks? Yes, we have a \"Wealth Builder\" segment for long-term equity investors."
      ]
    },
    {
      icon: Zap,
      title: "Capital & Risk Management",
      subtitle: "What is the minimum capital for Algos? We recommend ₹50,000 for Index Options and ₹25,000 for Equity Cash.",
      description: "Can I start with small capital? Yes, you can start with even ₹10,000 in the Equity Cash segment.",
      highlights: [
        "What is a \"Drawdown\"? It is the peak-to-trough decline in your capital during a losing streak.",
        "How do you handle losses? Every trade comes with a mandatory hard stop-loss triggered by the Algo.",
        "What is your Risk-to-Reward (RR)? We generally aim for a minimum of 1:1.5.",
        "Can I lose all my money? While losses occur, our risk management ensures no single trade wipes you out.",
      ],
      benefits: [
        "How many lots does the Algo trade? It depends on your capital and the multiplier you set in the dashboard.",
        "Can I change the lot size? Yes, you have full control over the quantity multiplier.",
        "Does the Algo trade on Budget Day? We often pause Algos during extreme events to avoid high slippage.",
        "Is Option Buying risky? It involves time decay. Our Algos enter only when momentum is high to reduce this risk."
      ]
    },
    {
      icon: Lock,
      title: "Pricing & Subscription",
      subtitle: "What are the plans for Dhansetu? We offer Monthly, Quarterly, and Yearly subscription models.",
      description: "Does one plan cover everything? Our \"Advance All\" plan covers Index, Stocks, and MCX.",
      highlights: [
        "Is there a free trial? We provide a 2-day demo of our Research Channel.",
        "Are there any profit-sharing fees? No. We only charge a flat subscription fee for research and software.",
        "Are there hidden charges? No. All fees are transparently mentioned on our website.",
        "Can I upgrade my plan? Yes, you can upgrade anytime by paying the pro-rata difference.",
      ],
      benefits: [
        "How do I pay? We accept UPI, Net Banking, and all major Credit/Debit Cards.",
        "Is GST applicable? Yes, 18% GST is included in the plan prices.",
        "Do you offer a discount for annual plans? Yes, annual plans usually come with a significant discount.",
        "Why are Research and Algo fees combined? To provide a seamless \"Research-to-Execution\" experience for the user."
      ]
    },
    {
      icon: Users,
      title: "Refund & Cancellation Policy",
      subtitle: "What is your refund policy? We have a strict No Refund Policy after the service is activated.",
      description: "What if I don't make a profit? As per SEBI, we cannot refund based on P&L performance..",
      highlights: [
        "What if I have technical issues? We offer technical support to fix setup issues; refunds are not provided for user-end technical errors.",
        "How do I cancel? You can disable auto-renewal from your user profile on the website.",
        "Will I get a refund if I cancel early? No, the service will remain active until the end of the current billing cycle.",
        "Can I pause my subscription? Yes, we allow a one-time \"Pause\" of up to 10 days for monthly users.",
      ],
      benefits: [
        "What if I pay twice? Duplicate payments are refunded within 5-7 working days.",
        "Is there a money-back guarantee? No. Market-linked services do not offer such guarantees.",
        "Why \"No Refund\"? Because research is consumed immediately upon delivery, and software licenses are non-reversible.",
        "Where can I email billing queries? Contact us at billing@dhanseturesearch.com."
      ]
    },
    {
      icon: Brain,
      title: "Technical Setup",
      subtitle: "How do I setup my broker? Simply enter your API Key and Secret in the Dhansetu Algo dashboard.",
      description: "Do I need a VPS? No, Dhansetu Algo is cloud-based. You don't need to keep your PC on.",
      highlights: [
        "What happens if my internet fails? Since the Algo runs on our server, your local internet failure won't stop the trade.",
        "What is the daily login time? Between 8:45 AM and 9:10 AM.",
        "How do I know the Algo is working? The status indicator on your dashboard will turn \"Active\" or \"Green.\"",
        "What if a trade is missed? This usually happens due to \"Insufficient Margin\" or \"API Token Expiry.\"",
      ],
      benefits: [
        "Can I exit a trade manually? Yes, you can exit directly from your broker app at any time.",
        "How to reset my API? Delete the existing API in your broker portal and generate a new one.",
        "What is the \"Master Kill Switch\"? A button that instantly exits all open positions and stops the Algo for the day.",
        "Do you provide technical help? Yes, we provide Zoom/AnyDesk support for your initial setup."
      ]
    },
    {
      icon: TrendingUp,
      title: "Community & Support",
      subtitle: "What is the Dhansetu WhatsApp group? A broadcast channel where we share the research logic and live updates.",
      description: "How do I join the group? You receive an automated link via email after your subscription is confirmed.",
      highlights: [
        "Can I chat in the group? No, it is a broadcast channel to ensure only high-quality research is shared.",
        "Is there a Telegram channel? Yes, we provide the same research on Telegram for those who prefer it.",
        "What is the \"Evening Outlook\"? A daily summary of the market and a roadmap for the next day.",
        "How do I report an issue? You can raise a ticket via the \"Support\" tab on our website.",
      ],
      benefits: [
        "Is there voice call support? We provide call support between 10 AM and 6 PM on weekdays.",
        "Are my details safe? Yes, we follow strict data encryption and privacy protocols.",
        "How many alerts do I get? Typically 2 to 4 high-conviction alerts per day.",
        "Do you give \"Jackpot\" calls? We do not use such words; we provide \"High Probability\" research setups."
      ]
    },
    {
      icon: Lock,
      title: "Legal & SEBI Compliance",
      subtitle: "Where can I see your disclosures? All disclosures are available in the footer of our research reports.",
      description: "Do you have a conflict of interest? Any holdings by the analyst in recommended stocks are disclosed as per SEBI.",
      highlights: [
        "What is SEBI's SCORES portal? It is a platform for investors to lodge complaints against intermediaries.",
        "Do you provide \"Fixed\" returns? No. Assured returns are illegal and not provided by Dhansetu.",
        "Is your Algo exchange-approved? Our Algos are deployed through broker-controlled API environments.",
        "How do you handle grievances? We have a dedicated compliance officer to address all client issues.",
      ],
      benefits: [
        "What is NISM? National Institute of Securities Markets—our analysts are NISM certified.",
        "Do you take money for trading? No. We never ask for your broker password or funds for trading.",
        "Are you an Investment Bank? No, we are a pure-play Research Entity.",
        "Can I see your Code of Conduct? Yes, it is available on our website under the \"Legal\" section."
      ]
    },
    {
      icon: Zap,
      title: "New Trader FAQ",
      subtitle: "I am a beginner; is Algo for me? Yes, it's actually better for beginners as it prevents \"Revenge Trading.\"",
      description: "How long does it take to learn? You can learn the basics of the dashboard in less than 30 minutes.",
      highlights: [
        "Which index is best for beginners? Nifty 50 is generally less volatile and better for new traders.",
        "Should I do Option Buying or Selling? Buying needs less capital; Selling has a higher win rate. We research both.",
        "Do you cover IPOs? Yes, we provide research and subscription advice for all major IPOs.",
        "What is a \"Market Order\" vs \"Limit Order\"? Our Algos mostly use Limit orders to ensure better pricing.",
      ],
      benefits: [
        "Can I use multiple brokers? One subscription is valid for one linked broker account at a time.",
        "What is FII/DII data? It shows the buying/selling activity of big institutions, which we analyze daily.",
        "How do I stay updated? Subscribe to our free newsletter and follow our social media handles.",
        "How do I start today? Choose a plan on our website, finish the payment, and link your broker API."
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-[100px]">
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
              {`We Don't Sell Dreams, We Build Systems`}
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

          <div className="grid grid-cols-1 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#002366]/20"
                >
                  <div className="flex items-start gap-6">
                    <div className="lg:flex hidden flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#002366] to-[#004499] rounded-xl items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
      {/* <section className="py-20 bg-[#002366] text-white relative overflow-hidden">
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
      </section> */}

      {/* Education & Empowerment */}
      {/* <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
                {`We don't just provide signals—we help you understand the reasoning behind every decision. Our mission is to make every trader self-reliant through continuous education and transparent communication.`}
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
                    <p className="text-gray-600">{`Understand the 'why' behind every trade decision`}</p>
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
      </section> */}

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