import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Heart, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=1080&fit=crop&auto=format"
            alt="Luxury modern café interior with premium espresso machine and marble countertops"
            className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50/40 to-orange-50/40" />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-amber-100/80 to-orange-100/80 backdrop-blur-sm rounded-full border border-amber-200/50 animate-fade-in">
            <p className="text-sm font-medium text-amber-800 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Premium Coffee Experience
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-amber-900 animate-fade-in leading-tight">
            Where Luxury Meets Flavor
          </h1>
          <p className="text-xl md:text-2xl text-amber-700/90 mb-10 animate-fade-in max-w-2xl mx-auto">
            Experience the finest selection of specialty coffee and artisanal pastries in an atmosphere of refined elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="premium" size="lg" onClick={() => navigate("/menu")} className="group">
              Explore Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero" size="lg" onClick={() => navigate("/heritage")}>
              Our Heritage
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-300/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-amber-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Menu Highlights */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-medium mb-4 tracking-wider uppercase text-sm">Handcrafted Excellence</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-amber-900">Featured Selections</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-premium transition-premium mb-6 hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&auto=format"
                  alt="Artisanal latte with perfect latte art in white porcelain cup"
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-premium duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-premium" />
                <div className="absolute top-4 right-4 w-14 h-14 gradient-brown rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-glow group-hover:scale-110 transition-premium">
                  <Coffee className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-semibold mb-3 group-hover:text-brown transition-smooth">
                Signature Latte
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Handcrafted with premium beans and artistic precision, creating the perfect harmony of flavor
              </p>
            </article>

            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-premium transition-premium mb-6 hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1549961316-3d8382b6c4e4?w=800&h=600&fit=crop&auto=format"
                  alt="Artisanal chocolate croissants and pastries on marble countertop"
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-premium duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/20 to-transparent opacity-0 group-hover:opacity-100 transition-premium" />
                <div className="absolute top-4 right-4 w-14 h-14 gradient-coffee rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-glow group-hover:scale-110 transition-premium">
                  <Heart className="w-7 h-7 text-foreground" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-semibold mb-3 group-hover:text-coffee transition-smooth">
                Artisan Pastries
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Freshly baked daily using traditional techniques and the finest ingredients
              </p>
            </article>

            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-premium transition-premium mb-6 hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=600&fit=crop&auto=format"
                  alt="Artisanal iced coffee with latte art and caramel drizzle"
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-premium duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-premium" />
                <div className="absolute top-4 right-4 w-14 h-14 gradient-brown rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-glow group-hover:scale-110 transition-premium">
                  <Star className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-semibold mb-3 group-hover:text-brown transition-smooth">
                Specialty Drinks
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Innovative beverages crafted to perfection with unique flavor profiles
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Story Preview */}
      <section className="py-24 md:py-32 gradient-warm relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brown rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-coffee rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-coffee font-medium mb-4 tracking-wider uppercase text-sm">Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8">The Velora Experience</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              At Velora Café, we believe that exceptional coffee is an art form. Our carefully curated selection of
              premium beans, combined with expert craftsmanship and an elegant ambience, creates an unforgettable
              experience for coffee connoisseurs and casual enthusiasts alike.
            </p>
            <Button variant="premium" size="lg" onClick={() => navigate("/heritage")} className="group">
              Discover Our Heritage
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
