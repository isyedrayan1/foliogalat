"use client";

import { useState } from 'react';

export const useScramble = (text: string, speed = 30) => {
  const [displayedText, setDisplayedText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const trigger = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&[]{}<>";
    let iterations = 0;
    
    const interval = setInterval(() => {
      setDisplayedText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      if (iterations >= text.length) { 
        clearInterval(interval);
        setIsAnimating(false);
      }
      
      iterations += 1 / 2;
    }, speed);
  };

  return { displayedText, trigger };
};
