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
            src="/images/cafe/Gemini_Generated_Image_owf0cowf0cowf0co.jpg"
            alt="Velora Café - Premium cafe with stunning ambience"
            className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite]"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-brown/30 via-black/20 to-brown-dark/40" />
        </div>

        <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
          <div className="hidden md:inline-block mb-6 px-6 py-2 bg-white/95 backdrop-blur-sm rounded-lg border-2 border-brown/30 animate-fade-in shadow-soft">
            <p className="text-xs md:text-sm font-medium text-brown flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Premium Coffee Experience
            </p>
          </div>
          <h1 className="text-3xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-white animate-fade-in leading-tight drop-shadow-2xl">
            Where Luxury Meets Flavor
          </h1>
          <p className="text-base md:text-2xl text-white/95 mb-10 animate-fade-in max-w-2xl mx-auto drop-shadow-lg">
            Experience the finest selection of specialty coffee and artisanal pastries in an atmosphere of refined elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="default" size="lg" onClick={() => navigate("/menu")} className="group px-6 md:px-8">
              Explore Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/heritage")} className="px-6 md:px-8">
              Our Story
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Menu Highlights */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-brown font-medium mb-4 tracking-wider uppercase text-sm">Handcrafted Excellence</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-brown">Featured Selections</h2>
            <div className="w-24 h-1 bg-brown mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-card hover:shadow-hover transition-normal mb-6 hover-lift border border-brown/10">
                <img
                  src="/images/food/velora_latte.jpg"
                  alt="Artisanal latte with perfect latte art in white porcelain cup"
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-normal" />
                <div className="absolute top-4 right-4 w-14 h-14 bg-brown rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-hover group-hover:scale-110 transition-normal">
                  <Coffee className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-semibold mb-3 group-hover:text-brown transition-normal">
                Signature Latte
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Handcrafted with premium beans and artistic precision, creating the perfect harmony of flavor
              </p>
            </article>

            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded shadow-card hover:shadow-vintage transition-vintage mb-6 hover-lift-vintage border-2 border-antique-gold/10">
                <img
                  src="/images/food/artesian_pastries.jpg"
                  alt="Artisanal chocolate croissants and pastries on marble countertop"
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700 sepia-filter"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-antique-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-vintage" />
                <div className="absolute top-4 right-4 w-14 h-14 gradient-gold rounded flex items-center justify-center shadow-ornate group-hover:shadow-glow-gold group-hover:scale-110 transition-vintage border border-antique-gold/40">
                  <Heart className="w-7 h-7 text-sepia" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-semibold mb-3 group-hover:text-antique-gold transition-elegant">
                Artisan Pastries
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Freshly baked daily using traditional techniques and the finest ingredients
              </p>
            </article>

            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded shadow-card hover:shadow-vintage transition-vintage mb-6 hover-lift-vintage border-2 border-burgundy/10">
                <img
                  src="/images/food/speciality_drinks.jpg"
                  alt="Artisanal iced coffee with latte art and caramel drizzle"
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700 sepia-filter"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/20 to-transparent opacity-0 group-hover:opacity-100 transition-vintage" />
                <div className="absolute top-4 right-4 w-14 h-14 gradient-burgundy rounded flex items-center justify-center shadow-ornate group-hover:shadow-glow-gold group-hover:scale-110 transition-vintage border border-burgundy-dark/30">
                  <Star className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-semibold mb-3 group-hover:text-burgundy transition-elegant">
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
      <section className="py-24 md:py-32 bg-brown-lighter relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brown rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brown-dark rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-brown font-medium mb-4 tracking-wider uppercase text-sm">Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-brown">The Velora Experience</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              At Velora Café, we believe that exceptional coffee is an art form. Our carefully curated selection of
              premium beans, combined with expert craftsmanship and an elegant ambience, creates an unforgettable
              experience for coffee connoisseurs and casual enthusiasts alike.
            </p>
            <Button variant="default" size="lg" onClick={() => navigate("/heritage")} className="group">
              Discover Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
