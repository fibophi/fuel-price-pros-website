import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, fleetSize, phone, email, operation, interests, message, recaptchaToken } = body

    console.log("Environment variables check:")
    console.log("EMAIL_USER:", process.env.EMAIL_USER ? "Set" : "Missing")
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Set" : "Missing")
    console.log("RECAPTCHA_SECRET_KEY:", process.env.RECAPTCHA_SECRET_KEY ? "Set" : "Missing")

    // Check if required environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email credentials")
      return NextResponse.json(
        {
          error: "Email configuration missing. Please contact support.",
          details: "EMAIL_USER or EMAIL_PASS not configured",
        },
        { status: 500 },
      )
    }

    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error("Missing reCAPTCHA secret key")
      return NextResponse.json(
        {
          error: "reCAPTCHA configuration missing",
          details: "RECAPTCHA_SECRET_KEY not configured",
        },
        { status: 500 },
      )
    }

    // Verify reCAPTCHA
    console.log("Verifying reCAPTCHA...")
    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    })

    const recaptchaData = await recaptchaResponse.json()
    console.log("reCAPTCHA response:", recaptchaData)

    if (!recaptchaData.success) {
      console.error("reCAPTCHA verification failed:", recaptchaData)
      return NextResponse.json(
        {
          error: "reCAPTCHA verification failed",
          details: recaptchaData["error-codes"] || "Unknown reCAPTCHA error",
        },
        { status: 400 },
      )
    }

    // Create transporter using Gmail - FIXED THE TYPO HERE
    console.log("Creating email transporter...")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Test the connection
    console.log("Testing email connection...")
    await transporter.verify()
    console.log("Email connection verified successfully")

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "trincoinc@gmail.com",
      subject: `New Contact Form Submission from ${name} - ${company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Fleet Size:</strong> ${fleetSize}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Area of Operation:</strong> ${operation}</p>
        <p><strong>Interests:</strong> ${interests.join(", ")}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Submitted from fuelprice.pro contact form</em></p>
      `,
    }

    console.log("Sending email...")
    const result = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully:", result.messageId)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Detailed error:", error)

    // Provide more specific error messages
    let errorMessage = "Failed to send email"
    let errorDetails = "Unknown error"

    if (error instanceof Error) {
      errorDetails = error.message

      if (error.message.includes("Invalid login")) {
        errorMessage = "Email authentication failed"
        errorDetails = "Please check your Gmail app password"
      } else if (error.message.includes("getaddrinfo ENOTFOUND")) {
        errorMessage = "Network connection error"
        errorDetails = "Unable to connect to Gmail servers"
      } else if (error.message.includes("535")) {
        errorMessage = "Gmail authentication error"
        errorDetails = "App password may be incorrect or expired"
      }
    }

    return NextResponse.json(
      {
        error: errorMessage,
        details: errorDetails,
        fullError: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
