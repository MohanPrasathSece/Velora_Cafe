import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const VisitUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours. Thank you for reaching out!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-brown-lighter relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-brown rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brown font-medium mb-4 tracking-wider uppercase text-sm animate-fade-in">Connect</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 animate-fade-in text-brown">Visit Us</h1>
            <div className="w-24 h-1 bg-brown mx-auto rounded-full mb-10 animate-fade-in" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in">
              We'd love to welcome you. Visit our café or send us a message.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-card hover:shadow-hover transition-normal border border-brown/10">
              <p className="text-brown font-medium mb-2 tracking-wider uppercase text-sm">Get in Touch</p>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8 text-brown">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium mb-2 block text-brown">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 rounded-xl border-brown/20 focus:border-brown transition-normal"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium mb-2 block text-brown">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 rounded-xl border-brown/20 focus:border-brown transition-normal"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base font-medium mb-2 block text-brown">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-36 rounded-xl border-brown/20 focus:border-brown resize-none transition-normal"
                  />
                </div>

                <Button type="submit" className="w-full bg-brown text-white hover:bg-brown/90 h-12 text-lg shadow-soft hover:shadow-hover transition-normal">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-brown font-medium mb-2 tracking-wider uppercase text-sm">Contact Information</p>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8 text-brown">Find Us Here</h2>
                <div className="space-y-6">
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-brown rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-hover transition-normal group-hover:scale-110">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1.5 text-lg text-brown group-hover:text-brown/80 transition-normal">
                        Our Location
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Velora Café, Calangute Beach Road
                        <br />
                        North Goa, 403516, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-brown-lighter rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-hover transition-normal group-hover:scale-110">
                      <Phone className="w-6 h-6 text-brown" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1.5 text-lg text-brown group-hover:text-brown/80 transition-normal">Phone</h3>
                      <p className="text-muted-foreground">+91 9025421149</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-brown rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-hover transition-normal group-hover:scale-110">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1.5 text-lg text-brown group-hover:text-brown/80 transition-normal">Email</h3>
                      <p className="text-muted-foreground">hello@veloracafe.com</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 bg-brown-lighter rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-hover transition-normal group-hover:scale-110">
                      <Clock className="w-6 h-6 text-brown" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1.5 text-lg text-brown group-hover:text-brown/80 transition-normal">
                        Opening Hours
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Monday - Friday: 7:00 AM - 8:00 PM
                        <br />
                        Saturday - Sunday: 8:00 AM - 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-brown/10">
                <h3 className="font-semibold mb-6 text-lg text-brown">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-14 h-14 rounded-2xl bg-brown flex items-center justify-center text-white hover:shadow-hover transition-normal hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-14 h-14 rounded-2xl bg-brown-lighter flex items-center justify-center text-brown hover:shadow-hover transition-normal hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-14 h-14 rounded-2xl bg-brown flex items-center justify-center text-white hover:shadow-hover transition-normal hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-24 md:py-32 bg-brown-lighter">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-card h-96 md:h-[500px] border border-brown/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.682469257763!2d73.7594923148511!3d15.543069089208124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMyJzM1LjAiTiA3M8KwNDUnNDIuMiJF!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Velora Cafe Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VisitUs;
