// EmailJS Configuration
// All values are loaded from environment variables for security
// Create a .env file in the root directory with your EmailJS credentials
// See .env.example for the required variables

export const EMAILJS_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  // Template IDs for different email types
  templates: {
    owner: process.env.REACT_APP_EMAILJS_OWNER_TEMPLATE_ID,
    user: process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID
  }
}

// Portfolio owner email (where contact form messages are sent)
export const OWNER_EMAIL = process.env.REACT_APP_OWNER_EMAIL

// Validate that all required environment variables are set
if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.publicKey || 
    !EMAILJS_CONFIG.templates.owner || !EMAILJS_CONFIG.templates.user || 
    !OWNER_EMAIL) {
  console.warn('Warning: EmailJS environment variables are not fully configured. Please check your .env file.')
}

// Template parameters mapping
export const TEMPLATE_PARAMS = {
  // Owner template parameters (sent to you)
  owner: {
    from_name: 'from_name',
    from_email: 'from_email', 
    message: 'message',
    to_email: 'to_email'
  },
  // User template parameters (confirmation sent to user)
  user: {
    user_name: 'user_name'
  }
}
