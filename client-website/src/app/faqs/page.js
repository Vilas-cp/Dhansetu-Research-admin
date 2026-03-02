"use client";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import { useState } from "react";

const faqs = {
  "About Dhansetu Research": {
    icon: "🏢",
    color: "blue",
    items: [
      { q: "Is Dhansetu Research SEBI Registered?", a: "Yes, we are a SEBI Registered Research Analyst (Reg No: INH000024550)." },
      { q: "What services do you provide?", a: "We provide Equity Research, Index Options, MCX (Commodity) recommendations, and Algo Trading support." },
      { q: "Where is your office located?", a: "Our office is in Indore, Madhya Pradesh." },
      { q: "Is Dhansetu Research an Investment Advisor?", a: "No, we are Research Analysts. We provide research; we do not manage funds or provide personalized advice." },
      { q: "How can I contact support?", a: "You can email us at support@dhanseturesearch.com or call +91 9993898621." },
      { q: "Do you provide a free trial?", a: "Yes, we offer a 2-day demo for our research segments to let you experience our work." },
      { q: "What is the Risk Meter on your app?", a: "It's a tool to help you understand your risk appetite before following our research." },
      { q: "Are your services available on mobile?", a: "Yes, we have a dedicated app available on the Play Store and App Store." },
      { q: "Do you provide intraday or delivery calls?", a: "We provide both, depending on the market scenario and the specific segment." },
      { q: "Can I see your past performance?", a: "Yes, we maintain a transparent performance track record available on our dashboard." },
      { q: "Do you offer a combo pack for RA + Algo?", a: "Yes, we have a Premium Combo pack for users who want both research and automation." },
      { q: "Is my data safe with you?", a: "Yes, all client data is encrypted and handled as per our Privacy Policy." },
      { q: "Do you guarantee profits?", a: "No. Markets are subject to risk. We provide high-probability research, not guaranteed returns." },
      { q: "How do I receive alerts?", a: "You get alerts via App Push Notifications, WhatsApp, and Telegram." },
      { q: "What are your office hours?", a: "9:00 AM to 6:00 PM, Monday to Friday." },
    ],
  },
  "Payments & Subscriptions": {
    icon: "💳",
    color: "indigo",
    items: [
      { q: "How do I subscribe?", a: "Choose a plan on our website/app and pay via our integrated payment gateway." },
      { q: "Is the fee refundable?", a: "As per our policy, all fees paid to Dhansetu Research are non-refundable." },
      { q: "Will I get an invoice?", a: "Yes, an automated GST-compliant invoice is generated for every payment." },
      { q: "Can I change my plan midway?", a: "Yes, you can upgrade your plan by paying the difference. Contact support for help." },
      { q: "Which payment methods do you accept?", a: "UPI, Debit/Credit Cards, and Netbanking via Razorpay/Paytm." },
      { q: "Do you have a referral program?", a: "Please check our latest Offers section on the app for referral benefits." },
      { q: "What happens when my plan expires?", a: "Your access to paid groups and live levels will be automatically restricted." },
      { q: "Is GST included in the pricing?", a: "Yes, the final price shown includes applicable GST." },
      { q: "Can I use one subscription on two devices?", a: "No, subscriptions are limited to one active session per user for security." },
    ],
  },
  "Algo Trading Support": {
    icon: "🤖",
    color: "sky",
    items: [
      { q: "What is Algo Trading?", a: "It is a system that executes trades based on pre-defined mathematical rules without human emotion." },
      { q: "Do I need to keep my PC on for Algo?", a: "No, our cloud-based Algos run automatically once activated." },
      { q: "Which brokers do you support for Algo?", a: "We support major brokers like Zerodha, Angel One, Alice Blue, etc." },
      { q: "Is Algo trading legal in India?", a: "Yes, it is legal for retail traders when used through authorized API bridges." },
      { q: "Can I customize the Algo strategy?", a: "We provide pre-defined proven strategies, but you can adjust your capital and risk." },
      { q: "What is the benefit of Algo over manual trading?", a: "Speed, discipline, and the elimination of emotional errors." },
      { q: "Does Algo trade in all segments?", a: "Our Algos currently support Index Options and Equity segments." },
      { q: "Can I stop the Algo anytime?", a: "Yes, you have full control to Stop or Pause the Algo from your dashboard." },
      { q: "What is a Bridge in Algo trading?", a: "It's the software that connects our strategy to your broker terminal." },
      { q: "Do I need high-speed internet?", a: "Since the Algo runs on our servers, your internet speed doesn't affect trade execution." },
    ],
  },
  "SEBI Compliance & Legal": {
    icon: "⚖️",
    color: "blue",
    items: [
      { q: "What is a Service Agreement?", a: "It's a mandatory legal document between an RA and a client as per SEBI norms." },
      { q: "Do I need to sign an agreement?", a: "Yes, digital signing is mandatory before you start using our paid services." },
      { q: "What is a Disclosure?", a: "It is a document where we declare if we have any financial interest in the stocks we recommend." },
      { q: "Where can I find your Investor Charter?", a: "It is available in the footer of our website." },
      { q: "How do I raise a grievance?", a: "You can use the Grievance Redressal link on our site or email info@dhanseturesearch.com." },
      { q: "What is the validity of your SEBI registration?", a: "Our current registration is valid from Jan 01, 2026, to Dec 31, 2030." },
      { q: "What is the SEBI SCORES portal?", a: "It is SEBI's centralized grievance redressal system for investors." },
    ],
  },
  "Trading & Market Basics": {
    icon: "📈",
    color: "cyan",
    items: [
      { q: "What is Nifty 50?", a: "An index of the 50 largest companies listed on the NSE." },
      { q: "What is Bank Nifty?", a: "An index representing the 12 most liquid and large-capitalized Indian banking stocks." },
      { q: "What is Intraday Trading?", a: "Buying and selling stocks within the same trading day." },
      { q: "What is Delivery Trading?", a: "Holding stocks for more than one day." },
      { q: "What is a Stop Loss (SL)?", a: "An order placed to limit the loss on a trade." },
      { q: "What is a Target?", a: "The price at which you plan to exit with a profit." },
      { q: "What is Option Buying?", a: "Purchasing a contract for the right to buy/sell an asset at a set price." },
      { q: "What is Option Selling/Writing?", a: "Taking the opposite side of a buyer; collecting premium with a higher probability of success." },
      { q: "What is Theta Decay?", a: "The reduction in the value of an option as it approaches its expiration date." },
      { q: "What is an IPO?", a: "Initial Public Offering — when a private company goes public for the first time." },
      { q: "What is a Bull Market?", a: "A market condition where prices are rising." },
      { q: "What is a Bear Market?", a: "A market condition where prices are falling." },
      { q: "What is Volume?", a: "The total number of shares traded in a particular time frame." },
      { q: "What is Support?", a: "A price level where a downtrend tends to pause due to buying interest." },
      { q: "What is Resistance?", a: "A price level where an uptrend tends to pause due to selling interest." },
      { q: "What is a Demat Account?", a: "An account used to hold shares in electronic form." },
      { q: "What is NSE & BSE?", a: "The two main stock exchanges in India (National Stock Exchange & Bombay Stock Exchange)." },
      { q: "What is Market Capitalization?", a: "The total value of a company's outstanding shares." },
      { q: "What is an Expiry Date?", a: "The date on which a derivative contract (Options/Futures) becomes void." },
      { q: "What is a Gap Up?", a: "When a stock opens at a price significantly higher than its previous close." },
      { q: "What is a Gap Down?", a: "When a stock opens at a price significantly lower than its previous close." },
    ],
  },
  "Risk Management & Psychology": {
    icon: "🧠",
    color: "indigo",
    items: [
      { q: "What is Risk-to-Reward Ratio?", a: "The ratio of potential loss to potential profit (e.g., 1:2)." },
      { q: "Why is psychology important in trading?", a: "Because 80% of trading success depends on controlling fear and greed." },
      { q: "How much capital should I start with?", a: "Start with an amount you are comfortable losing while learning." },
      { q: "What is a Trailing Stop Loss?", a: "Moving your SL higher as the price moves in your favor to lock in profits." },
      { q: "What is Revenge Trading?", a: "Trying to recover a loss by taking larger, impulsive trades." },
      { q: "What is Diversification?", a: "Spreading your money across different stocks/sectors to reduce risk." },
      { q: "What is Fundamental Analysis?", a: "Evaluating a company's financial health (balance sheets, profits)." },
      { q: "What is Technical Analysis?", a: "Predicting price movements using charts and indicators." },
      { q: "What is a Candlestick chart?", a: "A visual representation of price action showing Open, High, Low, and Close." },
      { q: "What is an RSI indicator?", a: "Relative Strength Index — used to identify overbought or oversold conditions." },
      { q: "What is a Moving Average?", a: "The average price of a stock over a specific period." },
      { q: "What is Hedging?", a: "Taking an offsetting position to reduce the risk of price movements." },
      { q: "What is Margin?", a: "Money borrowed from a broker to trade larger positions." },
      { q: "What is the VIX?", a: "The Volatility Index — often called the Fear Gauge of the market." },
      { q: "What is Scalping?", a: "Making many small profits on very quick trades." },
      { q: "What is Swing Trading?", a: "Holding trades for a few days to a few weeks." },
      { q: "What is a Multi-bagger?", a: "A stock that gives returns several times its original cost." },
      { q: "Why should I choose Dhansetu Research?", a: "Because we provide emotion-free, data-backed research with SEBI-registered transparency." },
    ],
  },
};

const colorMap = {
  blue: {
    badge: "bg-blue-100 text-blue-700",
    iconBg: "from-blue-500 to-blue-700",
    headerBg: "from-blue-50/80 to-white",
    cardBorder: "border-blue-200",
    activeShadow: "shadow-blue-100",
    chevronActive: "text-blue-600 bg-blue-50 border-blue-200",
    chevronInactive: "text-slate-400 bg-white border-slate-200",
    numberBg: "bg-blue-100 text-blue-700",
    itemActiveBorder: "border-blue-200 bg-blue-50/30",
    answerLine: "border-l-blue-300",
  },
  indigo: {
    badge: "bg-indigo-100 text-indigo-700",
    iconBg: "from-indigo-500 to-indigo-700",
    headerBg: "from-indigo-50/80 to-white",
    cardBorder: "border-indigo-200",
    activeShadow: "shadow-indigo-100",
    chevronActive: "text-indigo-600 bg-indigo-50 border-indigo-200",
    chevronInactive: "text-slate-400 bg-white border-slate-200",
    numberBg: "bg-indigo-100 text-indigo-700",
    itemActiveBorder: "border-indigo-200 bg-indigo-50/30",
    answerLine: "border-l-indigo-300",
  },
  sky: {
    badge: "bg-sky-100 text-sky-700",
    iconBg: "from-sky-400 to-sky-600",
    headerBg: "from-sky-50/80 to-white",
    cardBorder: "border-sky-200",
    activeShadow: "shadow-sky-100",
    chevronActive: "text-sky-600 bg-sky-50 border-sky-200",
    chevronInactive: "text-slate-400 bg-white border-slate-200",
    numberBg: "bg-sky-100 text-sky-700",
    itemActiveBorder: "border-sky-200 bg-sky-50/30",
    answerLine: "border-l-sky-300",
  },
  cyan: {
    badge: "bg-cyan-100 text-cyan-700",
    iconBg: "from-cyan-400 to-cyan-600",
    headerBg: "from-cyan-50/80 to-white",
    cardBorder: "border-cyan-200",
    activeShadow: "shadow-cyan-100",
    chevronActive: "text-cyan-600 bg-cyan-50 border-cyan-200",
    chevronInactive: "text-slate-400 bg-white border-slate-200",
    numberBg: "bg-cyan-100 text-cyan-700",
    itemActiveBorder: "border-cyan-200 bg-cyan-50/30",
    answerLine: "border-l-cyan-300",
  },
};

function ChevronDown() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function AccordionItem({ q, a, index, c }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border transition-all duration-200 ${open ? `${c.itemActiveBorder} shadow-sm` : "border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 px-5 py-4 text-left cursor-pointer bg-transparent border-none"
      >
        <span className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${c.numberBg}`} style={{ fontFamily: "monospace" }}>
          {index + 1}
        </span>
        <span className="flex-1 font-semibold text-slate-800 text-[15px] leading-snug" style={{ fontFamily: "'Sora', sans-serif" }}>
          {q}
        </span>
        <span className={`flex-shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""} ${open ? "text-blue-600" : "text-slate-400"}`}>
          <ChevronDown />
        </span>
      </button>
      {open && (
        <div className={`mx-5 mb-4 pl-4 border-l-2 ${c.answerLine}`}>
          <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

function CategoryCard({ name, data, index }) {
  const [open, setOpen] = useState(false);
  const c = colorMap[data.color] || colorMap.blue;

  return (
    <div
      className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${open ? `${c.cardBorder} shadow-lg ${c.activeShadow}` : "border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300"}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-4 px-6 py-5 bg-gradient-to-r ${c.headerBg} border-none cursor-pointer transition-all duration-200 ${open ? "border-b border-slate-100" : ""}`}
      >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-md flex-shrink-0 bg-gradient-to-br ${c.iconBg}`}>
          {data.icon}
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-slate-900 font-bold text-[17px] leading-tight mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
            {name}
          </h3>
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${c.badge}`}>
            {data.items.length} questions
          </span>
        </div>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? c.chevronActive : c.chevronInactive}`}
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>
          <ChevronDown />
        </div>
      </button>

      {/* FAQ Items */}
      {open && (
        <div className="px-4 py-3 flex flex-col gap-2 bg-slate-50/50">
          {data.items.map((item, i) => (
            <AccordionItem key={i} q={item.q} a={item.a} index={i} c={c} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const categories = Object.keys(faqs);
  const totalQuestions = categories.reduce((acc, cat) => acc + faqs[cat].items.length, 0);

  return (
    <>
    <Header1/>

      <div className="min-h-screen w-full relative overflow-hidden pt-[100px]" style={{ background: "linear-gradient(135deg, #f8faff 0%, #eef4ff 40%, #f0f7ff 70%, #fafcff 100%)", fontFamily: "'DM Sans', sans-serif" }}>

        {/* Decorative BG blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle, #bfdbfe 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #a5b4fc 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)", transform: "translate(-50%, -50%)" }} />

        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          {/* ── TOP HEADER ── */}
          <div className="text-center mb-16">
            {/* Breadcrumb pill */}
            

            <h1
              className="font-extrabold text-slate-900 mb-5"
              style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(36px,5vw,60px)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              Got Questions?<br />
              <span style={{ background: "linear-gradient(135deg, #2563eb, #0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                We Have Answers.
              </span>
            </h1>

            <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Explore our comprehensive FAQ library covering everything from SEBI compliance to algo trading and market fundamentals.
            </p>

            
          </div>

          {/* ── CATEGORY CARDS ── */}
          <div className="flex flex-col gap-4">
            {categories.map((cat, i) => (
              <CategoryCard key={cat} name={cat} data={faqs[cat]} index={i} />
            ))}
          </div>

          

        </div>
      </div>
      <Footer/>
    </>
  );
}