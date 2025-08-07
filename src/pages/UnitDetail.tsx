import { useParams } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Wifi, Zap, Car, Shield, Users, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const UnitDetail = () => {
  const { id } = useParams();
  
  const units = [
    {
      id: 1,
      name: "Unit 1 - The Corner Office",
      size: "500 sq ft",
      description: "Perfect corner unit with maximum natural light and easy access. Ideal for those who like to see everything coming (including the postman and the occasional cow).",
      shortDescription: "Perfect corner unit with maximum natural light",
      monthlyRate: "£800",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
      ],
      features: ["Corner position", "Large windows", "Easy vehicle access", "Private entrance"],
      suitableFor: ["Small office", "Storage", "Workshop space"],
      amenities: ["High-speed internet", "24/7 access", "Parking space", "Security system"],
      specifications: {
        floorArea: "500 sq ft",
        ceiling: "12 ft high",
        windows: "4 large windows",
        doors: "2 (main + fire exit)",
        power: "3-phase electricity",
        heating: "Electric heating"
      }
    },
    {
      id: 2,
      name: "Unit 2 - The Bright Side",
      size: "450 sq ft",
      description: "South-facing unit with excellent natural light all day. Great for businesses that like to look on the bright side of life!",
      shortDescription: "South-facing unit with excellent natural light",
      monthlyRate: "£750",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop"
      ],
      features: ["South-facing", "All-day sunlight", "Good insulation", "Shared loading area"],
      suitableFor: ["Office space", "Art studio", "Storage"],
      amenities: ["Natural light all day", "Climate control", "Shared facilities", "Loading dock access"],
      specifications: {
        floorArea: "450 sq ft",
        ceiling: "12 ft high",
        windows: "3 south-facing windows",
        doors: "1 main entrance",
        power: "Single-phase electricity",
        heating: "Efficient heating system"
      }
    },
    // Add other units here with similar structure...
  ];

  const unit = units.find(u => u.id === parseInt(id || '1')) || units[0];

  const generalFeatures = [
    { icon: Zap, title: "Electricity", description: "Full electrical installation" },
    { icon: Wifi, title: "Internet Ready", description: "Fiber broadband available" },
    { icon: Car, title: "Vehicle Access", description: "Drive-up access" },
    { icon: Shield, title: "Security", description: "CCTV & secure premises" },
    { icon: Users, title: "Shared Facilities", description: "Common areas available" },
    { icon: Ruler, title: "Flexible Space", description: "Expandable options" },
  ];

  const [viewsThisWeek, setViewsThisWeek] = useState<number | null>(null);

  useEffect(() => {
    if (!unit?.id) return;
    fetch("/.netlify/functions/unitView", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ unitId: unit.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setViewsThisWeek(data.viewsThisWeek);
      })
      .catch(() => setViewsThisWeek(null));
  }, [unit?.id]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Back Button */}
      <div className="px-4 py-4 max-w-7xl mx-auto">
        <Button 
          variant="ghost" 
          className="flex items-center gap-2"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all units
        </Button>
      </div>

      {/* Image Gallery */}
      <section className="px-4 max-w-7xl mx-auto mb-8">
        <Carousel className="w-full">
          <CarouselContent>
            {unit.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-[16/10] relative">
                  <img
                    src={image}
                    alt={`${unit.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Unit Details */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <MapPin className="h-4 w-4" />
              <span>Caia Farm, North Wales</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{unit.name}</h1>
            {viewsThisWeek !== null && (
              <div className="mb-2 text-green-700 text-sm font-medium">
                {viewsThisWeek} {viewsThisWeek === 1 ? "person has" : "people have"} viewed this unit this week
              </div>
            )}
            
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="outline" className="text-base px-3 py-1">
                {unit.size}
              </Badge>
            </div>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {unit.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <div className="grid grid-cols-2 gap-3">
                {unit.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitable For */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Perfect For</h2>
              <div className="flex flex-wrap gap-2">
                {unit.suitableFor.map((use, index) => (
                  <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                    {use}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(unit.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium capitalize text-gray-700">
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                        </span>
                        <span className="text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* General Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {generalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <feature.icon className="h-6 w-6 text-green-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 border-gray-200 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {unit.monthlyRate}
                      <span className="text-base font-normal text-gray-600"> /month</span>
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Available from</div>
                    <div className="font-semibold">October 2025</div>
                  </div>
                  
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg"
                    onClick={() => window.location.href = '/enquiry'}
                  >
                    Enquire Now
                  </Button>
                  
                  <div className="text-center text-sm text-gray-600">
                    No commitment required
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Included amenities:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {unit.amenities.map((amenity, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Similar Units */}
      <section className="py-16 px-4 bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Other Available Units</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.filter(u => u.id !== unit.id).slice(0, 3).map((otherUnit) => (
              <Card 
                key={otherUnit.id} 
                className="cursor-pointer group hover:shadow-lg transition-shadow"
                onClick={() => window.location.href = `/unit/${otherUnit.id}`}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={otherUnit.images[0]}
                    alt={otherUnit.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:underline">{otherUnit.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{otherUnit.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{otherUnit.size}</Badge>
                    <span className="font-semibold">{otherUnit.monthlyRate}/month</span>
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

export default UnitDetail;
