import { NavLink } from "@/components/NavLink";
import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-12 h-12 gradient-brown rounded-xl flex items-center justify-center shadow-soft transition-premium group-hover:shadow-glow group-hover:scale-105">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
              Velora Café
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink
              to="/"
              end
              className="text-base font-medium text-muted-foreground hover:text-brown transition-smooth relative group"
              activeClassName="text-brown font-semibold"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-brown group-hover:w-full transition-premium" />
            </NavLink>
            <NavLink
              to="/menu"
              className="text-base font-medium text-muted-foreground hover:text-brown transition-smooth relative group"
              activeClassName="text-brown font-semibold"
            >
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-brown group-hover:w-full transition-premium" />
            </NavLink>
            <NavLink
              to="/gallery"
              className="text-base font-medium text-muted-foreground hover:text-brown transition-smooth relative group"
              activeClassName="text-brown font-semibold"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-brown group-hover:w-full transition-premium" />
            </NavLink>
            <NavLink
              to="/visit"
              className="text-base font-medium text-muted-foreground hover:text-brown transition-smooth relative group"
              activeClassName="text-brown font-semibold"
            >
              Visit Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-brown group-hover:w-full transition-premium" />
            </NavLink>
            <NavLink
              to="/heritage"
              className="text-base font-medium text-muted-foreground hover:text-brown transition-smooth relative group"
              activeClassName="text-brown font-semibold"
            >
              Our Heritage
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-brown group-hover:w-full transition-premium" />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-smooth"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                end
                className="text-base font-medium text-muted-foreground hover:text-brown transition-smooth py-2 px-4 rounded-lg hover:bg-muted"
                activeClassName="text-brown font-semibold bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/menu"
                className="text-base font-medium text-muted-foreground hover:text-brown transition-smooth py-2 px-4 rounded-lg hover:bg-muted"
                activeClassName="text-brown font-semibold bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </NavLink>
              <NavLink
                to="/gallery"
                className="text-base font-medium text-muted-foreground hover:text-brown transition-smooth py-2 px-4 rounded-lg hover:bg-muted"
                activeClassName="text-brown font-semibold bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/visit"
                className="text-base font-medium text-muted-foreground hover:text-brown transition-smooth py-2 px-4 rounded-lg hover:bg-muted"
                activeClassName="text-brown font-semibold bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Visit Us
              </NavLink>
              <NavLink
                to="/heritage"
                className="text-base font-medium text-muted-foreground hover:text-brown transition-smooth py-2 px-4 rounded-lg hover:bg-muted"
                activeClassName="text-brown font-semibold bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Heritage
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
