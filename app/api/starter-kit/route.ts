import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, email } = body

    // Validate required fields
    if (!name || !company || !email) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // For now, just log the request and return success
    // This avoids any email/nodemailer issues during build
    console.log("Starter Kit Request:", {
      timestamp: new Date().toISOString(),
      name,
      company,
      email,
      source: "Starter Kit Request",
    })

    // Try to save to Google Sheets if webhook exists
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
      } catch (error) {
        console.error("Google Sheets error:", error)
      }
    }

    return NextResponse.json({
      success: true,
      message: "Request submitted successfully! You'll receive your starter kit within 48 hours.",
    })
  } catch (error) {
    console.error("Starter kit error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit request. Please try again or contact us directly at info@fuelprice.pro",
      },
      { status: 500 },
    )
  }
}
