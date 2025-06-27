
import { Heart, MapPin, Users, Calendar, Tractor, Coffee } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const timelineEvents = [
    {
      year: "1842",
      title: "Fields & Furrows",
      subtitle: "Tithe Apportionment Map of Gresford",
      image: "/lovable-uploads/63a9394d-d817-4dc7-9d99-653437c46ad1.png",
      content: `Our story begins in the early-Victorian countryside.
The 1842 tithe survey shows Caeau Farm (Meaning The Fields in Welsh) as a compact small holding surrounded by pasture plots numbered 49–56. A cart-track linked the yard to the old Wrexham road, while a small pond (plot 51) waters stock in the meadow below. The farm was run by a small tenant-farmer family with a mix between arable and livestock, the classic Welsh "mixed farm" of its day. The occupier at the time was John Norbury and the landowner was the Dean and Chapter of Winchester.`
    },
    {
      year: "1874",
      title: "Victorian Enterprise",
      subtitle: "Ordnance Survey – Cheshire Sheet LIII (pub. 1881)",
      image: "/lovable-uploads/0acfeba1-b3cf-42d3-b52c-4d3702d1330e.png",
      content: `Three decades later the first large-scale OS map captures the farm in full Victorian stride. New buildings flank the original farmhouse, while neat lines of trees mark the boundaries. The map labels the holding "Caeau", affirming both its Welsh roots. Produce at this time would have travelled to town markets by horse-drawn cart.`
    },
    {
      year: "1921",
      title: "The Williams Family Arrives",
      subtitle: "First Generation",
      image: null,
      content: `The first record of the Williams family occupying the farm is given by the marriage records of the Parish of Gresford when John Williams of Broswlyfa, Wrexham married Lillian Knight of Cropthorne, Worcestershire.`
    },
    {
      year: "1938",
      title: "Modern Mechanisation",
      subtitle: "Ordnance Survey – Denbighshire Sheet XXI.SE (rev. 1938, pub. ≈1946)",
      image: "/lovable-uploads/c3513e3e-ee7b-40b2-91da-f8b15af85620.png",
      content: `On the eve of World War II, the revised survey shows further development with a yard suitable for tractors. A Dutch-barn now appear aside the farmhouse, at this time it is likely that electricity lines now cross the fields. Yet the core farmhouse remained unchanged, still anchoring the landscape just as they did a century before.`
    },
    {
      year: "Today",
      title: "Stewardship & Welcome",
      subtitle: "A Living Heritage",
      image: null,
      content: `Over a century on, we remain proudly family-run Farm, caring for the same hedgerows and farm buildings first set down on the 1842 tithe map. The farm is also now the home of Ryecroft Meadow.

Our aim is simple:
to blend modern rural enterprise with the deep-rooted heritage of Caeau Farm, preserving its history while diversifying the interests.`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="text-white py-16 px-4" style={{ backgroundColor: '#80d19d' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">The History of Caia Farm</h1>
          <p className="text-xl mb-6 text-black">
            From 1842 to today - A timeline of our farm's heritage
          </p>
          <p className="text-lg text-black">
            Discover how Caeau Farm has evolved through the centuries while staying true to its Welsh roots! 🚜
          </p>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Historical Note */}
          <section className="mb-16">
            <Card className="border-gray-200" style={{ backgroundColor: '#b1d3ef' }}>
              <CardContent className="py-8 text-center">
                <p className="text-black font-medium text-lg">
                  The farm is likely to date back to 1787 with the Gresford Estate map showing the farm in existence.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Timeline */}
          <ScrollArea className="h-[800px] w-full">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div 
                      className="absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10"
                      style={{ backgroundColor: '#507e37' }}
                    ></div>
                    
                    {/* Content */}
                    <div className="ml-20 w-full">
                      <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 opacity-100 hover:opacity-95">
                        <CardHeader>
                          <div className="flex items-center gap-4 mb-2">
                            <span 
                              className="text-2xl font-bold px-3 py-1 rounded text-white"
                              style={{ backgroundColor: '#ff4040' }}
                            >
                              {event.year}
                            </span>
                            <div>
                              <CardTitle className="text-black text-xl">{event.title}</CardTitle>
                              <CardDescription className="text-gray-600 font-medium">
                                {event.subtitle}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {event.image && (
                              <div className="order-2 lg:order-1">
                                <img 
                                  src={event.image} 
                                  alt={`Historical map from ${event.year}`}
                                  className="w-full h-64 object-cover rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                                />
                              </div>
                            )}
                            <div className={`${event.image ? 'order-1 lg:order-2' : 'col-span-full'}`}>
                              <div className="prose prose-gray max-w-none">
                                {event.content.split('\n\n').map((paragraph, pIndex) => (
                                  <p key={pIndex} className="text-gray-800 leading-relaxed mb-4">
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>

          {/* Call to Action */}
          <section className="text-center mt-16">
            <Card className="border-gray-200 text-white" style={{ backgroundColor: '#80d19d' }}>
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold mb-4 text-black">Be Part of Our Continuing Story</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
                  From Victorian heritage to modern diversified farming - 
                  your enterprise could be the next chapter in Caeau Farm's evolving story!
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
