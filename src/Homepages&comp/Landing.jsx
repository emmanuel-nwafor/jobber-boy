import React, { useState, useEffect, useRef } from 'react';
import bgImage from '../assets/image_bg7.jpg';

export default function Home() {
  const texts = [
    'Find Your Dream Job with JOBBIE', 
    'Unlock Limitless Career Opportunities', 
    'Step Into Success with JOBBIE',
  ];
  const [displayText, setDisplayText] = useState('');
  const textIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const type = () => {
      const currentText = texts[textIndex.current];
      
      if (!isDeleting.current) {
        setDisplayText(currentText.substring(0, charIndex.current + 1));
        charIndex.current += 1;

        if (charIndex.current === currentText.length) {
          isDeleting.current = true;
          setTimeout(type, 2000000); // Pause before deleting
          return;
        }
      } else {
        setDisplayText(currentText.substring(0, charIndex.current - 1));
        charIndex.current -= 1;

        if (charIndex.current === 0) {
          isDeleting.current = false;
          textIndex.current = (textIndex.current + 1) % texts.length;
        }
      }

      setTimeout(type, isDeleting.current ? 50 : 100);
    };

    const typingTimeout = setTimeout(type, 1000);
    return () => clearTimeout(typingTimeout);
  });

  return (
    <div className="bg-no-repeat bg-cover bg-center min-h-screen flex items-center justify-center px-4"
         style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="text-center p-8 bg-opacity-50 rounded-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-green-700 font-bold">
          {displayText}<span className="animate-pulse">|</span>
        </h1>

        <div>
          <p className="text-lg text-gray-200 mt-4">
            We connect job <span className="text-green-600">seekers</span> with top <span className="text-pink-600">recruiters</span> worldwide.
          </p>
        </div>

      </div>
    </div>
  );
}
