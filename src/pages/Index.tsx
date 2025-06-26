
import { Building, Calendar, Users, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative py-20 px-4 min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1600&h=900&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Barn Rentals
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: '#80d19d' }}>
              Six flexible units available October 2025
            </h2>
            <p className="text-lg text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Located in the heart of the countryside, our converted barn offers versatile spaces 
              perfect for storage or office use. Each unit can be rented individually or combined 
              to meet your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#80d19d' }}
                onClick={() => document.getElementById('units')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Available Units
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                onClick={() => window.location.href = '/enquiry'}
              >
                Make Enquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4" style={{ backgroundColor: '#b1d3ef' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#507e37' }}>
              Why Choose Our Barn?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5f6360' }}>
              Flexible, professional spaces in a beautiful countryside setting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#80d19d' }}>
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl" style={{ color: '#507e37' }}>Available October 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: '#5f6360' }}>
                  Perfect timing for your business expansion or storage needs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#80d19d' }}>
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl" style={{ color: '#507e37' }}>6 Flexible Units</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: '#5f6360' }}>
                  Rent individually, in sections, or take the entire barn space
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#80d19d' }}>
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl" style={{ color: '#507e37' }}>Storage & Offices</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ color: '#5f6360' }}>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#507e37' }}>Available Units</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5f6360' }}>
              Each unit comes with modern amenities and countryside views
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((unit) => (
              <Card key={unit} className="border-2 hover:shadow-lg transition-all duration-300" style={{ borderColor: '#b1d3ef' }}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl" style={{ color: '#507e37' }}>Unit {unit}</CardTitle>
                  <CardDescription style={{ color: '#5f6360' }}>
                    {unit <= 2 ? "Corner units with maximum natural light" : 
                     unit <= 4 ? "Central units with excellent access" : 
                     "End units offering privacy and tranquility"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm mb-4" style={{ color: '#5f6360' }}>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#80d19d' }}></div>
                      <span>Dimensions: Available on request</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#80d19d' }}></div>
                      <span>Power supply included</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#80d19d' }}></div>
                      <span>Drive-up access available</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#80d19d' }}></div>
                      <span>WiFi ready installation</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full text-white font-semibold hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#80d19d' }}
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
      <section className="py-16 px-4" style={{ backgroundColor: '#507e37' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Secure Your Space?</h2>
          <p className="text-xl mb-8" style={{ color: '#80d19d' }}>
            Contact us today to discuss your requirements and arrange a viewing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#80d19d', color: '#507e37' }}
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
