
import { Ruler, Zap, Car, Wifi, Shield, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Units = () => {
  const units = [
    {
      id: 1,
      name: "Unit 1 - The Corner Office",
      size: "500 sq ft",
      description: "Perfect corner unit with maximum natural light and easy access. Ideal for those who like to see everything coming (including the postman and the occasional cow).",
      features: ["Corner position", "Large windows", "Easy vehicle access", "Private entrance"],
      suitableFor: ["Small office", "Storage", "Workshop space"],
      monthlyRate: "Contact for pricing"
    },
    {
      id: 2,
      name: "Unit 2 - The Bright Side",
      size: "450 sq ft",
      description: "South-facing unit with excellent natural light all day. Great for businesses that like to look on the bright side of life!",
      features: ["South-facing", "All-day sunlight", "Good insulation", "Shared loading area"],
      suitableFor: ["Office space", "Art studio", "Storage"],
      monthlyRate: "Contact for pricing"
    },
    {
      id: 3,
      name: "Unit 3 - The Social Hub",
      size: "475 sq ft",
      description: "Central location within the barn - perfect for businesses that like to be in the thick of things (while still enjoying peaceful countryside vibes).",
      features: ["Central location", "Good connectivity", "Shared facilities", "Climate controlled"],
      suitableFor: ["Team office", "Meeting space", "Storage"],
      monthlyRate: "Contact for pricing"
    },
    {
      id: 4,
      name: "Unit 4 - The Collaborator",
      size: "425 sq ft",
      description: "Next to Unit 3, perfect for businesses wanting to expand or companies who enjoy good neighbours (the kind who borrow sugar, not lawnmowers).",
      features: ["Adjacent to Unit 3", "Expandable option", "Shared access", "Modern fixtures"],
      suitableFor: ["Office extension", "Storage", "Creative space"],
      monthlyRate: "Contact for pricing"
    },
    {
      id: 5,
      name: "Unit 5 - The Quiet Achiever",
      size: "460 sq ft",
      description: "Peaceful end unit perfect for concentration-heavy work. Ideal for accountants, writers, or anyone who thinks best without distractions (except maybe bird song).",
      features: ["Quiet end location", "Minimal foot traffic", "Private atmosphere", "Sound insulated"],
      suitableFor: ["Private office", "Study space", "Secure storage"],
      monthlyRate: "Contact for pricing"
    },
    {
      id: 6,
      name: "Unit 6 - The Independent",
      size: "480 sq ft",
      description: "The most private unit with its own separate entrance. Perfect for businesses that value independence (or just really like having their own space).",
      features: ["Separate entrance", "Maximum privacy", "Own utilities", "End position"],
      suitableFor: ["Executive office", "Secure storage", "Independent business"],
      monthlyRate: "Contact for pricing"
    }
  ];

  const generalFeatures = [
    { icon: Zap, title: "Electricity", description: "Full electrical installation throughout" },
    { icon: Wifi, title: "Internet Ready", description: "Fiber broadband connection available" },
    { icon: Car, title: "Vehicle Access", description: "Drive-up access to all units" },
    { icon: Shield, title: "Security", description: "Secure premises with CCTV" },
    { icon: Users, title: "Shared Facilities", description: "Common areas and facilities available" },
    { icon: Ruler, title: "Flexible Space", description: "Combine units for larger requirements" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Detailed Unit Information</h1>
          <p className="text-xl mb-6">
            Six unique spaces, each with its own personality (and excellent Wi-Fi)
          </p>
          <p className="text-lg max-w-3xl mx-auto">
            Whether you need a quiet corner for number-crunching or a spacious area for storing your 
            collection of vintage office furniture, we've got the perfect spot for you!
          </p>
        </div>
      </section>

      {/* General Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            What You Get with Every Unit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalFeatures.map((feature, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <feature.icon className="h-12 w-12 text-red-600 mx-auto mb-2" />
                  <CardTitle className="text-green-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-green-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Units */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Meet Our Six Units
          </h2>
          <div className="space-y-8">
            {units.map((unit) => (
              <Card key={unit.id} className="border-green-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                      <CardTitle className="text-2xl text-green-800 mb-2">
                        {unit.name}
                      </CardTitle>
                      <CardDescription className="text-lg text-green-600">
                        {unit.description}
                      </CardDescription>
                    </div>
                    <div className="mt-4 sm:mt-0 text-right">
                      <Badge variant="outline" className="text-lg px-4 py-2 border-red-500 text-red-600">
                        {unit.size}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {unit.features.map((feature, index) => (
                          <li key={index} className="text-green-600 flex items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Suitable For */}
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">Perfect For</h4>
                      <ul className="space-y-2">
                        {unit.suitableFor.map((use, index) => (
                          <li key={index} className="text-green-600 flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & Action */}
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">Pricing</h4>
                      <p className="text-green-600 mb-4">{unit.monthlyRate}</p>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700"
                        onClick={() => window.location.href = '/enquiry'}
                      >
                        Enquire About Unit {unit.id}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Options */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-100 to-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Mix and Match Like a Buffet!
          </h2>
          <p className="text-xl text-green-700 mb-8">
            Need more space? No problem! Combine units to create your perfect setup:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Adjacent Units</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600">
                  Units 3 & 4 work brilliantly together for expanding businesses. 
                  Units 1 & 2 create a lovely corner suite with loads of light.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">The Whole Barn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600">
                  Need all six units? Go for it! Perfect for larger operations or 
                  if you just really, really like having lots of space.
                </p>
              </CardContent>
            </Card>
          </div>
          <Button 
            size="lg" 
            className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-3"
            onClick={() => window.location.href = '/enquiry'}
          >
            Discuss Your Requirements
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Units;
