import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// This allows you to use process.env variables locally if you create a .env file
// You'll need to run: npm install dotenv
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize the Express app
const app = express();

// Middleware to handle Cross-Origin Resource Sharing (CORS) and parse JSON bodies
app.use(cors());
app.use(express.json());

// --- API Route to Handle Contact Form Submission ---
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // 1. Basic validation
    if (!name || !email || !subject || !message) {
        return res.status(400).send({ message: 'All fields are required.' });
    }

    // 2. Create a Nodemailer transporter using your email service credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your email from Render's environment variables
            pass: process.env.EMAIL_PASS, // Your App Password from Render's environment variables
        },
    });

    // 3. Define the email content
    const mailOptions = {
        from: `"${name}" <${email}>`, // This shows the sender's name and email
        to: process.env.EMAIL_USER,      // This is your email address where you'll receive the form
        subject: `Portfolio Contact: ${subject}`,
        text: `You have a new message from your portfolio contact form:
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}`,
    };

    // 4. Try to send the email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'Email sent successfully!' });
    } catch (error) {
        // Log the error for debugging on the Render server
        console.error('Error sending email:', error);
        res.status(500).send({ message: 'Failed to send email.' });
    }
});

// --- Server Listener ---
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
