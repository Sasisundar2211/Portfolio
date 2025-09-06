import React, { useState, useEffect } from "react";
import "./Loader.css";

const Loader = ({ className }) => {
  const [typedName, setTypedName] = useState('');
  const fullName = '</BSV Sasi Sundar/>';

  // Creates a typing effect for the name tag.
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedName(prev => {
        if (prev.length < fullName.length) {
          return fullName.substring(0, prev.length + 1);
        }
        clearInterval(typingInterval);
        return prev;
      });
    }, 50); // Adjust typing speed here (in ms)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className={`loader-container ${className || ""}`}>
      <div className="loader-logo">
        <div></div>
      </div>
      <p className="loader-name-tag">{typedName}</p>
    </div>
  );
};

export default Loader;
