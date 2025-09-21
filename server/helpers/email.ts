function mailTemplate(userName: string, amount: string, planName: string, txnId: string, paymentDate: string, paymentMethod: string) {
  return  `
  <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Subscription Confirmation</title>
    <style>
      @media only screen and (max-width: 600px) {
        .container { width: 100% !important; padding: 20px !important; }
        .hero { font-size: 20px !important; }
        .two-col { display: block !important; width: 100% !important; }
        .btn { width: 100% !important; }
      }
      body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      body { margin: 0; padding: 0; background-color: #f4f6f8; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
    </style>
  </head>

  <body style="margin:0; padding:0; background-color:#f4f6f8;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center" style="padding:28px 12px;">
          <!-- main container -->
          <table class="container" width="680" cellpadding="0" cellspacing="0" role="presentation" style="width:680px; max-width:100%; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 6px 18px rgba(20,30,60,0.08);">
            <!-- header -->
            <tr>
              <td style="padding:22px 28px; background:linear-gradient(90deg,#4f46e5,#8b5cf6); color:#fff;">
                <table width="100%" role="presentation">
                  <tr>
                    <td style="vertical-align:middle;">
                      <h1 class="hero" style="margin:0; font-size:22px; line-height:1.1; font-weight:700;">
                        Thank you for your purchase, ${userName}!
                      </h1>
                      <p style="margin:6px 0 0; font-size:13px; color:rgba(255,255,255,0.92);">
                        Your subscription is confirmed — here are the details.
                      </p>
                    </td>
                    <td align="right" style="vertical-align:middle;">
                      <div style="width:56px; height:56px; background:rgba(255,255,255,0.12); border-radius:10px; display:inline-flex; align-items:center; justify-content:center;">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M12 2L20 7v10l-8 5-8-5V7z" fill="white" fill-opacity="0.95"/>
                        </svg>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- body -->
            <tr>
              <td style="padding:20px 28px;">
                <!-- summary card -->
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border:1px solid #eef2ff; background:#fbfdff; border-radius:10px; padding:14px;">
                  <tr>
                    <td style="padding:10px;">
                      <table width="100%" role="presentation" style="font-size:14px; color:#0f172a;">
                        <tr>
                          <td style="vertical-align:top;">
                            <p style="margin:0;font-weight:600;color:#111827;">Amount paid</p>
                            <p style="margin:6px 0 0;font-size:18px;font-weight:700;color:#0b1220;">₹ ${amount}</p>
                            <p style="margin:6px 0 0;color:#6b7280;font-size:12px;">Paid via ${paymentMethod}</p>
                          </td>
                          <td style="vertical-align:top;" align="right">
                            <p style="margin:0;font-weight:600;color:#111827;">Plan</p>
                            <p style="margin:6px 0 0;font-size:16px;font-weight:700;color:#0b1220;">${planName}</p>
                            <p style="margin:6px 0 0;color:#6b7280;font-size:12px;">One-time purchase</p>
                          </td>
                        </tr>

                        <tr><td style="height:12px"></td></tr>

                        <tr>
                          <td style="vertical-align:top;">
                            <p style="margin:0;font-weight:600;color:#111827;">Payment Date</p>
                            <p style="margin:6px 0 0;color:#0b1220;">${paymentDate}</p>
                          </td>
                          <td style="vertical-align:top;" align="right">
                            <p style="margin:0;font-weight:600;color:#111827;">Transaction ID</p>
                            <p style="margin:6px 0 0;color:#0b1220;font-family:monospace;font-size:13px;">${txnId}</p>
                          </td>
                        </tr>

                        <tr><td style="height:12px"></td></tr>

                        <tr>
                          <td style="vertical-align:top;">
                            <p style="margin:0;font-weight:600;color:#111827;">Status</p>
                            <p style="margin:6px 0 0;color:green;font-weight:700;">Success</p>
                          </td>
                        
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- security / note -->
                <table width="100%" role="presentation" style="margin-top:18px;">
                  <tr>
                    <td style="padding:12px; border-radius:8px; background:#f1f5f9; border:1px solid #e6eefc; color:#0b1220; font-size:13px;">
                      <strong style="color:#0f172a; display:block; margin-bottom:6px;">Secure payment</strong>
                      Your payment is processed securely. We never store your full card details and use bank-grade encryption.
                    </td>
                  </tr>
                </table>

                <!-- small footer note -->
                <table width="100%" role="presentation" style="margin-top:18px;">
                  <tr>
                    <td style="font-size:12px;color:#6b7280;">
                      <p style="margin:0;">
                        This invoice is for your records. If you did not make this purchase, please contact us immediately: 
                        <a href="mailto:dhansetu.support@gmail.com" style="color:#374151; font-weight:600;">dhansetu.support@gmail.com</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- bottom -->
            <tr>
              <td style="background:#fafafa; padding:18px 28px; text-align:center; font-size:12px; color:#9ca3af;">
                <p style="margin:0 0 8px;">YourApp Inc. — 123 Business Street, Bangalore, India</p>
              </td>
            </tr>
          </table>
          <div style="height:8px;"></div>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
}

export { mailTemplate };