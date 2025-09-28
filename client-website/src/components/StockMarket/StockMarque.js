"use client";
import React, { useEffect } from 'react';
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const stockData = [
  { "symbol": "RELIANCE", "curPrice": 1379, "prePrice": 1372.4, "percent": "0.48%", "currency": "₹", "diff": "6.60", "direction": "up" }, 
  { "symbol": "INFY", "curPrice": 1452.2, "prePrice": 1484.8, "percent": "-2.20%", "currency": "₹", "diff": "-32.60", "direction": "down" }, 
  { "symbol": "TCS", "curPrice": 2905.4, "prePrice": 2957.4, "percent": "-1.76%", "currency": "₹", "diff": "-52.00", "direction": "down" }, 
  { "symbol": "HDFCBANK", "curPrice": 944.25, "prePrice": 949.85, "percent": "-0.59%", "currency": "₹", "diff": "-5.60", "direction": "down" }, 
  { "symbol": "BHARTIARTL", "curPrice": 1915.4, "prePrice": 1935.6, "percent": "-1.04%", "currency": "₹", "diff": "-20.20", "direction": "down" }, 
  { "symbol": "ITC", "curPrice": 405, "prePrice": 400.1, "percent": "1.22%", "currency": "₹", "diff": "4.90", "direction": "up" }, 
  { "symbol": "ICICIBANK", "curPrice": 1362.5, "prePrice": 1375.8, "percent": "-0.97%", "currency": "₹", "diff": "-13.30", "direction": "down" }, 
  { "symbol": "KOTAKBANK", "curPrice": 1993.6, "prePrice": 2013.5, "percent": "-0.99%", "currency": "₹", "diff": "-19.90", "direction": "down" }, 
  { "symbol": "LT", "curPrice": 3743, "prePrice": 3644.4, "percent": "2.71%", "currency": "₹", "diff": "98.60", "direction": "up" }, 
  { "symbol": "ADANIENT", "curPrice": 2535.6, "prePrice": 2576.4, "percent": "-1.58%", "currency": "₹", "diff": "-40.80", "direction": "down" }, 
  { "symbol": "AAPL", "curPrice": 255.46, "prePrice": 256.87, "percent": "-0.55%", "currency": "$", "diff": "-1.41", "direction": "down" }, 
  { "symbol": "MSFT", "curPrice": 511.46, "prePrice": 507.03, "percent": "0.87%", "currency": "$", "diff": "4.43", "direction": "up" }, 
  { "symbol": "GOOGL", "curPrice": 246.54, "prePrice": 245.76, "percent": "0.32%", "currency": "$", "diff": "0.78", "direction": "up" }, 
  { "symbol": "TSLA", "curPrice": 440.4, "prePrice": 423.39, "percent": "4.02%", "currency": "$", "diff": "17.01", "direction": "up" }, 
  { "symbol": "AMZN", "curPrice": 219.78, "prePrice": 218.15, "percent": "0.75%", "currency": "$", "diff": "1.63", "direction": "up" }, 
  { "symbol": "META", "curPrice": 743.75, "prePrice": 748.91, "percent": "-0.69%", "currency": "$", "diff": "-5.16", "direction": "down" }, 
  { "symbol": "NVDA", "curPrice": 178.19, "prePrice": 177.69, "percent": "0.28%", "currency": "$", "diff": "0.50", "direction": "up" }, 
  { "symbol": "NFLX", "curPrice": 1210.61, "prePrice": 1208.24, "percent": "0.20%", "currency": "$", "diff": "2.37", "direction": "up" }, 
  { "symbol": "DIS", "curPrice": 113.47, "prePrice": 112.99, "percent": "0.42%", "currency": "$", "diff": "0.48", "direction": "up" }, 
  { "symbol": "BRK.B", "curPrice": 500.03, "prePrice": 494.96, "percent": "1.02%", "currency": "$", "diff": "5.07", "direction": "up" }
];

function StockMarque() {
  useEffect(() => {
    async function init() {
      const res = await fetch("https://rgcfwe8e2g.execute-api.ap-south-1.amazonaws.com/default/stock-api-v2");
      const resJson = await res.json();
      console.log(resJson);
    }
    // init();
  }, []);
  return (
    <div className="relative bg-slate-100 h-[70px] w-full overflow-hidden text-[25px] font-bold py-3">
      <div className="absolute top-0 left-0 flex animate-marquee">
        {stockData.map((stock, index) => (
          <div
            key={index}
            className={`flex items-center justify-center gap-5 mx-7 ${stock.direction === "up" ? "text-[#00FF00]" : "text-[#FF0000]"
              }`}
          >
            <div className="flex items-center flex-col -space-y-[8px]">
              <div>{stock.symbol}</div>
              <div>{stock.percent}</div>
            </div>
            <div className="flex items-center flex-col -space-y-[8px] justify-center">
              <div>
                <span>
                  {stock.direction === "up" ? (
                    <ArrowDropUpIcon />
                  ) : (
                    <ArrowDropDownIcon />
                  )}
                </span>
                <span>{stock.currency}</span>
                {stock.curPrice}
              </div>
              <div>
                <span>{stock.currency}</span>
                {stock.diff}
              </div>
            </div>
          </div>
        ))}
        {stockData.map((stock, index) => (
          <div
            key={index}
            className={`flex items-center justify-center gap-5 mx-7 ${stock.direction === "up" ? "text-[#00FF00]" : "text-[#FF0000]"
              }`}
          >
            <div className="flex items-center flex-col -space-y-[8px]">
              <div>{stock.symbol}</div>
              <div>{stock.percent}</div>
            </div>
            <div className="flex items-center flex-col -space-y-[8px] justify-center">
              <div>
                <span>
                  {stock.direction === "up" ? (
                    <ArrowDropUpIcon />
                  ) : (
                    <ArrowDropDownIcon />
                  )}
                </span>
                <span>{stock.currency}</span>
                {stock.curPrice}
              </div>
              <div>
                <span>{stock.currency}</span>
                {stock.diff}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StockMarque