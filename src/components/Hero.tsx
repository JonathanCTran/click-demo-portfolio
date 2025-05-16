
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 animate-fade-in">
            <div className="rounded-full overflow-hidden border-4 border-primary/20 shadow-xl max-w-[280px] mx-auto">
              <AspectRatio ratio={1/1}>
                <img 
                  src="/lovable-uploads/765b48c0-cca3-4e4f-b354-0113c28e76be.png" 
                  alt="Jonathan Tran" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Jonathan</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              I create beautiful and functional web applications.
              Take a look at my featured projects below.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-outline">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="hidden md:block absolute top-20 right-0 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
      <div className="hidden md:block absolute bottom-20 left-0 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
