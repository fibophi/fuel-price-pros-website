import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  console.log("=== STARTER KIT API CALLED ===")

  try {
    // Test 1: Can we parse the request?
    const body = await request.json()
    console.log("✅ Request parsed:", body)

    const { name, company, email } = body

    // Test 2: Do we have required fields?
    if (!name || !company || !email) {
      console.log("❌ Missing fields")
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }
    console.log("✅ All fields present")

    // Test 3: Do we have email credentials?
    const hasEmailUser = !!process.env.EMAIL_USER
    const hasEmailPass = !!process.env.EMAIL_PASS
    console.log("Email credentials check:", { hasEmailUser, hasEmailPass })

    if (!hasEmailUser || !hasEmailPass) {
      console.log("❌ Missing email credentials")
      return NextResponse.json({ success: false, error: "Email credentials missing" }, { status: 500 })
    }
    console.log("✅ Email credentials found")

    // Test 4: Can we import nodemailer?
    let nodemailer
    try {
      nodemailer = await import("nodemailer")
      console.log("✅ Nodemailer imported")
    } catch (importError) {
      console.log("❌ Nodemailer import failed:", importError)
      return NextResponse.json({ success: false, error: "Email service unavailable" }, { status: 500 })
    }

    // Test 5: Can we create transporter?
    let transporter
    try {
      transporter = nodemailer.createTransporter({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      })
      console.log("✅ Transporter created")
    } catch (transportError) {
      console.log("❌ Transporter creation failed:", transportError)
      return NextResponse.json({ success: false, error: "Email transporter failed" }, { status: 500 })
    }

    // Test 6: Can we verify connection?
    try {
      await transporter.verify()
      console.log("✅ Email connection verified")
    } catch (verifyError) {
      console.log("❌ Email verification failed:", verifyError)
      return NextResponse.json({ success: false, error: "Email connection failed" }, { status: 500 })
    }

    // Test 7: Can we send a simple email?
    try {
      const testEmail = {
        from: process.env.EMAIL_USER,
        to: "trincoinc@gmail.com",
        subject: `🧪 TEST: Starter Kit Request from ${name}`,
        text: `Test email for starter kit request from ${name} at ${company} (${email})`,
      }

      await transporter.sendMail(testEmail)
      console.log("✅ Test email sent successfully")
    } catch (emailError) {
      console.log("❌ Email sending failed:", emailError)
      return NextResponse.json({ success: false, error: "Email sending failed" }, { status: 500 })
    }

    console.log("🎉 ALL TESTS PASSED")
    return NextResponse.json({ success: true, message: "Test completed successfully" }, { status: 200 })
  } catch (error) {
    console.error("💥 CRITICAL ERROR:", error)
    return NextResponse.json({ success: false, error: "Critical server error" }, { status: 500 })
  }
}
