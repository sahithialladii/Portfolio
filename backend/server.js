// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Contact Us API
// // app.post("/api/contact", async (req, res) => {
// //   try {
// //     const { name, email, subject, message } = req.body;

// //     // Setup transporter
// //     // const transporter = nodemailer.createTransport({
// //     //   service: "gmail",
// //     //   auth: {
// //     //     user: process.env.EMAIL_USER,
// //     //     pass: process.env.EMAIL_PASS,
// //     //   },
// //     // });
// //     const transporter = nodemailer.createTransport({
// //     host: "smtp.gmail.com",
// //     port: 465,
// //     secure: true, // true for 465
// //     auth: {
// //       user: process.env.EMAIL_USER,
// //       pass: process.env.EMAIL_PASS
// //     }
// //   });


// //     // Mail options
// //     const mailOptions = {
// //       from: email, // sender is the person who filled the form
// //       to: process.env.EMAIL_USER, // your email where you receive messages
// //       subject: subject || "New Contact Form Message",
// //       text: `You got a new message from ${name} (${email}):\n\n${message}`,
// //     };

// //     // Send mail
// //     await transporter.sendMail(mailOptions);

// //     res.status(200).json({ success: true, message: "Message sent successfully ✅" });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ success: false, message: "Something went wrong ❌" });
// //   }
// // });

// app.post("/api/contact", async (req, res) => {
// try {
// const { name, email, subject, message } = req.body;

// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, subject, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       replyTo: email,
//       to: process.env.EMAIL_USER,
//       subject: subject || "Portfolio Contact Form",
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Subject:</strong> ${subject || "Portfolio Contact Form"}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return res.status(200).json({
//       success: true,
//       message: "Message sent successfully",
//     });

//   } catch (error) {
//     console.error("Mail Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Unable to send email",
//     });
//   }
// });



// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });








const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Middleware
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://your-portfolio-frontend.vercel.app"
//     ],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );


// app.use(
//   cors({
//     origin: "*",
//   })
// );
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-xz5k-3ijr6lsxl-sahithi-alladis-projects.vercel.app"
    ],
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

// Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify(); 
    console.log("SMTP Connected Successfully");


    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: subject || "Portfolio Contact Form",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "Portfolio Contact Form"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("Mail Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send email",
    });
  }
});

// Test Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

