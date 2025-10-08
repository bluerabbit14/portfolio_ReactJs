import React from 'react'
import './TechStackScroller.css'

export default function TechStackScroller() {
  // Tech stack images array
  const techStack = [
    { name: 'React', image: '/Assets/React.png' },
    { name: 'Node.js', image: '/Assets/Node.js.png' },
    { name: 'HTML5', image: '/Assets/HTML5.png' },
    { name: 'CSS3', image: '/Assets/CSS3.png' },
    { name: 'JavaScript', image: '/Assets/CSS3.png' }, // Using CSS3 as placeholder for JS
    { name: 'C#', image: '/Assets/C# (CSharp).png' },
    { name: 'C++', image: '/Assets/C++ (CPlusPlus).png' },
    { name: 'C', image: '/Assets/C.png' },
    { name: '.NET', image: '/Assets/NET.png' },
    { name: '.NET Core', image: '/Assets/NET core.png' },
    { name: 'Flutter', image: '/Assets/Flutter.png' },
    { name: 'Android', image: '/Assets/Android.png' },
    { name: 'Docker', image: '/Assets/Docker.png' },
    { name: 'Kubernetes', image: '/Assets/Kubernetes.png' },
    { name: 'AWS', image: '/Assets/AWS.png' },
    { name: 'Azure', image: '/Assets/Azure.png' },
    { name: 'Google Cloud', image: '/Assets/Google Cloud.png' },
    { name: 'Firebase', image: '/Assets/Firebase.png' },
    { name: 'MySQL', image: '/Assets/MySQL.png' },
    { name: 'PostgreSQL', image: '/Assets/PostgresSQL.png' },
    { name: 'SQLite', image: '/Assets/SQLite.png' },
    { name: 'SQL Server', image: '/Assets/Microsoft SQL Server.png' },
    { name: 'Redis', image: '/Assets/Redis.png' },
    { name: 'Git', image: '/Assets/Git.png' },
    { name: 'GitHub', image: '/Assets/GitHub.png' },
    { name: 'BitBucket', image: '/Assets/BitBucket.png' },
    { name: 'Visual Studio', image: '/Assets/Visual Studio.png' },
    { name: 'Figma', image: '/Assets/Figma.png' },
    { name: 'Bootstrap', image: '/Assets/Bootstrap.png' },
    { name: 'Tailwind CSS', image: '/Assets/Tailwind CSS.png' },
    { name: 'Postman', image: '/Assets/Postman.png' },
    { name: 'Swagger', image: '/Assets/Swagger.png' },
    { name: 'Jira', image: '/Assets/Jira.png' },
    { name: 'Cloudflare', image: '/Assets/Cloudflare.png' },
    { name: 'Vercel', image: '/Assets/Vercel.png' },
    { name: 'NuGet', image: '/Assets/NuGet.png' }
  ]

  return (
    <div className="tech-stack-scroller">
      <div className="scroller-container">
        <div className="scroller-track">
          {techStack.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="tech-item">
              <img 
                src={tech.image} 
                alt={tech.name}
                className="tech-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}