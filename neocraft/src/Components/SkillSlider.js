import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './SkillSlider.css'

export default function SkillSlider() {
  return (
    <>
    {/* Footer-like section for images */}
    <div className="quote-footer">
          <div className="quote-footer-content">
            <img src="/Assets/ChatGPT.png" alt="ChatGPT" className="footer-image" />
            <img src="/Assets/Docker.png" alt="Docker" className="footer-image" />
            <img src="/Assets/Figma.png" alt="Figma" className="footer-image" />
            <img src="/Assets/firebase-studio.png" alt="Firebase" className="footer-image" />
            <img src="/Assets/Midjourney.png" alt="Midjourney" className="footer-image" />
            <img src="/Assets/React_logo.png" alt="React" className="footer-image" />
            <img src="/Assets/Visual_Studio.png" alt="Visual Studio" className="footer-image" />
            <img src="/Assets/VMware.png" alt="VMware" className="footer-image" />
            {/* Duplicate for seamless snake effect */}
            <img src="/Assets/ChatGPT.png" alt="ChatGPT" className="footer-image" />
            <img src="/Assets/Docker.png" alt="Docker" className="footer-image" />
            <img src="/Assets/Figma.png" alt="Figma" className="footer-image" />
            <img src="/Assets/firebase-studio.png" alt="Firebase" className="footer-image" />
            <img src="/Assets/Midjourney.png" alt="Midjourney" className="footer-image" />
            <img src="/Assets/React_logo.png" alt="React" className="footer-image" />
            <img src="/Assets/Visual_Studio.png" alt="Visual Studio" className="footer-image" />
            <img src="/Assets/VMware.png" alt="VMware" className="footer-image" />
          </div>
        </div>
    </>
  )
}
