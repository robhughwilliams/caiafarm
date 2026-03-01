import { Building, Calendar, Users, Mail, Phone, MapPin, ArrowRight, Tractor, Leaf, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
              Welcome to Caia Farm
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
              A working farm with diversified businesses
            </h2>
            <p className="text-lg text-white mb-8 leading-relaxed max-w-3xl mx-auto">
              Located on the outskirts of Wrexham in the Welsh countryside, Caia Farm is home to multiple thriving businesses: a working farm at it's core, ByProductServices waste management, Rycroft Meadow's private hire dog walking fields, and premium barn rentals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-opacity"
                onClick={() => document.getElementById('businesses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Businesses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary bg-primary-foreground hover:bg-primary-foreground/90 px-8 py-4 text-lg"
                onClick={() => window.location.href = '/about'}
              >
                Our Farm History
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Overview */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              A Working Farm with Purpose
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              Caia Farm combines traditional farming values with modern business innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md bg-card">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary">
                  <Tractor className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-primary">Active Farming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our farm continues its agricultural heritage with modern sustainable practices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md bg-card">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary">
                  <Building className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-primary">Business Diversification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Distinct businesses operating from our farm infrastructure
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md bg-card">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary">
                  <Leaf className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-primary">Sustainable Future</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Committed to environmental stewardship and rural community development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Businesses */}
      <section id="businesses" className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Three Businesses</h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              Discover the diverse enterprises that call Caia Farm home
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Caia Farm Barns — brand colour: #80d19d green */}
            <Card className="border-2 hover:shadow-lg transition-all duration-300 flex flex-col" style={{ borderColor: '#80d19d' }}>
              <CardHeader className="pb-4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#80d19d' }}>
                  <Building className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">Caia Farm Barns</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Premium barn rental spaces for storage and office use
                </CardDescription>
              </CardHeader>
              <CardContent className="grow">
                <ul className="space-y-2">
                  <li className="flex items-start text-foreground"><span className="inline-block w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0" style={{ backgroundColor: '#80d19d' }}></span>6 flexible units available October 2025</li>
                  <li className="flex items-start text-foreground"><span className="inline-block w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0" style={{ backgroundColor: '#80d19d' }}></span>Perfect for storage or commercial use</li>
                  <li className="flex items-start text-foreground"><span className="inline-block w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0" style={{ backgroundColor: '#80d19d' }}></span>Beautiful countryside setting</li>
                  <li className="flex items-start text-foreground"><span className="inline-block w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0" style={{ backgroundColor: '#80d19d' }}></span>Flexible rental terms</li>
                </ul>
              </CardContent>
              <CardFooter className="justify-center">
                <Button
                  className="w-48 text-white font-semibold"
                  style={{ backgroundColor: '#80d19d' }}
                  onClick={() => window.location.href = '/units'}
                >
                  View Barn Units
                </Button>
              </CardFooter>
            </Card>

            {/* Byproduct Services — brand colour: #3899ec blue */}
            <Card className="border-2 hover:shadow-lg transition-all duration-300 flex flex-col" style={{ borderColor: '#3899ec' }}>
              <CardHeader className="pb-4 flex flex-col items-center">
                <img src="/assets/byproduct-logo.png" alt="ByProduct Services Logo" className="h-16 mb-4" style={{ objectFit: 'contain' }} />
                <CardTitle className="text-xl text-foreground">ByProduct Services</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Specialised waste management and processing
                </CardDescription>
              </CardHeader>
              <CardContent className="grow">
                <ul className="space-y-2">
                  <li className="flex items-start text-foreground"><span className="inline-block w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0" style={{ backgroundColor: '#3899ec' }}></span>Waste collection and processing</li>
                  <li className="flex items-start text-foreground"><span className="inline-block w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0" style={{ backgroundColor: '#3899ec' }}></span>Septic Tank Installation</li>
                  <li className="flex items-start text-foreground"><span className="inline-block w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0" style={{ backgroundColor: '#3899ec' }}></span>Environmental compliance</li>
                  <li className="flex items-start text-foreground"><span className="inline-block w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0" style={{ backgroundColor: '#3899ec' }}></span>Industry expertise</li>
                </ul>
              </CardContent>
              <CardFooter className="justify-center">
                <Button
                  className="w-48 text-white font-semibold"
                  style={{ backgroundColor: '#3899ec' }}
                  onClick={() => window.open('https://www.byproductservices.co.uk/', '_blank')}
                >
                  Visit Website
                </Button>
              </CardFooter>
            </Card>

            {/* Ryecroft Meadow — brand colour: #ff4040 red */}
            <Card className="border-2 hover:shadow-lg transition-all duration-300 flex flex-col" style={{ borderColor: '#ff4040' }}>
              <CardHeader className="pb-4 flex flex-col items-center">
                <img src="/assets/ryecroft-logo.png" alt="Ryecroft Meadow Logo" className="h-16 mb-4" style={{ objectFit: 'contain' }} />
                <CardTitle className="text-xl text-foreground">Ryecroft Meadow</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Premium agricultural and farming operations
                </CardDescription>
              </CardHeader>
              <CardContent className="grow">
                <ul className="space-y-2">
                  <li className="flex items-start text-foreground"><span className="inline-block w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0" style={{ backgroundColor: '#ff4040' }}></span>Private Hire Dog Walking Fields</li>
                  <li className="flex items-start text-foreground"><span className="inline-block w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0" style={{ backgroundColor: '#ff4040' }}></span>Adventure Field: 5 acres of open space and sensory enrichment.</li>
                  <li className="flex items-start text-foreground"><span className="inline-block w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0" style={{ backgroundColor: '#ff4040' }}></span>Agility Field: 2 acres with kennel club standard agility equipment.</li>
                  <li className="flex items-start text-foreground"><span className="inline-block w-2 h-2 rounded-full mr-3 mt-1.5 shrink-0" style={{ backgroundColor: '#ff4040' }}></span>Hillside Field: 2 acres of sloping bank, ideal for running and recall training.</li>
                </ul>
              </CardContent>
              <CardFooter className="justify-center">
                <Button
                  className="w-48 text-white font-semibold"
                  style={{ backgroundColor: '#ff4040' }}
                  onClick={() => window.open('https://www.ryecroftmeadow.com/', '_blank')}
                >
                  Visit Website
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Discover Our Farm Story</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Learn about our heritage, growth, and vision for the future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 py-4 text-lg font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={() => window.location.href = '/about'}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Farm History
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary bg-primary-foreground hover:bg-primary-foreground/90 px-8 py-4 text-lg"
              onClick={() => window.location.href = '/enquiry'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
