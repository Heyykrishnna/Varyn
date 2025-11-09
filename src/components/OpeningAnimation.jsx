import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './OpeningAnimation.css';

const OpeningAnimation = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const particlesRef = useRef(null);
  const overlayRef = useRef(null);
  const lightBeamRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(logoRef.current, { scale: 0.3, opacity: 0, rotation: -180, y: 50 });
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 50 });
      gsap.set(lightBeamRef.current, { opacity: 0, scaleY: 0 });
      gsap.set(particlesRef.current?.children, { 
        opacity: 0, 
        scale: 0,
        x: () => gsap.utils.random(-300, 300),
        y: () => gsap.utils.random(-300, 300),
        rotation: () => gsap.utils.random(0, 360)
      });
      gsap.set(overlayRef.current, { opacity: 1 });

      // Create timeline
      const tl = gsap.timeline({
        onComplete: () => {
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 500);
        }
      });

      // Light beam reveal
      tl.to(lightBeamRef.current, {
        opacity: 0.6,
        scaleY: 1,
        duration: 0.8,
        ease: "power2.out"
      })
      // Logo dramatic entrance
      .to(logoRef.current, {
        scale: 1.3,
        opacity: 1,
        rotation: 0,
        y: 0,
        duration: 1.5,
        ease: "back.out(2)"
      }, "-=0.5")
      // Logo pulse and glow
      .to(logoRef.current, {
        scale: 1,
        filter: "drop-shadow(0 0 40px rgba(255, 255, 255, 1)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 120px rgba(255, 255, 255, 0.3))",
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.3")
      // Particles burst animation
      .to(particlesRef.current?.children, {
        opacity: 1,
        scale: () => gsap.utils.random(0.8, 1.5),
        x: 0,
        y: 0,
        rotation: () => gsap.utils.random(0, 720),
        duration: 2,
        stagger: {
          amount: 1.5,
          from: "random"
        },
        ease: "power2.out"
      }, "-=1")
      // Text reveal with stagger
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=1.5")
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      // Hold for dramatic effect
      .to({}, { duration: 1.2 })
      // Particles fade and expand
      .to(particlesRef.current?.children, {
        opacity: 0,
        scale: 2,
        x: () => gsap.utils.random(-500, 500),
        y: () => gsap.utils.random(-500, 500),
        rotation: () => gsap.utils.random(0, 1080),
        duration: 1.2,
        stagger: 0.02,
        ease: "power2.in"
      }, "-=0.3")
      // Fade out light beam
      .to(lightBeamRef.current, {
        opacity: 0,
        scaleY: 0,
        duration: 0.8,
        ease: "power2.in"
      }, "-=1")
      // Fade out text and logo
      .to([titleRef.current, subtitleRef.current, logoRef.current], {
        opacity: 0,
        scale: 0.9,
        y: -40,
        duration: 1,
        ease: "power2.in"
      }, "-=1")
      // Final overlay fade
      .to(overlayRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut"
      }, "-=0.8");
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  // Create particle elements with varying sizes
  const particles = Array.from({ length: 30 }, (_, i) => {
    const size = 3 + (i % 6); // Vary sizes between 3-8px
    return (
      <div 
        key={i} 
        className="particle"
        style={{
          width: `${size}px`,
          height: `${size}px`
        }}
      />
    );
  });

  if (isComplete) {
    return null;
  }

  return (
    <div ref={containerRef} className="opening-animation">
      <div ref={overlayRef} className="opening-overlay" />
      <div className="opening-content">
        <div ref={particlesRef} className="particles-container">
          {particles}
        </div>
        <img
          ref={logoRef}
          src="/VARYNLOGOF-removebg-preview.png"
          alt="VARYN"
          className="opening-logo"
        />
        <div className="opening-text">
          <h1 ref={titleRef} className="opening-title">VARYN</h1>
          <p ref={subtitleRef} className="opening-subtitle">Enter the Arena of Champions</p>
        </div>
      </div>
    </div>
  );
};

export default OpeningAnimation;

