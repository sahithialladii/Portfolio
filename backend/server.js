

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-xz5k.vercel.app/",
    ],
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

// Contact Form API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Required field validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Email format validation
    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    // Send email using Resend
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: subject || "Portfolio Contact Form",
      html: `
        <h2>New Portfolio Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${
          subject || "Portfolio Contact Form"
        }</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    // Check Resend response
    if (response.error) {
      console.error("Resend Error:", response.error);

      return res.status(500).json({
        success: false,
        message: response.error.message,
      });
    }

    console.log("Email sent successfully:", response.data);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("Server Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send message. Please try again later.",
    });
  }
});

// Health Check Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});