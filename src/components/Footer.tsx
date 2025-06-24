
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-red-400" />
                <span>Call us for a chat!</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-red-400" />
                <span>Drop us a line</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-red-400" />
                <span>Beautiful countryside location</span>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-xl font-bold mb-4">Availability</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-red-400" />
                <span>Available from October 2025</span>
              </div>
              <p className="text-green-200">
                All 6 units ready for your storage needs or office dreams!
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/units" className="block text-green-200 hover:text-white transition-colors">
                View All Units
              </a>
              <a href="/enquiry" className="block text-green-200 hover:text-white transition-colors">
                Make an Enquiry
              </a>
              <a href="/about" className="block text-green-200 hover:text-white transition-colors">
                About Our Barn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © 2024 Countryside Barn Rentals - Where business meets the great outdoors! 🌾
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
