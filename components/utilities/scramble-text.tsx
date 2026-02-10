"use client";

import { useScramble } from './use-scramble';

interface ScrambleTextProps {
  text: string;
  className?: string;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = "" }) => {
  const { displayedText, trigger } = useScramble(text);
  return (
    <span onMouseEnter={trigger} className={`inline-block cursor-default ${className}`}>
      {displayedText}
    </span>
  );
};
