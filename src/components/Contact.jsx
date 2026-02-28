import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactInfo, socialMediaLinks } from '../data/mockData';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, Loader2 } from 'lucide-react';
import getSocialIcon from '../utils/getSocialIcon';

// Renders the contact form and social media links.
const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  // Handles form submission using the EmailJS service.
  const sendEmail = (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    // Hardcoded EmailJS credentials for client-side sending.
    const serviceID = "service_5swhafh";
    const templateID = "template_u2ynee3";
    const publicKey = "fPvdfcYMLEdH5T_YO";

    if (!serviceID || !templateID || !publicKey) {
      toast({ title: "❌ Configuration Error", description: "Email service is not configured correctly.", variant: "destructive" });
      setIsSending(false);
      return;
    }

    // Sends the form data and displays a success or error toast message.
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          toast({ title: "✅ Message Sent!", description: "Thanks for reaching out. I'll get back to you soon!" });
          e.target.reset();
      }, (error) => {
          toast({ title: "❌ Error", description: "Something went wrong. Please check your details and try again.", variant: "destructive" });
      })
      .finally(() => setIsSending(false));
  };


  return (
    <section id="contact" className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Information */}
          <div className="lg:sticky top-24">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {contactInfo.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Let's connect.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${contactInfo.email_address}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email_address}</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>
                  <a
                    href={`https://wa.me/${contactInfo.number.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {contactInfo.number}
                  </a>
                </span>
              </div>
            </div>
            <div className="mt-12 flex space-x-4">
              {Object.entries(socialMediaLinks).map(([platform, url]) => {
                if (platform === 'display' || !url || !['github', 'linkedin', 'twitter'].includes(platform)) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform}
                    className={`p-3 rounded-lg text-muted-foreground hover:text-foreground transition-colors duration-300 ease-in-out`}
                  >{getSocialIcon(platform, 'w-8 h-8')}</a>
                );
              })}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="p-8 lg:p-12 rounded-lg border border-border bg-card shadow-sm">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" name="from_name" placeholder="Your Name" required className="w-full p-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none transition-all" />
                <input type="email" name="from_email" placeholder="Your Email" required className="w-full p-3 bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none transition-all" />
              </div>
              <textarea name="message" placeholder="Your Message" rows="5" required className="w-full p-3 bg-muted/40 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:outline-none transition-all"></textarea>
              <Button type="submit" size="lg" className="w-full" disabled={isSending}>
                {isSending ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                ) : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;