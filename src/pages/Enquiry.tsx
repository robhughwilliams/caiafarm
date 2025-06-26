
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Building, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Enquiry = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interestedUnits: [] as string[],
    intendedUse: "",
    moveInDate: "",
    message: "",
  });

  const handleUnitChange = (unitId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interestedUnits: checked 
        ? [...prev.interestedUnits, unitId]
        : prev.interestedUnits.filter(id => id !== unitId)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Oops! Missing Information",
        description: "Please fill in your name, email, and message. We promise it's not as complicated as assembling flat-pack furniture!",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Enquiry Sent Successfully! 🎉",
      description: "We'll get back to you faster than a farmer chasing escaped chickens. Usually within 24 hours!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      interestedUnits: [],
      intendedUse: "",
      moveInDate: "",
      message: "",
    });
  };

  const units = [
    { id: "1", name: "Unit 1 - The Corner Office" },
    { id: "2", name: "Unit 2 - The Bright Side" },
    { id: "3", name: "Unit 3 - The Social Hub" },
    { id: "4", name: "Unit 4 - The Collaborator" },
    { id: "5", name: "Unit 5 - The Quiet Achiever" },
    { id: "6", name: "Unit 6 - The Independent" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="text-white py-16 px-4" style={{ backgroundColor: '#80d19d' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl mb-6">
            Ready to join our barn family? We'd love to hear from you!
          </p>
          <p className="text-lg">
            Fill out the form below, and we'll get back to you quicker than you can say "outstanding in your field" 🌾
          </p>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-black">Enquiry Form</CardTitle>
                  <CardDescription className="text-gray-600">
                    Tell us about your requirements - don't worry, we're good listeners (even better than cows)!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-black">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Your name"
                          className="border-gray-200 focus:border-gray-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-black">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="your.email@example.com"
                          className="border-gray-200 focus:border-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-black">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="01234 567890"
                          className="border-gray-200 focus:border-gray-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-black">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                          placeholder="Your company (optional)"
                          className="border-gray-200 focus:border-gray-400"
                        />
                      </div>
                    </div>

                    {/* Unit Interest */}
                    <div>
                      <Label className="text-black mb-3 block">Which units interest you?</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {units.map((unit) => (
                          <div key={unit.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`unit-${unit.id}`}
                              checked={formData.interestedUnits.includes(unit.id)}
                              onCheckedChange={(checked) => 
                                handleUnitChange(unit.id, checked as boolean)
                              }
                            />
                            <Label 
                              htmlFor={`unit-${unit.id}`} 
                              className="text-gray-700 text-sm cursor-pointer"
                            >
                              {unit.name}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Business Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="intendedUse" className="text-black">Intended Use</Label>
                        <Select 
                          value={formData.intendedUse} 
                          onValueChange={(value) => setFormData(prev => ({ ...prev, intendedUse: value }))}
                        >
                          <SelectTrigger className="border-gray-200">
                            <SelectValue placeholder="Select primary use" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="office">Office Space</SelectItem>
                            <SelectItem value="storage">Storage</SelectItem>
                            <SelectItem value="workshop">Workshop</SelectItem>
                            <SelectItem value="mixed">Mixed Use</SelectItem>
                            <SelectItem value="other">Other (please specify in message)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="moveInDate" className="text-black">Preferred Move-in Date</Label>
                        <Input
                          id="moveInDate"
                          type="date"
                          value={formData.moveInDate}
                          onChange={(e) => setFormData(prev => ({ ...prev, moveInDate: e.target.value }))}
                          min="2025-10-01"
                          className="border-gray-200 focus:border-gray-400"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-black">Your Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Tell us about your requirements, any specific questions, or just say hello! We love a good chat."
                        rows={5}
                        className="border-gray-200 focus:border-gray-400"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-white hover:opacity-90"
                      style={{ backgroundColor: '#ff4040' }}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Enquiry
                    </Button>
                    
                    <p className="text-sm text-gray-600 text-center">
                      * Required fields - we promise we're not as picky as a cow choosing grass!
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              
              {/* Contact Details */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black">Contact Information</CardTitle>
                  <CardDescription className="text-gray-600">
                    Other ways to reach us
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" style={{ color: '#ff4040' }} />
                    <div>
                      <p className="font-medium text-black">Phone</p>
                      <p className="text-gray-600">Give us a call for a friendly chat</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" style={{ color: '#ff4040' }} />
                    <div>
                      <p className="font-medium text-black">Email</p>
                      <p className="text-gray-600">Drop us a line anytime</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5" style={{ color: '#ff4040' }} />
                    <div>
                      <p className="font-medium text-black">Location</p>
                      <p className="text-gray-600">Beautiful countryside setting</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="h-5 w-5" style={{ color: '#ff4040' }} />
                    <span className="font-medium text-black">Within 24 hours</span>
                  </div>
                  <p className="text-gray-600">
                    We aim to respond to all enquiries within one working day. 
                    If you don't hear from us, check your spam folder - 
                    sometimes our emails get as lost as sheep!
                  </p>
                </CardContent>
              </Card>

              {/* Visit Information */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black">Want to Visit?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-3">
                    <Building className="h-5 w-5" style={{ color: '#ff4040' }} />
                    <span className="font-medium text-black">Viewings Available</span>
                  </div>
                  <p className="text-gray-600">
                    We'd love to show you around! Just mention in your enquiry 
                    that you'd like to arrange a viewing, and we'll sort out a time 
                    that works for everyone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Enquiry;
