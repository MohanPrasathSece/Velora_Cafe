const Heritage = () => {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 gradient-warm relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-96 h-96 bg-brown rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-coffee font-medium mb-4 tracking-wider uppercase text-sm animate-fade-in">Discover</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 animate-fade-in">Our Story</h1>
            <div className="w-24 h-1 gradient-brown mx-auto rounded-full mb-10 animate-fade-in" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in">
              A journey of passion, craftsmanship, and the pursuit of coffee perfection
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
            <div className="order-2 lg:order-1">
              <p className="text-coffee font-medium mb-4 tracking-wider uppercase text-sm">Origins</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Beginning</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Velora Café was born from a simple yet profound vision: to create a sanctuary where luxury meets the
                  timeless ritual of coffee. Our founders, inspired by the elegant cafés of Milan and Paris, sought to
                  bring that same sophistication and warmth to our community.
                </p>
                <p>
                  From the carefully selected marble countertops to the brown and coffee accents that grace our space,
                  every detail has been thoughtfully curated to create an ambience of refined comfort and understated
                  elegance.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-premium hover-lift h-64 lg:h-80">
              <img
                src="/images/cafe/pexels-mehmet-34885414.jpg"
                alt="Luxury café interior with comfortable beige seating and elegant design"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-premium duration-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-premium hover-lift h-64 lg:h-80">
              <img
                src="/images/food/velora_latte.jpg"
                alt="Premium espresso being poured into white cup with artistic precision"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-premium duration-700"
              />
            </div>
            <div>
              <p className="text-coffee font-medium mb-4 tracking-wider uppercase text-sm">Philosophy</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Coffee Philosophy</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  At Velora Café, we believe that exceptional coffee begins with exceptional beans. We source only the
                  finest single-origin coffees from sustainable farms around the world, each selected for its unique
                  flavor profile and character.
                </p>
                <p>
                  Our master baristas bring years of expertise to every cup, combining traditional techniques with
                  innovative methods to create beverages that are as beautiful as they are delicious.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 gradient-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-coffee font-medium mb-4 tracking-wider uppercase text-sm">Our Purpose</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <article className="bg-background rounded-2xl p-8 lg:p-10 shadow-card hover:shadow-premium transition-premium group hover-lift">
              <div className="w-20 h-20 gradient-brown rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:shadow-glow transition-premium">
                <span className="text-3xl text-white font-serif font-bold">M</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4 group-hover:text-brown transition-smooth">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To craft exceptional coffee experiences that elevate the everyday. We are committed to quality,
                sustainability, and creating a welcoming space where every guest feels valued and inspired.
              </p>
            </article>

            <article className="bg-background rounded-2xl p-8 lg:p-10 shadow-card hover:shadow-premium transition-premium group hover-lift">
              <div className="w-20 h-20 gradient-coffee rounded-2xl flex items-center justify-center mb-6 shadow-soft group-hover:shadow-glow transition-premium">
                <span className="text-3xl text-foreground font-serif font-bold">V</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4 group-hover:text-coffee transition-smooth">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be recognized as the premier destination for luxury coffee experiences, where artistry meets
                hospitality, and where every visit becomes a cherished memory.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-coffee font-medium mb-4 tracking-wider uppercase text-sm">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Meet Our Founder</h2>
            <div className="w-24 h-1 gradient-brown mx-auto rounded-full mb-12" />
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                <span className="font-serif text-3xl text-brown block mb-2">Isabella Martinez</span>
                <span className="text-coffee text-sm tracking-wider uppercase">Founder & Creative Director</span>
              </p>
              <p className="mt-6">
                Isabella brings over 15 years of experience in the specialty coffee industry. Her journey began as a
                barista in Barcelona, where she fell in love with the art and science of coffee making.
              </p>
              <p>
                After training with master roasters across Europe and Asia, Isabella returned with a vision to create a
                café that embodied the perfect balance of luxury, quality, and warmth. Today, she continues to oversee
                every aspect of Velora's operations, ensuring that each guest receives an exceptional experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Heritage;
