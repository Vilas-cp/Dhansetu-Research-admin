const metadataProps = {
  home: {
    title:
      "Innovative AI-Powered Solutions for Trading & Investment - BrainAutoTech",
    description: `Explore our advanced ALGO software, 
    featuring powerful strategies for seamless trading 
    across multiple brokers. Achieve maximum convenience and 
    success in your investments with BrainAutoTech. &#128222; +91 9179042673`,
  },
  algoServices: {
    title:
      "Best Algo Trading Software & Algorithmic Trading Platform | BrainAutoTech",
    description: `We offer powerful algorithmic trading strategies, 
    free options, and seamless integration across brokers. Explore our 
    algo trading service and simple indicators for successful stock trading. 
    Check our prices and find the best algo trading solution today!`,
    apiBridge: {
      title:
        "API Bridge - Seamless Algo Trading Integration with Amibroker, MT4, TradingView, and More - BrainAutoTech",
      description: `Explore API Bridge for seamless algo trading 
      with Amibroker, MT4, TradingView, Python, and more. Start 
      trading efficiently across multiple platforms and markets with 
      BrainAutoTech's API Bridge.`,
    },
    algoTrading: {
      title:
        "Best Algo Trading Platform - Automated & Error-Free Trading - BrainAutoTech",
      description: `Experience the best algo trading with automated, 
      error-free execution. Save time and money with our platform, 
      using MetaTrader4 & MetaTrader5 for efficient trading.`,
    },
    autoBuyAndSell: {
      title:
        "Accurate Auto Buy Sell Signal Software for Trading - BrainAutoTech",
      description: `Get accurate auto buy sell signal software for MCX, NSE, 
      and more. Easy to install, customizable, and supported by AI for 
      high-accuracy trading signals.`,
    },
    strategyDevelopment: {
      title: "Expert Trading Strategy Development & Automation - BrainAutoTech",
      description: `Develop automated trading strategies on MT4, 
      MT5, Tradingview, and more. Enjoy expert advisor auto trading, 
      custom indicators, and secure, stress-free trading.`,
    },
  },
  itServices: {
    title:
      "Comprehensive IT Services: Digital Marketing, Web, Mobile, Software & More - BrainAutoTech",
    description: `BrainAutoTech offering web development, mobile development, 
    graphic design, software development, game development, and digital marketing 
    services. Contact us for expert IT solutions.`,
    webDevelopment: {
      title:
        "Expert Web Development Services - Affordable & Professional - BrainAutoTech",
      description: `Our experienced team provides expert web development, design, and 
      testing services. We deliver professional and affordable solutions for all your 
      website needs.`,
    },
    mobileAppDevelopment: {
      title:
        "Custom Mobile App Development - High Performance & Unique - BrainAutoTech",
      description: `Expert mobile app development with quality assurance, safety, 
      and integration. We design unique, high-performance apps to suit your business 
      needs. 100+ successful apps.`,
    },
    graphicVideoDesign: {
      title:
        "Empowering Change: Progressive Strategies for Growth - BrainAutoTech",
      description: `Transform your business with innovative strategies and holistic 
      approaches. Engage in front-end e-business and redefine cross-platform materials 
      for empowered growth.`,
    },
    softwareDevelopment: {
      title: "Mastering Software Design & Development - BrainAutoTech",
      description: `With over 18+ years of experience, we delivers customized software 
      solutions globally. From start-ups to enterprises, we cater to diverse client needs 
      with domain expertise.`,
    },
    gameDevelopment: {
      title:
        "Engaging Mobile Game Development for Android & iOS - BrainAutoTech",
      description: `BrainAutoTech crafts mobile games with captivating UI for 
      Android & iOS. From concept to reality, we focus on consumer satisfaction, 
      thorough testing, and secure in-app purchases.`,
    },
    digitalMarketing: {
      title:
        "Effective Digital Marketing Solutions - Boost Your Online Presence - BrainAutoTech",
      description: `Discover powerful digital marketing strategies to enhance your online 
      presence. Our solutions drive growth and engagement for your business.`,
    },
  },
  pricing: {
    title: "Transparent Pricing for Quality Services - BrainAutoTech",
    description: `Explore our transparent pricing for high-quality services. 
    Get the best value for your investment with clear and competitive pricing options.`,
  },
  indicator: {
    title: "Indicator  - BrainAutoTech",
    description: `Get the indicator details here for any services of BrainAutoTech.`,
  },
  payment: {
    title: "Payment  - BrainAutoTech",
    description: `Get the payment details here for any services of BrainAutoTech.`,
  },
  contact: {
    title: "Contact Us for Expert Assistance | Reach Out Today!",
    description: `Reach out to us for expert assistance. Contact us today for 
    any inquiries or support needs. We're here to help!`,
  },
  about: {
    title:
      "Brain Auto Tech: Emotionless Auto Trading Terminal  - BrainAutoTech",
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
    metadataObj[metadataKey] = element.replace(/\n/g, "").replace(/\s+/g, " ");
    }
  }
}

// console.log(metadata);
removeNewLineCharAndExtraSpaces(metadataProps);
// console.log(metadata);

export default metadataProps;
