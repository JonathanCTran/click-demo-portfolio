
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <a 
            href="mailto:jonathactran92@gmail.com" 
            className="flex items-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border"
          >
            <div className="bg-primary/10 p-4 rounded-full mr-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Email</h3>
              <p className="text-muted-foreground">jonathactran92@gmail.com</p>
            </div>
          </a>
          
          {/* Phone */}
          <a 
            href="tel:2152818602" 
            className="flex items-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border"
          >
            <div className="bg-primary/10 p-4 rounded-full mr-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Phone</h3>
              <p className="text-muted-foreground">215-281-8602</p>
            </div>
          </a>
          
          {/* Location */}
          <div className="flex items-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border">
            <div className="bg-primary/10 p-4 rounded-full mr-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Location</h3>
              <p className="text-muted-foreground">Philadelphia, PA</p>
            </div>
          </div>
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/jonathanctran/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border"
          >
            <div className="bg-primary/10 p-4 rounded-full mr-4">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">LinkedIn</h3>
              <p className="text-muted-foreground">jonathanctran</p>
            </div>
          </a>
          
          {/* Resume */}
          <a 
            href="https://docs.google.com/document/d/1gEn7t0PjVAq1ysy8ibufRwV-_uebdQADr5qZmWPnwoY/export?format=pdf" 
            download="Jonathan_Tran_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer" 
            className="md:col-span-2 flex items-center justify-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border hover:bg-accent/10"
          >
            <div className="bg-accent/10 p-4 rounded-full mr-4">
              <FileText className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">My Resume</h3>
              <p className="text-muted-foreground">View or download my resume</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
