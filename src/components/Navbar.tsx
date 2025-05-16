
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-primary">Portfolio</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8 text-base">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="fixed inset-0 flex flex-col items-center justify-center bg-background md:hidden space-y-8 text-xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Home</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
