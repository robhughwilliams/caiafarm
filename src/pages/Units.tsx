import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Units = () => {
  const units = [
    {
      id: 1,
      name: "Unit 1 - The Corner Office",
      size: "500 sq ft",
      shortDescription: "Perfect corner unit with maximum natural light",
      monthlyRate: "£800",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"
      ],
      rating: 4.9,
      features: ["Corner position", "Large windows", "Easy vehicle access"]
    },
    {
      id: 2,
      name: "Unit 2 - The Bright Side",
      size: "450 sq ft",
      shortDescription: "South-facing unit with excellent natural light",
      monthlyRate: "£750",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop"
      ],
      rating: 4.8,
      features: ["South-facing", "All-day sunlight", "Good insulation"]
    },
    {
      id: 3,
      name: "Unit 3 - The Social Hub",
      size: "475 sq ft",
      shortDescription: "Central location perfect for collaboration",
      monthlyRate: "£775",
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop"
      ],
      rating: 4.7,
      features: ["Central location", "Good connectivity", "Climate controlled"]
    },
    {
      id: 4,
      name: "Unit 4 - The Collaborator",
      size: "425 sq ft",
      shortDescription: "Perfect for expanding businesses",
      monthlyRate: "£725",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
      ],
      rating: 4.6,
      features: ["Adjacent to Unit 3", "Expandable option", "Modern fixtures"]
    },
    {
      id: 5,
      name: "Unit 5 - The Quiet Achiever",
      size: "460 sq ft",
      shortDescription: "Peaceful end unit for focused work",
      monthlyRate: "£760",
      images: [
        "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop"
      ],
      rating: 4.9,
      features: ["Quiet location", "Sound insulated", "Private atmosphere"]
    },
    {
      id: 6,
      name: "Unit 6 - The Independent",
      size: "480 sq ft",
      shortDescription: "Most private unit with separate entrance",
      monthlyRate: "£800",
      images: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=300&fit=crop"
      ],
      rating: 5.0,
      features: ["Separate entrance", "Maximum privacy", "End position"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="py-12 px-4 border-b" style={{ backgroundColor: '#b1d3ef' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm mb-4" style={{ color: '#5f6360' }}>
            <MapPin className="h-4 w-4" />
            <span>Caia Farm, North Wales</span>
          </div>
          <h1 className="text-3xl font-semibold mb-2" style={{ color: '#507e37' }}>
            Office and Storage Units Available from October 2025
          </h1>
          <p style={{ color: '#5f6360' }}>
            6 unique units in a converted barn • Flexible rental options • Countryside location
          </p>
        </div>
      </section>

      {/* Units Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.map((unit) => (
              <Card 
                key={unit.id} 
                className="border-0 shadow-md cursor-pointer group hover:shadow-lg transition-shadow"
                onClick={() => window.location.href = `/unit/${unit.id}`}
              >
                <div
                  className="relative"
                  onClick={e => e.stopPropagation()}
                  onMouseDown={e => e.stopPropagation()}
                  onTouchStart={e => e.stopPropagation()}
                  onKeyDown={e => e.stopPropagation()}
                >
                  {/* Carousel with error boundary for context */}
                  {(() => {
                    try {
                      return (
                        <Carousel className="w-full">
                          <CarouselContent>
                            {unit.images.map((image, index) => (
                              <CarouselItem key={index}>
                                <div className="aspect-[4/3] relative">
                                  <img
                                    src={image}
                                    alt={`${unit.name} - Image ${index + 1}`}
                                    className="w-full h-full object-cover rounded-xl"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-2" />
                          <CarouselNext className="right-2" />
                        </Carousel>
                      );
                    } catch (e) {
                      return (
                        <div className="text-red-600 text-center mt-2">Carousel failed to load. Please check embla-carousel-react dependency and ensure Carousel is used correctly.</div>
                      );
                    }
                  })()}
                </div>
                
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold group-hover:underline" style={{ color: '#507e37' }}>
                      {unit.name}
                    </h3>
                  </div>
                  
                  <p className="text-sm mb-2" style={{ color: '#5f6360' }}>{unit.shortDescription}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {unit.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs" style={{ backgroundColor: '#b1d3ef', color: '#507e37' }}>
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-sm border-2" style={{ borderColor: '#80d19d', color: '#507e37' }}>
                      {unit.size}
                    </Badge>
                    <div className="text-right">
                      <span className="font-semibold" style={{ color: '#507e37' }}>{unit.monthlyRate}</span>
                      <span className="text-sm" style={{ color: '#5f6360' }}> /month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Units;
