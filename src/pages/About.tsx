
import { Heart, MapPin, Users, Calendar, Tractor, Coffee } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Our Barn</h1>
          <p className="text-xl mb-6">
            From storing hay to housing dreams - our story
          </p>
          <p className="text-lg">
            Every great business space has a story. Ours just happens to involve tractors, sheep, and a lot of laughs along the way! 🚜
          </p>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* The Story */}
          <section className="mb-16">
            <Card className="border-green-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-green-800 mb-4">The Story Behind the Barn</CardTitle>
                <CardDescription className="text-lg text-green-600">
                  How a traditional farm building became the coolest business space in the countryside
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-green max-w-none">
                <div className="text-green-700 leading-relaxed space-y-4">
                  <p>
                    Built in the 1950s, this magnificent barn has seen more changes than a politician during election season! 
                    Originally home to prize-winning cattle and enough hay to build a small mountain, our barn has been lovingly 
                    converted into six versatile business units.
                  </p>
                  <p>
                    After decades of faithful service housing livestock (who, let's be honest, weren't the tidiest tenants), 
                    we decided it was time for a career change. With careful planning, a lot of elbow grease, and just enough 
                    coffee to power a small village, we've transformed this beautiful building into a modern business space 
                    that still retains all its rustic charm.
                  </p>
                  <p>
                    The conversion has been designed with businesses in mind - whether you need a peaceful office overlooking 
                    rolling fields, secure storage for your growing enterprise, or a workshop space where you can create your 
                    next masterpiece. We've kept the character (those beautiful old beams!) while adding all the modern 
                    amenities you need to run a successful business.
                  </p>
                  <p>
                    And yes, we still have the occasional visit from the neighbouring sheep. They're excellent at stress-testing 
                    our security systems (and providing entertainment during coffee breaks)!
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
              What Makes Us Special
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-green-800">Perfect Location</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-green-600">
                    Set in beautiful countryside but still accessible for clients, suppliers, 
                    and that pizza delivery you ordered for late-night working sessions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-green-800">Character & Charm</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-green-600">
                    Original features, exposed beams, and stories in every stone. 
                    Your clients will remember visiting your office here!
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-green-800">Friendly Community</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-green-600">
                    Join a community of like-minded businesses. Share ideas, borrow sugar, 
                    and enjoy the kind of networking that actually feels natural.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Calendar className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-green-800">Flexible Terms</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-green-600">
                    We understand that businesses grow and change. Our rental terms 
                    are designed to grow with you, not hold you back.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Tractor className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-green-800">Authentic Heritage</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-green-600">
                    A real working farm building with genuine history. 
                    No fake "rustic" theming here - this is the real deal!
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Coffee className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-green-800">Personal Touch</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-green-600">
                    We're not a faceless property company. We're real people who care 
                    about creating a great environment for your business to thrive.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Our Commitment */}
          <section className="mb-16">
            <Card className="border-green-200 bg-gradient-to-r from-amber-50 to-green-50">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-green-800 mb-4">Our Commitment to You</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-green-700">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">Transparent Communication</h4>
                    <p className="mb-4">
                      No hidden costs, no surprise charges, no complicated jargon. 
                      We believe in keeping things simple and straightforward.
                    </p>
                    
                    <h4 className="font-semibold text-green-800 mb-3">Responsive Maintenance</h4>
                    <p>
                      When something needs fixing, we're on it faster than a cat chasing a laser pointer. 
                      Your business can't wait, and neither will we.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">Flexible Support</h4>
                    <p className="mb-4">
                      Need to expand? Downsize? Change your setup? We'll work with you to find solutions 
                      that make sense for your business.
                    </p>
                    
                    <h4 className="font-semibold text-green-800 mb-3">Local Knowledge</h4>
                    <p>
                      We know the area, the people, and the best places to grab lunch. 
                      Consider us your unofficial local business advisors!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="border-green-200 bg-gradient-to-r from-green-600 to-red-600 text-white">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Be Part of Our Story?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  From humble agricultural beginnings to modern business hub - 
                  your success story could be the next chapter in our barn's tale!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-green-700 hover:bg-gray-100"
                    onClick={() => window.location.href = '/units'}
                  >
                    Explore Our Units
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => window.location.href = '/enquiry'}
                  >
                    Get in Touch
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
