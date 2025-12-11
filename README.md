# Iris - Portfolio Website

A modern, responsive portfolio website built with React 19, designed to showcase projects, skills, and services. Features smooth animations, interactive project details, service pages, and a contact form with EmailJS integration. Optimized for performance, accessibility, and mobile-first responsiveness.

## 🚀 Features

### Core Functionality
- **Interactive Portfolio**: Showcase projects with detailed project pages
- **Service Pages**: Dedicated pages for Mobile Development, Web Development, UI/UX Design, API Development, and AI Bot services
- **Contact Form**: Integrated EmailJS contact form with automatic email notifications
- **Project Details**: Detailed project pages with full descriptions, technologies, and features
- **Smooth Navigation**: Single-page application with smooth transitions between views
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices

### UI/UX Features
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Scroll Detection**: Dynamic navbar that responds to scroll behavior
- **Modern Design**: Clean, professional design with smooth transitions
- **Accessibility**: Optimized for screen readers and keyboard navigation

### Pages & Components
- **Home Page**: Hero section, About section, Projects showcase, Footer
- **Project Detail Pages**: Comprehensive project information with full descriptions
- **Service Pages**:
  - Mobile App Development
  - Web Development
  - UI/UX Design
  - API Development
  - AI Bot Services
- **Legal Pages**: Terms of Use and Privacy Policy
- **Contact Form**: Modal contact form with EmailJS integration

## 🛠️ Technology Stack

### Core Technologies
- **React** 19.1.1 - UI framework
- **React Router DOM** 7.9.1 - Client-side routing
- **Redux Toolkit** 2.9.0 - State management
- **React Redux** 9.2.0 - React bindings for Redux

### UI & Animation
- **Framer Motion** 12.23.13 - Animation library for smooth transitions
- **CSS3** - Custom styling with responsive design

### Services & Integration
- **EmailJS** (@emailjs/browser 4.4.1) - Email service for contact form
- **React Scripts** 5.0.1 - Build tooling (Create React App)

### Deployment
- **Vercel** - Deployment platform (configured with vercel.json)

## 📁 Project Structure

```
Iris_ReactJs/
├── public/                 # Static assets
│   └── Assets/            # Images, videos, and media files
├── src/
│   ├── Components/        # React components
│   │   ├── About.js       # About section component
│   │   ├── AIBot.js       # AI Bot service page
│   │   ├── APIDevelopment.js  # API Development service page
│   │   ├── Footer.js      # Footer component
│   │   ├── GetInTouchForm.js  # Contact form modal
│   │   ├── Hero.js        # Hero section
│   │   ├── MobileDevelopment.js  # Mobile Development service page
│   │   ├── Navbar.js      # Navigation bar
│   │   ├── PrivacyPolicy.js  # Privacy Policy page
│   │   ├── Project.js     # Projects showcase
│   │   ├── ProjectDetail.js  # Project detail page
│   │   ├── SpecialistStack.js  # Skills/stack component
│   │   ├── TermsOfUse.js  # Terms of Use page
│   │   ├── Testimonial.js # Testimonials component
│   │   ├── UIUXDesign.js  # UI/UX Design service page
│   │   └── WebDevelopment.js  # Web Development service page
│   ├── config/
│   │   └── emailjs.js     # EmailJS configuration
│   ├── App.js             # Main application component
│   ├── App.css            # Application styles
│   ├── index.js           # Application entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables (create this)
├── vercel.json            # Vercel deployment configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- EmailJS account (for contact form functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Iris_ReactJs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS** (Optional but recommended)
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   REACT_APP_EMAILJS_OWNER_TEMPLATE_ID=your_owner_template_id
   REACT_APP_EMAILJS_USER_TEMPLATE_ID=your_user_template_id
   REACT_APP_OWNER_EMAIL=your_email@example.com
   ```
   
   For detailed EmailJS setup instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

4. **Start the development server**
   ```bash
   npm start
   ```
   
   The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📧 EmailJS Configuration

The contact form uses EmailJS to send emails directly from the browser. Follow these steps:

1. **Create EmailJS Account**: Sign up at [EmailJS.com](https://www.emailjs.com/)
2. **Set up Email Service**: Configure your email provider (Gmail, Outlook, etc.)
3. **Create Templates**: Create two templates (owner notification and user confirmation)
4. **Add Environment Variables**: Add your EmailJS credentials to `.env` file
5. **Restart Server**: Restart the development server after adding environment variables

For detailed setup instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

## 🚢 Deployment

### Vercel Deployment

The project is configured for Vercel deployment with `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Deploy to Vercel:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

For deployment troubleshooting, see [VERCEL_DEPLOYMENT_FIX.md](./VERCEL_DEPLOYMENT_FIX.md)

## 🎨 Key Features Explained

### Navigation System
- Single-page application with view state management
- Smooth transitions between home, project details, and service pages
- Scroll-to-top functionality when switching views
- Dynamic navbar that responds to scroll behavior

### Project Showcase
- Grid layout displaying featured projects
- Click to view detailed project information
- Project categories: Mobile Apps, Web Apps, APIs, AI Solutions
- Full project descriptions with technology stacks

### Service Pages
- Dedicated pages for each service offering:
  - **Mobile Development**: Flutter, .NET MAUI, React Native
  - **Web Development**: React, ASP.NET Core, Full-stack solutions
  - **UI/UX Design**: User interface and experience design
  - **API Development**: RESTful APIs, Backend services
  - **AI Bot**: AI-powered solutions and chatbots

### Contact Form
- Modal contact form accessible from multiple locations
- EmailJS integration for serverless email sending
- Automatic confirmation emails to users
- Owner notification emails

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 📝 Environment Variables

Required environment variables (create `.env` file):

```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_OWNER_TEMPLATE_ID=your_owner_template_id
REACT_APP_EMAILJS_USER_TEMPLATE_ID=your_user_template_id
REACT_APP_OWNER_EMAIL=your_email@example.com
```

**Important Notes:**
- All environment variables must start with `REACT_APP_` to be accessible in React
- Restart the development server after creating/updating `.env` file
- Never commit `.env` file to version control (already in .gitignore)

## 🐛 Troubleshooting

### EmailJS Not Working
- Verify all environment variables are set correctly
- Check browser console for error messages
- Ensure EmailJS service is properly configured
- Verify template IDs match your EmailJS dashboard

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check Node.js version (v14 or higher required)
- Clear node_modules and reinstall if needed

### Routing Issues
- Verify `vercel.json` configuration for production
- Check that all routes redirect to `index.html` for SPA routing

## 📄 License

© 2025 Asif Abbas. All rights reserved.

## 👨‍💻 Developer

**Developer**: Asif Abbas  
**Framework**: React 19  
**Build Tool**: Create React App  
**Deployment**: Vercel

---

**Last Updated**: January 2025
