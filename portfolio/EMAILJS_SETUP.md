# EmailJS Setup Instructions

This project now uses EmailJS to send emails directly from the contact form. Follow these steps to configure EmailJS:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

## 3. Create Email Templates
You need to create TWO templates: one for the owner (you) and one for the user confirmation.

### Template 1: Owner Email (sent to you)
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})
Message: {{message}}

Reply to: {{from_email}}
```

4. Note down your **Owner Template ID**

### Template 2: User Confirmation Email (sent to user)
1. Create another template
2. Use this template structure:

```
Subject: Thank you for contacting Asif Abbas!

Hi {{user_name}},

Thank you for reaching out! I've received your message and will get back to you within 24 hours.

Best regards,
Asif Abbas
```

3. Note down your **User Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## 5. Update Configuration

### Option A: Direct Configuration (Quick Setup)
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:
   - `YOUR_SERVICE_ID` with your actual Service ID
   - `YOUR_OWNER_TEMPLATE_ID` with your Owner Template ID
   - `YOUR_USER_TEMPLATE_ID` with your User Template ID
   - `YOUR_PUBLIC_KEY` with your actual Public Key

### Option B: Environment Variables (Recommended for Production)
1. Create a `.env.local` file in your project root
2. Add your credentials:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
   REACT_APP_EMAILJS_OWNER_TEMPLATE_ID=your_owner_template_id_here
   REACT_APP_EMAILJS_USER_TEMPLATE_ID=your_user_template_id_here
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
3. The configuration will automatically use these environment variables
4. **Important**: Never commit `.env.local` to version control

## 6. Test the Setup
1. Start your React app: `npm start`
2. Open the contact form
3. Fill out and submit the form
4. Check your email to confirm the message was received

## Security Notes
- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to use in frontend code
- EmailJS handles rate limiting and spam protection

## Troubleshooting
- Check browser console for error messages
- Verify all IDs and keys are correct
- Ensure your email service is properly configured
- Check EmailJS dashboard for usage limits
