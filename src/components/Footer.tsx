import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brown-lighter border-t border-brown/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-8 items-start">
          {/* Column 1 - About */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-serif font-semibold text-brown">Velora Café</h3>
            <p className="text-muted-foreground leading-relaxed">
              Where luxury meets flavor. Experience premium coffee and artisanal pastries in an elegant ambience.
            </p>
          </div>

          {/* Column 2 - Quick Links (Center) */}
          <div className="flex flex-col space-y-4 md:items-center md:text-center">
            <h4 className="text-xl font-semibold text-brown">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="/" className="hover:text-brown transition-normal inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="/heritage" className="hover:text-brown transition-normal inline-block">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:text-brown transition-normal inline-block">
                  Menu
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-brown transition-normal inline-block">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/visit" className="hover:text-brown transition-normal inline-block">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media (Right) */}
          <div className="flex flex-col space-y-4 md:items-end">
            <h4 className="text-xl font-semibold text-brown">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-brown flex items-center justify-center text-white hover:shadow-hover transition-normal hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-brown flex items-center justify-center text-white hover:shadow-hover transition-normal hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-brown flex items-center justify-center text-white hover:shadow-hover transition-normal hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brown/20 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Velora Café. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">
            Created by <a href="https://www.zyradigitals.info/" target="_blank" rel="noopener noreferrer" className="hover:text-brown transition-colors">Zyra Digitals</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
