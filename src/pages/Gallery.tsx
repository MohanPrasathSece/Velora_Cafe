import { useState } from "react";
import { Heart, Camera, MapPin, Coffee, Cake, Utensils, Wine } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [likedImages, setLikedImages] = useState<number[]>([]);

  const categories = [
    { id: "all", name: "All Photos", icon: Camera },
    { id: "interior", name: "Interior", icon: Coffee },
    { id: "food", name: "Food & Drinks", icon: Utensils },
    { id: "desserts", name: "Desserts", icon: Cake },
    { id: "ambience", name: "Ambience", icon: Wine },
    { id: "spots", name: "Photo Spots", icon: MapPin },
  ];

  const galleryImages = [
    {
      id: 1,
      category: "interior",
      title: "Cozy Corner",
      description: "Perfect spot for morning coffee",
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop&auto=format",
    },
    {
      id: 2,
      category: "food",
      title: "Artisan Coffee",
      description: "Freshly brewed specialty coffee",
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&auto=format",
    },
    {
      id: 3,
      category: "spots",
      title: "Instagram Wall",
      description: "Our famous floral wall backdrop",
      url: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&h=600&fit=crop&auto=format",
    },
    {
      id: 4,
      category: "desserts",
      title: "Chocolate Delight",
      description: "Handcrafted chocolate cake",
      url: "https://images.unsplash.com/photo-1559363317-0a948bb3e713?w=800&h=600&fit=crop&auto=format",
    },
    {
      id: 5,
      category: "ambience",
      title: "Golden Hour",
      description: "Beautiful evening lighting",
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop&auto=format",
    },
    {
      id: 6,
      category: "interior",
      title: "Rustic Charm",
      description: "Wood accents and warm lighting",
      url: "https://images.unsplash.com/photo-1534751512449-277aff5c16e2?w=800&h=600&fit=crop&auto=format",
    },
    {
      id: 7,
      category: "food",
      title: "Gourmet Sandwich",
      description: "Fresh ingredients, perfect taste",
      url: "https://images.unsplash.com/photo-1555507031-1e8e629d985b?w=800&h=600&fit=crop&auto=format",
    },
    {
      id: 8,
      category: "spots",
      title: "Garden Seating",
      description: "Outdoor dining experience",
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop&auto=format",
    },
    {
      id: 9,
      category: "desserts",
      title: "Macaron Tower",
      description: "Colorful French macarons",
      url: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&h=600&fit=crop&auto=format",
    },
    {
      id: 10,
      category: "ambience",
      title: "Candle Light",
      description: "Romantic dinner setting",
      url: "https://images.unsplash.com/photo-1586987288744-e2ff08a6a4e2?w=800&h=600&fit=crop&auto=format",
    },
    {
      id: 11,
      category: "interior",
      title: "Coffee Bar",
      description: "Watch our baristas at work",
      url: "https://images.unsplash.com/photo-1572442388296-2a2d9a9333a8?w=800&h=600&fit=crop&auto=format",
    },
    {
      id: 12,
      category: "food",
      title: "Fresh Pastries",
      description: "Daily baked goods",
      url: "https://images.unsplash.com/photo-1555507031-1e8e629d985b?w=800&h=600&fit=crop&auto=format",
    },
    {
      id: 13,
      category: "spots",
      title: "Window Seat",
      description: "Perfect for people watching",
      url: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cda9?w=800&h=600&fit=crop&auto=format",
    },
    {
      id: 14,
      category: "desserts",
      title: "Tiramisu",
      description: "Classic Italian dessert",
      url: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop&auto=format",
    },
    {
      id: 15,
      category: "ambience",
      title: "Morning Vibes",
      description: "Start your day right",
      url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop&auto=format",
    },
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const toggleLike = (imageId: number) => {
    setLikedImages(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 gradient-warm relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-96 h-96 bg-coffee rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-coffee font-medium mb-4 tracking-wider uppercase text-sm animate-fade-in">
              Visual Journey
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 animate-fade-in">
              Gallery
            </h1>
            <div className="w-24 h-1 gradient-brown mx-auto rounded-full mb-10 animate-fade-in" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in">
              Explore our beautiful spaces and culinary creations through these captured moments
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-premium ${
                    selectedCategory === category.id
                      ? "gradient-brown text-white shadow-glow"
                      : "bg-muted text-muted-foreground hover:bg-brown hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-premium transition-premium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="aspect-w-4 aspect-h-3 relative h-80">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-premium group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-premium">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-serif font-bold mb-2">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(image.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-premium hover:scale-110"
                    aria-label="Like image"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedImages.includes(image.id)
                          ? "fill-current text-red-500"
                          : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brown text-white text-xs font-medium rounded-full">
                    {categories.find(c => c.id === image.category)?.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 gradient-warm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Visit Us and Create Your Own Memories
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the beauty of Velora Café in person. Every corner is picture-perfect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/visit"
                className="inline-flex items-center justify-center px-8 py-3 gradient-brown text-white rounded-xl font-medium hover:shadow-glow transition-premium hover:scale-105"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
              <a
                href="/menu"
                className="inline-flex items-center justify-center px-8 py-3 bg-coffee text-white rounded-xl font-medium hover:shadow-glow transition-premium hover:scale-105"
              >
                <Utensils className="w-5 h-5 mr-2" />
                View Menu
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
