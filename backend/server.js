require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Use environment port for cloud deployment, fallback to 4000 locally
const PORT = process.env.PORT || 4000;

// Setup transporter for Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your Gmail
    pass: process.env.EMAIL_PASS, // Gmail app password
  },
});

// Route to serve resume PDF
app.get("/resume", (req, res) => {
  const filePath = path.join(__dirname, "resume", "resume.pdf");
  res.download(filePath, "Ravindu_Resume.pdf", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Error downloading file");
    }
  });
});

// Contact form API
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required" });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,   // receive email
      replyTo: email,               // user's email
      subject: `📩 Message from ${name}`,
      text: `
You have a new message from your portfolio contact form:

Name: ${name}
Email: ${email}
Message: ${message}
      `,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Email not sent" });
  }
});

// Start the server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
