import React from 'react';
import { Github, Linkedin, Mail, Phone, Instagram, Twitter, ExternalLink, Gitlab, BookOpen } from 'lucide-react';

// Returns the appropriate icon component or image for a given social media platform.
const getSocialIcon = (platform, size = 'w-6 h-6') => {
  switch (platform) {
    case 'github': return <Github className={size} />;
    case 'linkedin': return <Linkedin className={size} />;
    case 'gmail': return <Mail className={size} />;
    case 'whatsapp': return <Phone className={size} />;
    case 'instagram': return <Instagram className={size} />;
    case 'twitter': return <Twitter className={size} />;
    case 'gitlab': return <Gitlab className={size} />;
    case 'kaggle': return <img src="/assets/images/kaggle.png" alt="Kaggle" className={size} />;
    case 'medium': return <BookOpen className={size} />;
    case 'stackoverflow': return <img src="/assets/images/stackoverflow.png" alt="Stack Overflow" className={size} />;
    case 'gravatar': return <img src="/assets/images/gravatar.svg" alt="Gravatar" className={size} />;
    default: return <ExternalLink className={size} />;
  }
};

export default getSocialIcon;
