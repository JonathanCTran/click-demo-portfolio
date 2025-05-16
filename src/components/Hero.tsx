
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container">
        <div className="md:max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            I create beautiful and functional web applications.
            Take a look at my featured projects below.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
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
