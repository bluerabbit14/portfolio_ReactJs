// EmailJS Configuration
// Option 1: Replace these values with your actual EmailJS credentials
// Option 2: Use environment variables (recommended for production)
export const EMAILJS_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_clbj28z',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'rrsZ8pOpyI-5LfDdc',
  // Template IDs for different email types
  templates: {
    owner: process.env.REACT_APP_EMAILJS_OWNER_TEMPLATE_ID || 'message_to_owner',
    user: process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID || 'message_to_user_autosend'
  }
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
