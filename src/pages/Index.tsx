
import { useState } from "react";
import { MapPin, Calendar, Building, Users, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-100 to-green-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Countryside Barn Rentals
          </h1>
          <p className="text-xl text-green-700 mb-4">
            Six units of countryside charm, available October 2025
          </p>
          <p className="text-lg text-green-600 mb-8 max-w-3xl mx-auto">
            Whether you need storage for your collection of vintage tractors or a peaceful office 
            where the only traffic jam is the occasional sheep crossing, our converted barn has got you covered! 
            🐄
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-3"
              onClick={() => document.getElementById('units')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Building className="mr-2 h-5 w-5" />
              View Units
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-3"
              onClick={() => window.location.href = '/enquiry'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Make Enquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Available October 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600">
                  Perfect timing for your autumn expansion plans (or storing your harvest of paperwork)
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">6 Flexible Units</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600">
                  Rent individually, in sections, or go full barn - we're more flexible than a yoga instructor!
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Storage & Offices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600">
                  From storing stuff to serious business - our barn doesn't judge your filing system
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Units Overview */}
      <section id="units" className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Six Units</h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Each unit comes with countryside views, fresh air, and the occasional friendly moo from next door. 
              No extra charge for the authentic rural soundtrack!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((unit) => (
              <Card key={unit} className="border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-green-800">Unit {unit}</CardTitle>
                  <CardDescription className="text-green-600">
                    {unit <= 2 ? "Premium corner units" : unit <= 4 ? "Central units" : "Peaceful end units"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-green-700">
                    <p>📐 Floor space: Coming soon</p>
                    <p>🔌 Power: Available</p>
                    <p>🚗 Access: Drive-up available</p>
                    <p>📶 WiFi ready: For those Zoom calls with cows</p>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-red-600 hover:bg-red-700"
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
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Barn Family?</h2>
          <p className="text-xl mb-8">
            Don't let this opportunity graze by! Get in touch and we'll have you sorted faster than you can say "udderly fantastic"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3"
              onClick={() => window.location.href = '/enquiry'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Make an Enquiry
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-3"
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
