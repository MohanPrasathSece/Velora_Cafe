import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cream border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Velora Café</h3>
            <p className="text-muted-foreground">
              Where luxury meets flavor. Experience premium coffee and artisanal pastries in an elegant ambience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/" className="hover:text-rosegold transition-premium">
                  Home
                </a>
              </li>
              <li>
                <a href="/heritage" className="hover:text-brown transition-smooth">
                  Our Heritage
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:text-brown transition-smooth">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="/visit" className="hover:text-brown transition-smooth">
                  Visit Us
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-brown transition-smooth">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-xl gradient-brown flex items-center justify-center text-white hover:shadow-glow transition-premium hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl gradient-coffee flex items-center justify-center text-foreground hover:shadow-glow transition-premium hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl gradient-brown flex items-center justify-center text-white hover:shadow-glow transition-premium hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Velora Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
