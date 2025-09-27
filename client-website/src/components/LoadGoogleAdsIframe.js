import React from 'react'

function LoadGoogleAdsIframe() {
  return (
    <noscript>
      <iframe
        id="load-google-ads-iframe"
        src="https://www.googletagmanager.com/ns.html?id=GTM-N4QV5QGL"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
  );
}

export default LoadGoogleAdsIframe