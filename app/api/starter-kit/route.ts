import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, email, recaptchaToken } = body

    // Verify reCAPTCHA
    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    })

    const recaptchaData = await recaptchaResponse.json()

    if (!recaptchaData.success) {
      return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 })
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to you (notification)
    const notificationEmail = {
      from: process.env.EMAIL_USER,
      to: "trincoinc@gmail.com",
      subject: `Fuel Savings Starter Kit Request from ${name} - ${company}`,
      html: `
        <h2>New Starter Kit Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p><em>Submitted from fuelprice.pro starter kit form</em></p>
      `,
    }

    // Email to user (with starter kit)
    const userEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Fuel Savings Starter Kit - Fuel Price Pros",
      html: `
        <h2>Thank you for your interest, ${name}!</h2>
        <p>Here's your Fuel Savings Starter Kit with proven strategies to reduce your fleet's fuel costs:</p>
        
        <h3>🚛 10 Proven Strategies to Cut Fuel Costs:</h3>
        <ol>
          <li><strong>Switch to a fleet fuel card</strong> - Save 15-25¢ per gallon instantly</li>
          <li><strong>Optimize routes</strong> - Use GPS routing to avoid traffic and find shortest paths</li>
          <li><strong>Train drivers on fuel-efficient techniques</strong> - Proper acceleration/deceleration saves 5-10%</li>
          <li><strong>Maintain proper tire pressure</strong> - Under-inflated tires reduce MPG by up to 3%</li>
          <li><strong>Regular engine maintenance</strong> - Clean air filters and oil changes improve efficiency</li>
          <li><strong>Reduce idle time</strong> - Limit idling to save up to $1,000 per truck annually</li>
          <li><strong>Use cruise control</strong> - Maintains steady speed and improves highway MPG</li>
          <li><strong>Plan fuel stops strategically</strong> - Buy fuel at lowest-cost locations on your route</li>
          <li><strong>Monitor fuel consumption</strong> - Track MPG to identify issues early</li>
          <li><strong>Consider aerodynamic upgrades</strong> - Trailer skirts and fairings can improve MPG by 5-10%</li>
        </ol>

        <h3>📋 Driver Training Checklist:</h3>
        <ul>
          <li>☐ Gradual acceleration and deceleration techniques</li>
          <li>☐ Optimal cruising speeds (55-65 mph for best efficiency)</li>
          <li>☐ Proper gear shifting for manual transmissions</li>
          <li>☐ When and how to use cruise control</li>
          <li>☐ Minimizing idle time and engine warm-up</li>
          <li>☐ Route planning and traffic avoidance</li>
          <li>☐ Pre-trip inspection for fuel efficiency</li>
        </ul>

        <h3>🗺️ Route Optimization Worksheet:</h3>
        <p><strong>For each regular route, track:</strong></p>
        <ul>
          <li>Current miles and fuel consumption</li>
          <li>Alternative route options</li>
          <li>Traffic patterns and optimal departure times</li>
          <li>Fuel stop locations and pricing</li>
          <li>Potential savings per trip</li>
        </ul>

        <h3>💳 Fuel Card Comparison Guide:</h3>
        <p><strong>Questions to ask fuel card providers:</strong></p>
        <ul>
          <li>What's the discount per gallon at major truck stops?</li>
          <li>Are there transaction fees or monthly fees?</li>
          <li>How many locations are in your network?</li>
          <li>Do you offer additional services (maintenance, tires, etc.)?</li>
          <li>What reporting and tracking tools are included?</li>
          <li>Is there a minimum purchase requirement?</li>
        </ul>

        <hr>
        <p>Ready to implement these strategies? <a href="https://fuelprice.pro/contact">Contact us</a> for a free consultation!</p>
        
        <p>Best regards,<br>
        The Fuel Price Pros Team<br>
        📧 info@fuelprice.pro<br>
        📞 647-362-6649</p>
      `,
    }

    await transporter.sendMail(notificationEmail)
    await transporter.sendMail(userEmail)

    return NextResponse.json({ success: true, message: "Starter kit sent successfully" })
  } catch (error) {
    console.error("Error sending starter kit:", error)
    return NextResponse.json({ error: "Failed to send starter kit" }, { status: 500 })
  }
}
