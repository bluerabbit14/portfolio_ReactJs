# Email Service Setup Guide

This guide will help you set up the email service for your portfolio contact form using Nodemailer.

## Prerequisites

1. A Gmail account (or any email service that supports SMTP)
2. Node.js installed on your system

## Setup Instructions

### 1. Install Dependencies

First, install the required dependencies:

```bash
npm install
```

### 2. Configure Email Settings

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file with your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   NODE_ENV=development
   ```

### 3. Gmail App Password Setup

For Gmail, you'll need to create an App Password:

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Enable 2-Step Verification if not already enabled
4. Go to Security → App passwords
5. Generate a new app password for "Mail"
6. Use this app password in your `.env` file (not your regular Gmail password)

### 4. Running the Application

#### Development Mode (Both Frontend and Backend)
```bash
npm run dev
```

This will start both the React frontend (port 3000) and the backend server (port 5000).

#### Production Mode
1. Build the React app:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm run server
   ```

### 5. Testing the Email Service

1. Open your portfolio website
2. Click on the "Get In Touch" button
3. Fill out the contact form
4. Submit the form
5. Check both your email and the user's email for confirmation

## Email Templates

The system sends two emails:

1. **To Portfolio Owner**: Contains the user's contact details and message
2. **To User**: Acknowledgment email confirming their message was received

## Troubleshooting

### Common Issues

1. **"Invalid login" error**: Make sure you're using an App Password, not your regular Gmail password
2. **"Connection timeout" error**: Check your internet connection and firewall settings
3. **"Authentication failed" error**: Verify your email credentials in the `.env` file

### Alternative Email Services

You can use other email services by modifying the transporter configuration in `server/server.js`:

```javascript
const transporter = nodemailer.createTransporter({
  service: 'outlook', // or 'yahoo', 'hotmail', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

Or use custom SMTP settings:

```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.your-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for all sensitive information
- Consider using a dedicated email service for production (SendGrid, Mailgun, etc.)

## Support

If you encounter any issues, check the console logs for error messages and ensure all dependencies are properly installed.
