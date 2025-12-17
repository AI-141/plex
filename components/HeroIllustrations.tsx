import React from 'react';

export const SalesRep = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Body */}
    <path d="M100 170 V 120" stroke="black" />
    <path d="M100 120 L 70 170" stroke="black" />
    <path d="M100 120 L 130 170" stroke="black" />
    <path d="M80 170 L 60 170" stroke="black" />
    <path d="M120 170 L 140 170" stroke="black" />
    
    {/* Torso */}
    <path d="M100 80 Q 70 80 75 120 Q 100 120 125 120 Q 130 80 100 80" fill="#FDFBF7" stroke="black" />
    
    {/* Head */}
    <circle cx="100" cy="60" r="15" fill="#FDFBF7" stroke="black" />
    <path d="M95 62 Q 100 68 105 62" stroke="black" strokeWidth="1.5" /> {/* Smile */}
    <circle cx="95" cy="56" r="1.5" fill="black" />
    <circle cx="105" cy="56" r="1.5" fill="black" />

    {/* Arms holding laptop */}
    <path d="M75 90 Q 60 100 60 80" stroke="black" />
    <rect x="30" y="50" width="40" height="25" rx="2" fill="#FDFBF7" stroke="black" />
    <circle cx="50" cy="62" r="3" stroke="black" /> {/* Laptop logo */}

    {/* Arm holding coffee */}
    <path d="M125 90 Q 140 100 140 85" stroke="black" />
    <path d="M140 85 L 140 75" stroke="black" />
    {/* Cup */}
    <path d="M135 65 L 135 75 Q 135 80 145 80 Q 155 80 155 75 L 155 65 Z" fill="#FDFBF7" stroke="black" />
    <path d="M155 68 Q 160 68 160 73 Q 160 78 155 78" stroke="black" /> {/* Handle */}
    {/* Steam */}
    <path d="M140 55 Q 145 50 140 45" stroke="black" strokeWidth="1.5" opacity="0.6" />
    <path d="M150 55 Q 155 50 150 45" stroke="black" strokeWidth="1.5" opacity="0.6" />
  </svg>
);

export const CustomerSuccess = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Body */}
    <path d="M100 170 V 120" stroke="black" />
    <path d="M100 120 L 75 170" stroke="black" />
    <path d="M100 120 L 125 170" stroke="black" />
    <path d="M85 170 L 65 170" stroke="black" />
    <path d="M115 170 L 135 170" stroke="black" />

    {/* Torso */}
    <path d="M100 80 Q 75 80 80 120 Q 100 120 120 120 Q 125 80 100 80" fill="#FDFBF7" stroke="black" />
    <circle cx="100" cy="100" r="8" stroke="black" /> {/* Badge */}
    <path d="M100 96 L 102 103 L 98 103 Z" fill="black" /> {/* Star detail */}

    {/* Head */}
    <circle cx="100" cy="60" r="15" fill="#FDFBF7" stroke="black" />
    <path d="M95 62 Q 100 68 105 62" stroke="black" strokeWidth="1.5" />
    <circle cx="95" cy="56" r="1.5" fill="black" />
    <circle cx="105" cy="56" r="1.5" fill="black" />

    {/* Left Arm with Star Box */}
    <path d="M80 90 L 60 70" stroke="black" />
    <rect x="40" y="50" width="30" height="30" rx="2" fill="#FDFBF7" stroke="black" />
    <path d="M55 58 L 57 68 L 48 62 L 62 62 L 53 68 Z" stroke="black" fill="none" /> {/* Star */}

    {/* Right Arm with Laptop */}
    <path d="M120 90 L 140 70" stroke="black" />
    <path d="M135 70 L 165 70 L 175 55 L 145 55 Z" fill="#FDFBF7" stroke="black" /> {/* Laptop base */}
    <path d="M145 55 L 145 40 L 175 40 L 175 55" fill="#FDFBF7" stroke="black" /> {/* Screen */}
  </svg>
);

export const Founder = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Stairs */}
    <path d="M40 170 L 80 170 L 80 140 L 110 140 L 110 110 L 140 110 L 140 80" stroke="black" />
    
    {/* Person Climbing */}
    <path d="M90 140 L 80 120" stroke="black" /> {/* Left Leg */}
    <path d="M105 110 L 110 125" stroke="black" /> {/* Right Leg */}
    
    {/* Torso */}
    <path d="M95 90 Q 80 95 85 120 Q 95 125 105 120 Q 110 95 95 90" fill="#FDFBF7" stroke="black" />
    
    {/* Head */}
    <circle cx="95" cy="75" r="12" fill="#FDFBF7" stroke="black" />
    <path d="M98 78 Q 102 75 104 78" stroke="black" strokeWidth="1.5" transform="rotate(-20 95 75)" />
    
    {/* Arms */}
    <path d="M85 95 L 70 105" stroke="black" />
    <path d="M105 95 L 120 85" stroke="black" />
    <path d="M120 85 L 125 70" stroke="black" /> {/* Waving? */}
  </svg>
);

export const Revops = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Puzzle Wall */}
    <rect x="130" y="60" width="30" height="30" stroke="black" fill="#FDFBF7" />
    <path d="M145 90 V 95 A 5 5 0 0 0 155 95 V 90" stroke="black" />
    <rect x="130" y="90" width="30" height="30" stroke="black" fill="#FDFBF7" />
    <rect x="100" y="90" width="30" height="30" stroke="black" fill="#FDFBF7" />
    
    {/* Person */}
    <path d="M80 170 V 130" stroke="black" />
    <path d="M80 130 L 60 170" stroke="black" />
    <path d="M80 130 L 100 170" stroke="black" />
    
    {/* Torso */}
    <path d="M80 90 Q 60 90 65 130 Q 80 130 95 130 Q 100 90 80 90" fill="#FDFBF7" stroke="black" />
    
    {/* Head */}
    <circle cx="80" cy="70" r="15" fill="#FDFBF7" stroke="black" />
    <path d="M75 72 Q 80 78 85 72" stroke="black" strokeWidth="1.5" />
    <circle cx="75" cy="66" r="1.5" fill="black" />
    <circle cx="85" cy="66" r="1.5" fill="black" />
    
    {/* Arms holding piece */}
    <path d="M65 100 L 95 100" stroke="black" />
    <path d="M95 100 L 110 95" stroke="black" />
    
    {/* Loose Puzzle Piece */}
    <path d="M110 85 H 125 V 100 H 110 Z" fill="#FDFBF7" stroke="black" transform="rotate(15 117 92)" />
  </svg>
);

export const Marketer = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Body */}
    <path d="M80 170 V 120" stroke="black" />
    <path d="M80 120 L 60 170" stroke="black" />
    <path d="M80 120 L 100 170" stroke="black" />
    <path d="M60 170 H 50" stroke="black" />
    <path d="M100 170 H 110" stroke="black" />

    {/* Torso */}
    <path d="M80 80 Q 60 80 65 120 Q 80 120 95 120 Q 100 80 80 80" fill="#FDFBF7" stroke="black" />
    
    {/* Head */}
    <circle cx="80" cy="60" r="15" fill="#FDFBF7" stroke="black" />
    <path d="M75 62 Q 80 68 85 62" stroke="black" strokeWidth="1.5" />
    <circle cx="75" cy="56" r="1.5" fill="black" />
    <circle cx="85" cy="56" r="1.5" fill="black" />
    
    {/* Arm holding megaphone */}
    <path d="M90 90 L 115 80" stroke="black" />
    <path d="M115 80 L 115 70" stroke="black" /> {/* Hand */}
    
    {/* Megaphone */}
    <path d="M115 65 L 140 50 L 140 90 L 115 75 Z" fill="#FDFBF7" stroke="black" />
    <path d="M115 75 L 105 75" stroke="black" strokeWidth="3" /> {/* Handle */}
    
    {/* Sound Waves */}
    <path d="M150 55 Q 160 70 150 85" stroke="black" />
    <path d="M160 45 Q 180 70 160 95" stroke="black" />
    <path d="M155 30 L 165 40" stroke="black" />
    <path d="M155 110 L 165 100" stroke="black" />
  </svg>
);
