
import { Building, Calendar, Users, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Premium Barn Rentals
            </h1>
            <h2 className="text-xl md:text-2xl text-green-700 font-semibold mb-4">
              Six flexible units available October 2025
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Located in the heart of the countryside, our converted barn offers versatile spaces 
              perfect for storage or office use. Each unit can be rented individually or combined 
              to meet your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('units')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Available Units
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-8 py-4 text-lg"
                onClick={() => window.location.href = '/enquiry'}
              >
                Make Enquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Barn?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible, professional spaces in a beautiful countryside setting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle className="text-xl text-gray-900">Available October 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Perfect timing for your business expansion or storage needs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle className="text-xl text-gray-900">6 Flexible Units</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rent individually, in sections, or take the entire barn space
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-700" />
                </div>
                <CardTitle className="text-xl text-gray-900">Storage & Offices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Versatile spaces suitable for both commercial storage and office use
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Units Overview */}
      <section id="units" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Units</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each unit comes with modern amenities and countryside views
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((unit) => (
              <Card key={unit} className="border border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900">Unit {unit}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {unit <= 2 ? "Corner units with maximum natural light" : 
                     unit <= 4 ? "Central units with excellent access" : 
                     "End units offering privacy and tranquility"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Dimensions: Available on request</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Power supply included</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Drive-up access available</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>WiFi ready installation</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-green-700 hover:bg-green-800 text-white"
                    onClick={() => window.location.href = '/units'}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Space?</h2>
          <p className="text-xl mb-8 text-green-100">
            Contact us today to discuss your requirements and arrange a viewing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => window.location.href = '/enquiry'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Make an Enquiry
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              onClick={() => window.location.href = '/units'}
            >
              <Building className="mr-2 h-5 w-5" />
              Detailed Information
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
