import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, email } = body

    // Get current timestamp
    const timestamp = new Date().toISOString()

    // Save to Google Sheets (we'll add this data to a Google Sheet)
    const sheetData = {
      timestamp,
      name,
      company,
      email,
      source: "Starter Kit Request",
    }

    // Send to Google Sheets
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sheetData),
        })
      } catch (sheetError) {
        console.error("Failed to save to Google Sheets:", sheetError)
        // Continue anyway - don't fail the whole request
      }
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to you (notification with all details)
    const notificationEmail = {
      from: process.env.EMAIL_USER,
      to: "trincoinc@gmail.com",
      subject: `🚛 NEW Starter Kit Request from ${name} - ${company}`,
      html: `
        <h2>🚛 New Fuel Savings Starter Kit Request</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>📅 Date:</strong> ${new Date().toLocaleDateString()}</p>
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
    }

    // Email to user (confirmation)
    const userEmail = {
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
            <p>📧 Email us: <strong>info@fuelprice.pro</strong></p>
            <p>🌐 Visit: <strong>fuelprice.pro</strong></p>
          </div>
          
          <div style="padding: 20px; text-align: center; color: #666; font-size: 12px;">
            <p>This email was sent because you requested our Fuel Savings Starter Kit from fuelprice.pro</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(notificationEmail)
    await transporter.sendMail(userEmail)

    return NextResponse.json({ success: true, message: "Request submitted successfully" })
  } catch (error) {
    console.error("Error processing starter kit request:", error)
    return NextResponse.json({ error: "Failed to submit request" }, { status: 500 })
  }
}
