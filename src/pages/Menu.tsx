import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const menuItems = {
  coffee: [
    {
      name: "Signature Espresso",
      description: "Rich, full-bodied espresso from Ethiopian single-origin beans",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&auto=format",
      featured: true,
    },
    {
      name: "Velora Latte",
      description: "Silky smooth latte with perfect microfoam and artistic presentation",
      price: "₹220",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&h=600&fit=crop&auto=format",
      featured: true,
    },
    {
      name: "Flat White",
      description: "Velvety espresso with steamed milk, Australian-style perfection",
      price: "₹200",
      image: "https://images.unsplash.com/photo-1534751512449-277aff5c16e2?w=800&h=600&fit=crop&auto=format",
      featured: false,
    },
    {
      name: "Cappuccino",
      description: "Classic Italian cappuccino with rich foam and cocoa dusting",
      price: "₹190",
      image: "https://images.unsplash.com/photo-1572442388296-2a2d9a9333a8?w=800&h=600&fit=crop&auto=format",
      featured: false,
    },
    {
      name: "Americano",
      description: "Smooth espresso with hot water, bold and refreshing",
      price: "₹160",
      image: "https://images.unsplash.com/photo-1589388614508-5414c50fd8b6?w=800&h=600&fit=crop&auto=format",
      featured: false,
    },
    {
      name: "Mocha",
      description: "Espresso with steamed milk and rich chocolate syrup",
      price: "₹230",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=600&fit=crop&auto=format",
      featured: true,
    },
  ],
  pastries: [
    {
      name: "French Croissant",
      description: "Buttery, flaky croissant baked fresh daily with French technique",
      price: "₹160",
      image: "https://images.unsplash.com/photo-1555507031-1e8e629d985b?w=800&h=600&fit=crop&auto=format",
      featured: false,
    },
    {
      name: "Pain au Chocolat",
      description: "Artisanal chocolate croissant with premium dark chocolate",
      price: "₹260",
      image: "https://images.unsplash.com/photo-1549961316-3d8382b6c4e4?w=800&h=600&fit=crop&auto=format",
      featured: true,
    },
    {
      name: "French Macarons",
      description: "Delicate almond macarons in assorted premium flavors",
      price: "₹220",
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&h=600&fit=crop&auto=format",
      featured: true,
    },
    {
      name: "Cinnamon Roll",
      description: "Warm cinnamon roll with cream cheese frosting",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1586987288744-e2ff08a6a4e2?w=800&h=600&fit=crop&auto=format",
      featured: false,
    },
    {
      name: "Blueberry Muffin",
      description: "Fresh blueberry muffin with streusel topping",
      price: "₹150",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e10476c?w=800&h=600&fit=crop&auto=format",
      featured: false,
    },
  ],
  drinks: [
    {
      name: "Brown Velvet Latte",
      description: "Signature iced latte with caramel and vanilla, house specialty",
      price: "₹260",
      image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cda9?w=800&h=600&fit=crop&auto=format",
      featured: true,
    },
    {
      name: "Cold Brew Reserve",
      description: "24-hour cold brew with smooth, naturally sweet flavor notes",
      price: "₹240",
      image: "https://images.unsplash.com/photo-1598326995673-053c513df79b?w=800&h=600&fit=crop&auto=format",
      featured: false,
    },
    {
      name: "Affogato Elegance",
      description: "Vanilla gelato drowned in premium espresso, Italian classic",
      price: "₹300",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop&auto=format",
      featured: true,
    },
    {
      name: "Iced Caramel Macchiato",
      description: "Espresso, vanilla syrup, milk and caramel drizzle over ice",
      price: "₹250",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&h=600&fit=crop&auto=format",
      featured: false,
    },
  ],
  sandwiches: [
    {
      name: "Club Supreme",
      description: "Triple-decker with turkey, bacon, lettuce, tomato and mayo",
      price: "₹320",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop&auto=format",
      featured: true,
    },
    {
      name: "Veggie Delight",
      description: "Grilled vegetables, hummus, and fresh greens on multigrain",
      price: "₹280",
      image: "https://images.unsplash.com/photo-1465189684280-6a8fa9b19c7c?w=800&h=600&fit=crop&auto=format",
      featured: false,
    },
    {
      name: "Panini Classico",
      description: "Grilled panini with mozzarella, tomato and basil pesto",
      price: "₹260",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop&auto=format",
      featured: false,
    },
  ],
  desserts: [
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center and vanilla ice cream",
      price: "₹350",
      image: "https://images.unsplash.com/photo-1559363317-0a948bb3e713?w=800&h=600&fit=crop&auto=format",
      featured: true,
    },
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with espresso-soaked ladyfingers",
      price: "₹300",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop&auto=format",
      featured: true,
    },
    {
      name: "Cheesecake New York",
      description: "Creamy New York style cheesecake with berry compote",
      price: "₹280",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop&auto=format",
      featured: false,
    },
  ],
};

const Menu = () => {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 gradient-warm relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-brown rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-coffee rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-coffee font-medium mb-4 tracking-wider uppercase text-sm animate-fade-in">
              Handcrafted Selection
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 animate-fade-in">Our Menu</h1>
            <div className="w-24 h-1 gradient-brown mx-auto rounded-full mb-10 animate-fade-in" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in">
              Discover our carefully curated selection of premium beverages and artisanal treats
            </p>
          </div>
        </div>
      </section>

      {/* Coffee Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-coffee font-medium mb-4 tracking-wider uppercase text-sm">Premium</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Specialty Coffee</h2>
            <div className="w-20 h-1 gradient-brown mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {menuItems.coffee.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-brown/20 hover:border-brown transition-premium shadow-card hover:shadow-premium group hover-lift"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-premium duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-premium" />
                  {item.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 gradient-coffee rounded-full flex items-center gap-1.5 shadow-soft">
                      <Sparkles className="w-3.5 h-3.5 text-foreground" />
                      <span className="text-xs font-semibold text-foreground">Featured</span>
                    </div>
                  )}
                </div>
                <div className="p-6 lg:p-7">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl lg:text-2xl font-serif font-semibold group-hover:text-brown transition-smooth">
                      {item.name}
                    </h3>
                    <span className="text-brown font-bold text-xl">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pastries Section */}
      <section className="py-24 md:py-32 gradient-warm">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-coffee font-medium mb-4 tracking-wider uppercase text-sm">Fresh Daily</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Artisan Pastries</h2>
            <div className="w-20 h-1 gradient-coffee mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {menuItems.pastries.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-coffee/20 hover:border-coffee transition-premium shadow-card hover:shadow-premium bg-background group hover-lift"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-premium duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-premium" />
                  {item.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 gradient-brown rounded-full flex items-center gap-1.5 shadow-soft">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                      <span className="text-xs font-semibold text-white">Featured</span>
                    </div>
                  )}
                </div>
                <div className="p-6 lg:p-7">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl lg:text-2xl font-serif font-semibold group-hover:text-coffee transition-smooth">
                      {item.name}
                    </h3>
                    <span className="text-coffee font-bold text-xl">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Drinks Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-coffee font-medium mb-4 tracking-wider uppercase text-sm">Exclusive</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Signature Drinks</h2>
            <div className="w-20 h-1 gradient-brown mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {menuItems.drinks.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-brown/20 hover:border-brown transition-premium shadow-card hover:shadow-premium group hover-lift"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-premium duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-premium" />
                  {item.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 gradient-coffee rounded-full flex items-center gap-1.5 shadow-soft">
                      <Sparkles className="w-3.5 h-3.5 text-foreground" />
                      <span className="text-xs font-semibold text-foreground">Featured</span>
                    </div>
                  )}
                </div>
                <div className="p-6 lg:p-7">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl lg:text-2xl font-serif font-semibold group-hover:text-brown transition-smooth">
                      {item.name}
                    </h3>
                    <span className="text-brown font-bold text-xl">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sandwiches Section */}
      <section className="py-24 md:py-32 gradient-warm">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-coffee font-medium mb-4 tracking-wider uppercase text-sm">Fresh Made</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Gourmet Sandwiches</h2>
            <div className="w-20 h-1 gradient-brown mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {menuItems.sandwiches.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-brown/20 hover:border-brown transition-premium shadow-card hover:shadow-premium bg-background group hover-lift"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-premium duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-premium" />
                  {item.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 gradient-coffee rounded-full flex items-center gap-1.5 shadow-soft">
                      <Sparkles className="w-3.5 h-3.5 text-foreground" />
                      <span className="text-xs font-semibold text-foreground">Featured</span>
                    </div>
                  )}
                </div>
                <div className="p-6 lg:p-7">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl lg:text-2xl font-serif font-semibold group-hover:text-brown transition-smooth">
                      {item.name}
                    </h3>
                    <span className="text-brown font-bold text-xl">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Desserts Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-coffee font-medium mb-4 tracking-wider uppercase text-sm">Sweet Endings</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Decadent Desserts</h2>
            <div className="w-20 h-1 gradient-coffee mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {menuItems.desserts.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-coffee/20 hover:border-coffee transition-premium shadow-card hover:shadow-premium group hover-lift"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-premium duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-premium" />
                  {item.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 gradient-brown rounded-full flex items-center gap-1.5 shadow-soft">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                      <span className="text-xs font-semibold text-white">Featured</span>
                    </div>
                  )}
                </div>
                <div className="p-6 lg:p-7">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl lg:text-2xl font-serif font-semibold group-hover:text-coffee transition-smooth">
                      {item.name}
                    </h3>
                    <span className="text-coffee font-bold text-xl">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
