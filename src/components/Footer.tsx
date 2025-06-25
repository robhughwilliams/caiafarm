
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Countryside Barns</h3>
            <p className="text-gray-300 mb-4">
              Premium barn rental spaces in a beautiful countryside setting. 
              Perfect for storage, offices, or mixed commercial use.
            </p>
            <div className="flex items-center text-gray-300">
              <MapPin className="h-5 w-5 mr-3 text-green-400" />
              <span>Beautiful countryside location</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-green-400" />
                <span>Call for enquiries</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-green-400" />
                <span>Email us</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-5 w-5 mr-3 text-green-400" />
                <span>Available from Oct 2025</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/units" className="block text-gray-300 hover:text-white transition-colors">
                View All Units
              </a>
              <a href="/enquiry" className="block text-gray-300 hover:text-white transition-colors">
                Make an Enquiry
              </a>
              <a href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </a>
            </div>
            
            {/* Sister Companies */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-green-400">Sister Companies</h4>
              <div className="space-y-1">
                <a 
                  href="https://www.ryecroftmeadow.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Ryecroft Meadow
                </a>
                <a 
                  href="https://www.byproductservices.co.uk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Byproduct Services
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Countryside Barn Rentals - Professional spaces in a countryside setting
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
