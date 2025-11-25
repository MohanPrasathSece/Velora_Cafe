import { useState, useRef } from "react";
import { Heart, Camera, MapPin, Coffee, Cake, Utensils, Wine } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [likedImages, setLikedImages] = useState<number[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "all", name: "All Photos", icon: Camera },
    { id: "food", name: "Food & Drinks", icon: Utensils },
    { id: "desserts", name: "Desserts", icon: Cake },
    { id: "interior", name: "Interior", icon: Coffee },
    { id: "ambience", name: "Ambience", icon: Wine },
    { id: "spots", name: "Photo Spots", icon: MapPin },
  ];

  const galleryImages = [
    // Food & Drinks (5 images) - Strictly Close-ups of Drinks/Food
    {
      id: 1,
      category: "food",
      title: "Latte Art Close-up",
      description: "Perfectly poured rosetta",
      url: "/images/food/velora_latte.jpg",
    },
    {
      id: 2,
      category: "food",
      title: "Iced Coffee Detail",
      description: "Refreshing cold brew with ice",
      url: "/images/food/speciality_drinks.jpg",
    },
    {
      id: 3,
      category: "food",
      title: "Espresso Shot",
      description: "Rich crema and bold flavor",
      url: "/images/food/signature_latte.jpg",
    },
    {
      id: 4,
      category: "food",
      title: "Pour Over Brewing",
      description: "Manual brewing process",
      url: "/images/food/flat_white.jpg",
    },
    {
      id: 5,
      category: "food",
      title: "Cappuccino",
      description: "Fresh and creamy",
      url: "/images/food/capucina.jpg",
    },

    // Desserts (5 images) - Strictly Close-ups of Sweets
    {
      id: 6,
      category: "desserts",
      title: "Chocolate Cake Slice",
      description: "Decadent layers of chocolate",
      url: "/images/food/choco_lava.jpg",
    },
    {
      id: 7,
      category: "desserts",
      title: "Macarons Box",
      description: "Colorful sweet treats",
      url: "/images/food/pexels-soc-nang-d-ng-2150345854-34810078.jpg",
    },
    {
      id: 8,
      category: "desserts",
      title: "Tiramisu Plate",
      description: "Classic Italian dessert",
      url: "/images/food/pexels-zeynep-merve-kilic-cakir-76946886-34889845.jpg",
    },
    {
      id: 9,
      category: "desserts",
      title: "Cheesecake",
      description: "Creamy and smooth",
      url: "/images/food/cheecake.jpg",
    },
    {
      id: 10,
      category: "desserts",
      title: "Fruit Tart",
      description: "Fresh seasonal fruits",
      url: "/images/food/cinnamon.jpg",
    },

    // Interior (5 images) - Wide Shots of Space, Furniture
    {
      id: 11,
      category: "interior",
      title: "Main Seating Hall",
      description: "Spacious interior view",
      url: "/images/cafe/pexels-fotios-photos-776538.jpg",
    },
    {
      id: 12,
      category: "interior",
      title: "Coffee Bar Counter",
      description: "Professional espresso machine setup",
      url: "/images/cafe/pexels-fotios-photos-2193600.jpg",
    },
    {
      id: 13,
      category: "interior",
      title: "Wooden Furniture",
      description: "Rustic table details",
      url: "/images/cafe/pexels-haleyve-3968056.jpg",
    },
    {
      id: 14,
      category: "interior",
      title: "Modern Decor",
      description: "Contemporary design elements",
      url: "/images/cafe/pexels-fineasanton-2993065.jpg",
    },
    {
      id: 15,
      category: "interior",
      title: "Cozy Corner",
      description: "Comfortable armchairs",
      url: "/images/cafe/pexels-mehmet-34885414.jpg",
    },

    // Ambience (5 images) - Lighting, Mood, Blur
    {
      id: 16,
      category: "ambience",
      title: "Warm Lighting",
      description: "Soft evening glow",
      url: "/images/cafe/tony-lee-8IKf54pc3qk-unsplash.jpg",
    },
    {
      id: 17,
      category: "ambience",
      title: "Cafe Atmosphere",
      description: "Busy and lively vibes",
      url: "/images/cafe/pexels-abeysaksham-31774132.jpg",
    },
    {
      id: 18,
      category: "ambience",
      title: "Rainy Day Mood",
      description: "Cozy shelter from rain",
      url: "/images/cafe/pexels-apgpotr-683039.jpg",
    },
    {
      id: 19,
      category: "ambience",
      title: "Sunlight Shadows",
      description: "Natural light play",
      url: "/images/cafe/roman-bozhko-OXXsAafHDeo-unsplash.jpg",
    },
    {
      id: 20,
      category: "ambience",
      title: "Evening Vibes",
      description: "Romantic night setting",
      url: "/images/cafe/pexels-nida-kurt-5079840-8765830.jpg",
    },

    // Photo Spots (5 images) - Specific Instagrammable Locations
    {
      id: 21,
      category: "spots",
      title: "The Window Seat",
      description: "Best view in the house",
      url: "/images/cafe/pexels-daven-hsu-5766928-34791601.jpg",
    },
    {
      id: 22,
      category: "spots",
      title: "Green Wall",
      description: "Vertical garden backdrop",
      url: "/images/cafe/celine-ylmz-L2ost-ZEmK8-unsplash.jpg",
    },
    {
      id: 23,
      category: "spots",
      title: "Outdoor Patio",
      description: "Sunny terrace spot",
      url: "/images/cafe/pexels-abeysaksham-31774133.jpg",
    },
    {
      id: 24,
      category: "spots",
      title: "Neon Sign Wall",
      description: "Popular photo background",
      url: "/images/cafe/kris-atomic-3b2tADGAWnU-unsplash.jpg",
    },
    {
      id: 25,
      category: "spots",
      title: "Vintage Mirror",
      description: "Perfect for selfies",
      url: "/images/cafe/tomas-jasovsky-d5SZqLkpIrY-unsplash.jpg",
    },
  ];

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Scroll to gallery section smoothly
    galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
      <section className="py-24 md:py-32 bg-brown-lighter relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-96 h-96 bg-brown rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-brown font-medium mb-4 tracking-wider uppercase text-sm animate-fade-in">
              Visual Journey
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 animate-fade-in text-brown">
              Gallery
            </h1>
            <div className="w-24 h-1 bg-brown mx-auto rounded-full mb-10 animate-fade-in" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in">
              Explore our beautiful spaces and culinary creations through these captured moments
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 md:py-8 bg-background sticky top-20 z-40 border-b border-brown/20">
        <div className="container mx-auto px-4">
          <div className="flex md:flex-wrap justify-start md:justify-center gap-3 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full transition-normal whitespace-nowrap ${selectedCategory === category.id
                    ? "bg-brown text-white shadow-soft"
                    : "bg-muted text-muted-foreground hover:bg-brown hover:text-white"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium text-sm md:text-base">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={galleryRef} className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />

                  {/* Overlay - only appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-serif font-bold mb-2">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(image.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    aria-label="Like image"
                  >
                    <Heart
                      className={`w-5 h-5 ${likedImages.includes(image.id)
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
      <section className="py-24 bg-brown-lighter">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brown">
              Visit Us and Create Your Own Memories
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the beauty of Velora Café in person. Every corner is picture-perfect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/visit"
                className="inline-flex items-center justify-center px-8 py-3 bg-brown text-white rounded-lg font-medium hover:shadow-hover transition-normal hover:scale-105"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
              <a
                href="/menu"
                className="inline-flex items-center justify-center px-8 py-3 bg-brown text-white rounded-lg font-medium hover:shadow-hover transition-normal hover:scale-105"
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
