import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Simple backend validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address format." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // Graceful fallback for mock mode (when API key is not configured yet)
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set in environment variables. Running in Mock Success Mode.");
      return NextResponse.json({
        success: true,
        mock: true,
        message: "Submission validated successfully (Mock Mode). Set RESEND_API_KEY in .env.local to activate live email delivery."
      });
    }

    // Modern Inline SVG Logo and Name Header (battle-tested for email client compatibility)
    const emailHeaderHtml = `
      <div style="text-align: center; border-bottom: 1px solid #1f1f1f; padding-bottom: 25px; margin-bottom: 30px;">
        <div style="display: inline-block; vertical-align: middle; width: 44px; height: 44px; margin-right: 12px;">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
            <!-- Monogram Outer Diamond Logo Shape with Emerald Stroke -->
            <path d="M50 8 L92 50 L50 92 L8 50 Z" stroke="#10b981" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
            <!-- K & H Monogram letters details -->
            <path d="M38 32 V68" stroke="#10b981" stroke-width="6.5" stroke-linecap="round" />
            <path d="M62 32 V68" stroke="#10b981" stroke-width="6.5" stroke-linecap="round" />
            <path d="M38 50 H62" stroke="#10b981" stroke-width="6.5" stroke-linecap="round" />
            <path d="M38 50 L54 34" stroke="#10b981" stroke-width="6.5" stroke-linecap="round" />
            <path d="M38 50 L54 66" stroke="#10b981" stroke-width="6.5" stroke-linecap="round" />
          </svg>
        </div>
        <span style="display: inline-block; vertical-align: middle; font-size: 20px; font-weight: 900; letter-spacing: 0.18em; color: #ffffff; text-transform: uppercase; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin-top: 4px;">
          Kazol Habib
        </span>
      </div>
    `;

    // 1. Send Notification Email to Kazol Habib
    const notificationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #050505; color: #e5e5e5; margin: 0; padding: 40px 10px; -webkit-font-smoothing: antialiased; }
            .container { max-width: 600px; margin: 0 auto; background: #0c0c0c; border: 1px solid #1f1f1f; border-radius: 24px; padding: 40px 30px; box-shadow: 0 20px 45px rgba(0,0,0,0.6); }
            .badge { display: inline-block; background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2); color: #10b981; font-size: 10px; font-weight: 800; text-transform: uppercase; padding: 5px 14px; border-radius: 9999px; letter-spacing: 0.12em; margin-bottom: 20px; }
            h1 { font-size: 20px; font-weight: 800; margin: 0 0 10px 0; color: #ffffff; letter-spacing: -0.02em; }
            .meta-table { width: 100%; border-collapse: collapse; margin-top: 25px; margin-bottom: 25px; }
            .meta-cell { padding: 15px; background: #121212; border: 1px solid #1f1f1f; border-radius: 12px; }
            .meta-label { font-weight: 800; color: #737373; text-transform: uppercase; font-size: 9px; letter-spacing: 0.08em; display: block; margin-bottom: 4px; }
            .meta-value { font-weight: 600; color: #ffffff; font-size: 13px; }
            .message-label { font-weight: 800; color: #737373; text-transform: uppercase; font-size: 9px; letter-spacing: 0.08em; display: block; margin-bottom: 8px; margin-top: 25px; }
            .message-box { background: #121212; padding: 25px; border-radius: 16px; border: 1px solid #1f1f1f; border-left: 3px solid #10b981; font-size: 14px; line-height: 1.6; color: #e5e5e5; white-space: pre-wrap; margin-bottom: 30px; }
            .footer { text-align: center; font-size: 10px; color: #525252; border-top: 1px solid #1f1f1f; padding-top: 20px; margin-top: 30px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Dynamic Vector Logo Header -->
            ${emailHeaderHtml}
            
            <div style="text-align: center;">
              <span class="badge">Connection Dispatched</span>
            </div>
            
            <h1>New Client Submission</h1>
            <p style="color: #a3a3a3; font-size: 13px; margin: 0 0 25px 0; line-height: 1.5;">A new request has been successfully validated and received through your digital portfolio form.</p>
            
            <table class="meta-table">
              <tr>
                <td class="meta-cell" style="width: 50%; border-right: none; border-bottom-right-radius: 0; border-top-right-radius: 0;">
                  <span class="meta-label">Client Name</span>
                  <span class="meta-value">${name}</span>
                </td>
                <td class="meta-cell" style="width: 50%; border-bottom-left-radius: 0; border-top-left-radius: 0;">
                  <span class="meta-label">Client Email</span>
                  <span class="meta-value"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></span>
                </td>
              </tr>
              <tr>
                <td class="meta-cell" colspan="2" style="margin-top: 10px; border-top: none; border-top-left-radius: 0; border-top-right-radius: 0;">
                  <span class="meta-label">Subject Matter</span>
                  <span class="meta-value">${subject}</span>
                </td>
              </tr>
            </table>

            <span class="message-label">Detailed Message</span>
            <div class="message-box">${message}</div>

            <div class="footer">
              © ${new Date().getFullYear()} Kazol Habib Portfolio • Secure Connection Gateway
            </div>
          </div>
        </body>
      </html>
    `;

    const ownerRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Kazol Habib Portfolio <onboarding@resend.dev>",
        to: "kazoll.habibb@gmail.com",
        subject: `[Portfolio Connect] ${subject} - from ${name}`,
        reply_to: email,
        html: notificationHtml,
      }),
    });

    const ownerData = await ownerRes.json();
    if (!ownerRes.ok) {
      console.error("Resend owner notification failed:", ownerData);
      throw new Error(ownerData.message || "Failed to send owner notification.");
    }

    // 2. Send "Thank You" Autoreply Email to User
    try {
      const thankYouHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #050505; color: #e5e5e5; margin: 0; padding: 40px 10px; -webkit-font-smoothing: antialiased; }
              .container { max-width: 600px; margin: 0 auto; background: #0c0c0c; border: 1px solid #1f1f1f; border-radius: 24px; padding: 40px 30px; box-shadow: 0 20px 45px rgba(0,0,0,0.6); }
              .badge { display: inline-block; background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2); color: #10b981; font-size: 10px; font-weight: 800; text-transform: uppercase; padding: 5px 14px; border-radius: 9999px; letter-spacing: 0.12em; margin-bottom: 20px; }
              h1 { font-size: 22px; font-weight: 800; margin: 0 0 15px 0; color: #ffffff; letter-spacing: -0.02em; text-align: center; }
              p { font-size: 14px; line-height: 1.6; color: #a3a3a3; margin: 0 0 20px 0; }
              .highlight-box { background: rgba(16,185,129,0.03); border: 1px dashed rgba(16,185,129,0.2); padding: 22px; border-radius: 16px; font-size: 12px; color: #e5e5e5; margin: 25px 0; text-align: center; font-weight: 750; letter-spacing: 0.08em; text-transform: uppercase; }
              .signature { margin-top: 35px; padding-top: 25px; border-top: 1px solid #1f1f1f; }
              .sig-title { font-weight: 800; color: #ffffff; font-size: 14px; }
              .sig-sub { color: #10b981; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; margin-top: 3px; }
              .footer { text-align: center; font-size: 10px; color: #525252; padding-top: 20px; margin-top: 30px; border-top: 1px solid #1f1f1f; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; }
            </style>
          </head>
          <body>
            <div class="container">
              <!-- Dynamic Vector Logo Header -->
              ${emailHeaderHtml}
              
              <div style="text-align: center;">
                <span class="badge">Connection Confirmed</span>
              </div>
              
              <h1>Thank you for connecting!</h1>
              <p>Hi ${name},</p>
              <p>I have successfully received your message regarding <strong>"${subject}"</strong>, and I want to personally thank you for reaching out to connect with me.</p>
              <p>I am highly excited to learn more about your project goals. I have flagged your inquiry for priority review and will examine your details carefully. You can expect a response directly in your inbox within the next 24 hours.</p>
              
              <div class="highlight-box" style="color: #10b981;">
                "Designing Experiences. Engineering Futures."
              </div>

              <p>In the meantime, feel free to review my full case studies or message me directly on WhatsApp if you have an urgent timeline.</p>
              
              <div class="signature">
                <div class="sig-title">Kazol Habib</div>
                <div class="sig-sub">Full Stack Developer & UX Engineer</div>
              </div>

              <div class="footer">
                This is an automated confirmation of your request.<br>
                © ${new Date().getFullYear()} Kazol Habib. All rights reserved.
              </div>
            </div>
          </body>
        </html>
      `;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: "Kazol Habib <onboarding@resend.dev>", // Note: Replace with verified domain when available
          to: email,
          subject: "Thank you for reaching out | Kazol Habib",
          html: thankYouHtml,
        }),
      });
    } catch (autoreplyError) {
      console.warn("Autoreply sent to client failed (expected in unverified Resend sandbox accounts):", autoreplyError.message);
    }

    return NextResponse.json({ success: true, message: "Emails dispatched successfully." });
  } catch (error) {
    console.error("API Route Server Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}
