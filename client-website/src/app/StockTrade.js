// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            {
              "proName": "NSE:BANKNIFTY",
              "title": "Bank Nifty"
            },
            {
              "proName": "NSE:NIFTY",
              "title": "Nifty"
            },
            {
              "proName": "INDEX:SENSEX",
              "title": "Sensex"
            },
            {
              "proName": "TVC:GOLD",
              "title": "Gold"
            },
            {
              "proName": "TVC:SILVER",
              "title": "Silver"
            },
            {
              "proName": "NSE:HDFCBANK",
              "title": "HDFC Bank"
            },
            {
              "proName": "NASDAQ:RELI",
              "title": "Reliance Industries"
            },
            {
              "proName": "NSE:BAJFINANCE",
              "title": "Bajaj Finance"
            }
          ],
          "colorTheme": "dark",
          "locale": "en",
          "largeChartUrl": "",
          "isTransparent": false,
          "showSymbolLogo": true,
          "displayMode": "adaptive"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/" rel="noopener nofollow" target="_blank"><span className="blue-text">Ticker tape</span></a><span className="trademark"> by TradingView</span></div>
    </div>
  );
}

export default memo(TradingViewWidget);
