
import { Heart, MapPin, Users, Calendar, Tractor, Coffee } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="text-white py-16 px-4" style={{ backgroundColor: '#80d19d' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">The History of Caia Farm</h1>
          <p className="text-xl mb-6 text-black">
            Generations of farming heritage and evolution
          </p>
          <p className="text-lg text-black">
            From traditional agriculture to modern diversified farming - discover how Caia Farm has evolved while staying true to its roots! 🚜
          </p>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Early History */}
          <section className="mb-16">
            <Card className="border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-black mb-4">Early Beginnings</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  The foundation years of Caia Farm and its agricultural heritage
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-green max-w-none">
                <div className="text-gray-800 leading-relaxed space-y-4">
                  <p>
                    Caia Farm's story begins in the early 20th century, when the land was first established as a 
                    working agricultural enterprise. The farm has been a cornerstone of the local community for generations, 
                    adapting and evolving with the changing times while maintaining its commitment to the land.
                  </p>
                  <p>
                    Historical Ordnance Survey maps reveal the transformation of Caia Farm over the decades. 
                    From its humble beginnings as a traditional mixed farm, the property has grown and adapted 
                    to meet the changing needs of rural agriculture and business.
                  </p>
                  <p>
                    The original farmhouse and traditional barns formed the heart of the operation, with fields 
                    extending across the rolling countryside. These early maps show a simpler time, when farming 
                    was the primary focus and the community was tightly knit around agricultural life.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Historical Maps Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-black mb-12">
              Mapping Our Evolution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4" style={{ color: '#507e37' }} />
                  <CardTitle className="text-black">Early 1900s</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-gray-100 h-48 mb-4 rounded flex items-center justify-center">
                    <span className="text-gray-500">Historical OS Map - Early 1900s</span>
                  </div>
                  <p className="text-gray-600">
                    The original farm layout showing traditional field boundaries and the first farm buildings.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4" style={{ color: '#507e37' }} />
                  <CardTitle className="text-black">Mid 1900s</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-gray-100 h-48 mb-4 rounded flex items-center justify-center">
                    <span className="text-gray-500">Historical OS Map - Mid 1900s</span>
                  </div>
                  <p className="text-gray-600">
                    Expansion period showing additional farm buildings and infrastructure development.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4" style={{ color: '#507e37' }} />
                  <CardTitle className="text-black">Late 1900s</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-gray-100 h-48 mb-4 rounded flex items-center justify-center">
                    <span className="text-gray-500">Historical OS Map - Late 1900s</span>
                  </div>
                  <p className="text-gray-600">
                    Modernization era with improved access roads and updated farm facilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4" style={{ color: '#507e37' }} />
                  <CardTitle className="text-black">Present Day</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-gray-100 h-48 mb-4 rounded flex items-center justify-center">
                    <span className="text-gray-500">Current OS Map - 2020s</span>
                  </div>
                  <p className="text-gray-600">
                    Today's diversified farm with three distinct businesses and modern infrastructure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Farm Evolution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-black mb-12">
              Evolution Through the Decades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Tractor className="h-12 w-12 mx-auto mb-4" style={{ color: '#ff4040' }} />
                  <CardTitle className="text-black">Agricultural Heritage</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Decades of traditional farming, raising livestock, and cultivating the land 
                    with methods passed down through generations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4" style={{ color: '#ff4040' }} />
                  <CardTitle className="text-black">Family Legacy</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Multiple generations have called Caia Farm home, each adding their own 
                    innovations while respecting the land's heritage.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-4" style={{ color: '#ff4040' }} />
                  <CardTitle className="text-black">Community Impact</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Always at the heart of the local community, providing employment 
                    and supporting rural economic development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Modern Transformation */}
          <section className="mb-16">
            <Card className="border-gray-200" style={{ backgroundColor: '#b1d3ef' }}>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-black mb-4">Modern Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
                  <div>
                    <h4 className="font-semibold text-black mb-3">Diversification Strategy</h4>
                    <p className="mb-4">
                      In recent years, Caia Farm has embraced diversification, developing three 
                      distinct business enterprises while maintaining its agricultural roots.
                    </p>
                    
                    <h4 className="font-semibold text-black mb-3">Sustainable Development</h4>
                    <p>
                      All developments have been carefully planned to enhance rather than replace 
                      the farm's natural character and environmental value.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-3">Innovation & Tradition</h4>
                    <p className="mb-4">
                      By combining traditional farming wisdom with modern business practices, 
                      Caia Farm has created a unique model for rural enterprise.
                    </p>
                    
                    <h4 className="font-semibold text-black mb-3">Future Vision</h4>
                    <p>
                      Our commitment remains unchanged: to be good stewards of the land while 
                      contributing positively to the local economy and community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="border-gray-200 text-white" style={{ backgroundColor: '#80d19d' }}>
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold mb-4 text-black">Be Part of Our Continuing Story</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
                  From agricultural heritage to modern business hub - 
                  your enterprise could be the next chapter in Caia Farm's evolving story!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white hover:bg-gray-100"
                    style={{ color: '#507e37' }}
                    onClick={() => window.location.href = '/units'}
                  >
                    Explore Our Businesses
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-black hover:bg-white/10"
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
