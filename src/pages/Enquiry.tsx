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
import EnquiryForm from "../components/EnquiryForm";

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
        description: "Please fill in your name, email, phone number, use, required move in and message!",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Enquiry Sent Successfully! 🎉",
      description: "We'll get back to you as soon as possible. Usually within 48 hours!",
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
            Could this be the space for you? We'd love to hear from you!
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
              <EnquiryForm />
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
                      <p className="font-medium text-black">Phone: 07729 262101</p>
                      <p className="text-gray-600">Give us a call for a friendly chat</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" style={{ color: '#ff4040' }} />
                    <div>
                      <p className="font-medium text-black">Email: robert@caiafarm.co.uk</p>
                      <p className="text-gray-600">Drop us a line anytime</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5" style={{ color: '#ff4040' }} />
                    <div>
                      <p className="font-medium text-black">Location: Gresford</p>
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
                    We aim to respond to all enquiries within 48 hours. 
                    If you don't hear from us, check your spam folder!
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
