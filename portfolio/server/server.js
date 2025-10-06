const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // You can change this to your preferred email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Email templates
const createOwnerEmailTemplate = (name, email, message) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #495057; margin-top: 0;">Contact Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
      
      <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 4px;">
        <p style="margin: 0; color: #6c757d; font-size: 14px;">
          This message was sent from your portfolio contact form.
        </p>
      </div>
    </div>
  `;
};

const createUserAcknowledgmentTemplate = (name) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #28a745; text-align: center;">
        Thank You for Contacting Me!
      </h2>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p>Hi ${name},</p>
        
        <p>Thank you for reaching out through my portfolio contact form. I've received your message and will get back to you within 24 hours.</p>
        
        <p>I appreciate your interest in my work and look forward to connecting with you!</p>
        
        <div style="background-color: white; padding: 15px; border-radius: 4px; margin: 15px 0;">
          <p style="margin: 0; font-style: italic; color: #6c757d;">
            "Great things in business are never done by one person. They're done by a team of people." - Steve Jobs
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 30px;">
        <p style="color: #6c757d; font-size: 14px;">
          Best regards,<br>
          Asif Abbas<br>
          <a href="mailto:${process.env.EMAIL_USER}" style="color: #007bff;">${process.env.EMAIL_USER}</a>
        </p>
      </div>
    </div>
  `;
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    const transporter = createTransporter();

    // Email to portfolio owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: createOwnerEmailTemplate(name, email, message)
    };

    // Acknowledgment email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Asif Abbas!',
      html: createUserAcknowledgmentTemplate(name)
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    res.json({ 
      success: true, 
      message: 'Thank you! Your message has been sent successfully. You should receive a confirmation email shortly.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, there was an error sending your message. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

// Serve static files from the React app build directory
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
