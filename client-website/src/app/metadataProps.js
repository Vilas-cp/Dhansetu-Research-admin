const metadataProps = {
  home: {
    title:
      "Innovative AI-Powered Solutions for Trading & Investment - DhansetuResearch",
    description: `Explore our advanced ALGO software, 
    featuring powerful strategies for seamless trading 
    across multiple brokers. Achieve maximum convenience and 
    success in your investments with DhansetuResearch. &#128222; +91 9179042673`,
  },
  algoServices: {
    title: "Dhansetu",
    description: `Comprehensive trading solutions covering Equity & Options research, MCX commodity coverage,
  backtested algo trading support, and a Premium RA + Algo combo — research, execution and performance
  tracking for traders of all styles.`,

    commodity: {
      title: "Commodity (MCX) Research - Bullion, Energy & Metals - Dhansetu",
      description: `Bullion coverage with Gold & Silver intraday and positional calls. Detailed levels for
    energy & metals including Crude Oil, Natural Gas and Copper. Live alerts for stop-loss / target changes
    and multiple strategies for conservative and aggressive traders.`,
    },

    equity: {
      title:
        "Equity & Options Research - Daily Calls & Weekly Market Outlook - Dhansetu",
      description: `Daily stock recommendations (BTST, Swing, Positional). Weekly market outlook with key
    levels for Nifty, BankNifty and sector guidance. Options strategies including safe spreads,
    hedged positions and intraday opportunities, plus educational notes explaining the rationale.`,
    },

    algotrading: {
      title:
        "Algo Trading Support - Backtested Strategies & Broker Integration - Dhansetu",
      description: `Pre-built, backtested strategies for intraday and positional trading. Seamless broker
    integration (Zerodha, Angel One, Fyers, Dhan, Alice Blue). Fully automated execution (entry, target,
    SL) with trailing stop-loss and smart risk filters for capital protection.`,
    },

    premiumra: {
      title:
        "Premium RA + Algo Combo - End-to-End Research & Execution - Dhansetu",
      description: `End-to-end solution combining research, execution and risk management. Portfolio
    customization across Stocks, Options or MCX to match your risk profile. Includes performance
    tracking dashboard (monthly & cumulative reports) and priority support with a dedicated RM.`,
    },
  },
  itServices: {
    title:
      "Comprehensive IT Services: Digital Marketing, Web, Mobile, Software & More - DhansetuResearch",
    description: `DhansetuResearch offering web development, mobile development, 
    graphic design, software development, game development, and digital marketing 
    services. Contact us for expert IT solutions.`,
    webDevelopment: {
      title:
        "Expert Web Development Services - Affordable & Professional - DhansetuResearch",
      description: `Our experienced team provides expert web development, design, and 
      testing services. We deliver professional and affordable solutions for all your 
      website needs.`,
    },
    mobileAppDevelopment: {
      title:
        "Custom Mobile App Development - High Performance & Unique - DhansetuResearch",
      description: `Expert mobile app development with quality assurance, safety, 
      and integration. We design unique, high-performance apps to suit your business 
      needs. 100+ successful apps.`,
    },
    graphicVideoDesign: {
      title:
        "Empowering Change: Progressive Strategies for Growth - DhansetuResearch",
      description: `Transform your business with innovative strategies and holistic 
      approaches. Engage in front-end e-business and redefine cross-platform materials 
      for empowered growth.`,
    },
    softwareDevelopment: {
      title: "Mastering Software Design & Development - DhansetuResearch",
      description: `With over 18+ years of experience, we delivers customized software 
      solutions globally. From start-ups to enterprises, we cater to diverse client needs 
      with domain expertise.`,
    },
    gameDevelopment: {
      title:
        "Engaging Mobile Game Development for Android & iOS - DhansetuResearch",
      description: `DhansetuResearch crafts mobile games with captivating UI for 
      Android & iOS. From concept to reality, we focus on consumer satisfaction, 
      thorough testing, and secure in-app purchases.`,
    },
    digitalMarketing: {
      title:
        "Effective Digital Marketing Solutions - Boost Your Online Presence - DhansetuResearch",
      description: `Discover powerful digital marketing strategies to enhance your online 
      presence. Our solutions drive growth and engagement for your business.`,
    },
  },
  pricing: {
    title: "Transparent Pricing for Quality Services - DhansetuResearch",
    description: `Explore our transparent pricing for high-quality services. 
    Get the best value for your investment with clear and competitive pricing options.`,
  },
  indicator: {
    title: "Indicator  - DhansetuResearch",
    description: `Get the indicator details here for any services of DhansetuResearch.`,
  },
  payment: {
    title: "Payment  - DhansetuResearch",
    description: `Get the payment details here for any services of DhansetuResearch.`,
  },
  contact: {
    title: "Contact Us for Expert Assistance | Reach Out Today!",
    description: `Reach out to us for expert assistance. Contact us today for 
    any inquiries or support needs. We're here to help!`,
  },
  about: {
    title:
      "Dhansetu Research: Emotionless Auto Trading Terminal  - DhansetuResearch",
    description: `Learn about our innovative solutions and commitment to your success. 
    Discover how we can help you achieve your goals with cutting-edge technology.`,
  },
  complaint: {
    title:
      "Dhansetu Research: Emotionless Auto Trading Terminal  - DhansetuResearch",
    description: `Learn about our innovative solutions and commitment to your success. 
    Discover how we can help you achieve your goals with cutting-edge technology.`,
  },
  disclosure: {
    title:
      "Dhansetu Research: Emotionless Auto Trading Terminal  - DhansetuResearch",
    description: `Learn about our innovative solutions and commitment to your success. 
    Discover how we can help you achieve your goals with cutting-edge technology.`,
  },
};

// const metadataKeys = Object.keys(metadata);
// console.log(
//   metadata.algoServices.description.replace(/\n/g, "").replace(/\s+/g, " ")
// );
// console.log(metadataKeys);

function removeNewLineCharAndExtraSpaces(metadataObj) {
  const metadataKeys = Object.keys(metadataObj);
  for (let i = 0; i < metadataKeys.length; i++) {
    const metadataKey = metadataKeys[i];
    const element = metadataObj[metadataKey];
    if (typeof element === "object") {
      removeNewLineCharAndExtraSpaces(element);
    } else if (typeof element === "string" && metadataKey === "description") {
      //   console.log(element);
      metadataObj[metadataKey] = element
        .replace(/\n/g, "")
        .replace(/\s+/g, " ");
    }
  }
}

// console.log(metadata);
removeNewLineCharAndExtraSpaces(metadataProps);
// console.log(metadata);

export default metadataProps;
