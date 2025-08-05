import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, email } = body

    // Validate required fields
    if (!name || !company || !email) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Check email credentials
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({ success: false, error: "Email service unavailable" }, { status: 500 })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Test connection with better error handling
    try {
      await transporter.verify()
      console.log("✅ Email connection verified")
    } catch (verifyError) {
      console.error("❌ Email verification failed:", verifyError)

      // Provide specific error messages
      if (verifyError.code === "EAUTH") {
        return NextResponse.json(
          {
            success: false,
            error: "Gmail authentication failed. Please check your app password.",
            details: "Make sure you're using a Gmail App Password, not your regular password.",
          },
          { status: 500 },
        )
      }

      return NextResponse.json(
        {
          success: false,
          error: "Email service connection failed",
          details: verifyError.message,
        },
        { status: 500 },
      )
    }

    // Save to Google Sheets if webhook exists
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            name,
            company,
            email,
            source: "Starter Kit Request",
          }),
        })
        console.log("✅ Saved to Google Sheets")
      } catch (sheetError) {
        console.error("⚠️ Google Sheets error (continuing anyway):", sheetError)
      }
    }

    // Send notification email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "trincoinc@gmail.com",
      subject: `🚛 NEW Starter Kit Request from ${name} - ${company}`,
      html: `
        <h2>🚛 New Fuel Savings Starter Kit Request</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>📅 Date:</strong> ${new Date().toLocaleDateString()}</p>
          <p><strong>⏰ Time:</strong> ${new Date().toLocaleTimeString()}</p>
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>🏢 Company:</strong> ${company}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>📋 Source:</strong> Starter Kit Request Form</p>
        </div>
        
        <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
          <h3>⏰ Action Required:</h3>
          <p>Send the Fuel Savings Starter Kit to <strong>${email}</strong> within 48 hours.</p>
        </div>
        
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;"><em>Submitted from fuelprice.pro starter kit form</em></p>
      `,
    })

    // Send user confirmation email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Fuel Savings Starter Kit is Coming! - Fuel Price Pros",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #002F6C; color: white; padding: 30px; text-align: center;">
            <h1>🚛 Thank You, ${name}!</h1>
            <p style="font-size: 18px; margin: 0;">Your Fuel Savings Starter Kit is on the way</p>
          </div>
          
          <div style="padding: 30px; background-color: #f8f9fa;">
            <h2 style="color: #002F6C;">What happens next?</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FF6B00;">
              <h3 style="color: #FF6B00; margin-top: 0;">📧 Within 48 hours</h3>
              <p>We'll send you our comprehensive Fuel Savings Starter Kit directly to this email address.</p>
            </div>
            
            <h3 style="color: #002F6C;">Your starter kit will include:</h3>
            <ul style="line-height: 1.8;">
              <li>🚛 <strong>10 proven strategies</strong> to cut fuel costs immediately</li>
              <li>📋 <strong>Driver training checklist</strong> for fuel-efficient driving</li>
              <li>🗺️ <strong>Route optimization worksheet</strong> to find savings</li>
              <li>💳 <strong>Fuel card comparison guide</strong> with key questions to ask</li>
              <li>📊 <strong>Savings calculator</strong> to estimate your potential savings</li>
              <li>🔧 <strong>Maintenance tips</strong> that improve MPG</li>
            </ul>
            
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <h3 style="color: #28a745; margin-top: 0;">💰 Quick Win While You Wait:</h3>
              <p><strong>Check your tire pressure today!</strong> Under-inflated tires can reduce your MPG by up to 3%. That's an easy $50-100 savings per month per truck.</p>
            </div>
          </div>
          
          <div style="background-color: #002F6C; color: white; padding: 20px; text-align: center;">
            <h3>Questions? Need immediate help?</h3>
            <p>📞 Call us: <strong>647-362-6649</strong></p>
            <p>📧 Email us: <strong>discounts@fuelprice.pro</strong></p>
            <p>🌐 Visit: <strong>fuelprice.pro</strong></p>
          </div>
          
          <div style="padding: 20px; text-align: center; color: #666; font-size: 12px;">
            <p>This email was sent because you requested our Fuel Savings Starter Kit from fuelprice.pro</p>
          </div>
        </div>
      `,
    })

    console.log("✅ All emails sent successfully")

    return NextResponse.json({
      success: true,
      message: "Request submitted successfully",
    })
  } catch (error) {
    console.error("❌ Starter kit error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit request. Please try again or contact us directly at discounts@fuelprice.pro",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
