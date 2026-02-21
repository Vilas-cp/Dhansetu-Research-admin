const pricing = {
  monthly: {
    basicIndex: {
      price: 8000,
    },
    moderateIndex: {
      price: 17000,
    },
    advanceIndex: {
      price: 34000,
    },
    stockOption: {
      price: 15000,
    },
    stockFuture: {
      price: 25000,
    },
    equityResearch: {
      price: 11000,
    },
    longTermEquity: {
      price: 5000,
    },
    mcx: {
      price: 25000,
    },
  },

  quarterly: {
    basicIndex: {
      price: 16000,
    },
    moderateIndex: {
      price: 40000,
    },
    advanceIndex: {
      price: 80000,
    },
    stockOption: {
      price: 40000,
    },
    stockFuture: {
      price: 65000,
    },
    equityResearch: {
      price: 28000,
    },
    longTermEquity: {
      price: 13000,
    },
    mcx: {
      price: 65000,
    },
  },

  halfYearly: {
    basicIndex: {
      price: 30000,
    },
    moderateIndex: {
      price: 75000,
    },
    advanceIndex: {
      price: 125000,
    },
    stockOption: {
      price: 75000,
    },
    stockFuture: {
      price: 120000,
    },
    equityResearch: {
      price: 52000,
    },
    longTermEquity: {
      price: 23000,
    },
    mcx: {
      price: 100000,
    },
  },
};

type TimeId = keyof typeof pricing;
type OptId = keyof typeof pricing[TimeId];

export { pricing };
export { TimeId, OptId };
