import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Inventory', href: '/inventory' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Vehicle Import',
    'Export Services',
    'Shipping & Logistics',
    'Quality Inspection',
    'Documentation',
    'After Sales Support',
  ];

  const offices = [
    {
      city: 'Guangzhou, China',
      address: '123 Automotive District, Guangzhou',
      phone: '+86 20 1234 5678',
    },
    {
      city: 'Lagos, Nigeria',
      address: 'Plot No 3321 Along "D" Close, 2nd Avenue, Festac Town',
      phone: '+234 1 234 5678',
    },
    {
      city: 'Abuja, Nigeria',
      address: 'FABUZILO Mall, Suite 404, 6th Avenue Gwarinpa',
      phone: '+234 9 234 5678',
    },
    {
      city: 'Onitsha, Anambra',
      address: 'No. 17 ILODIBE service road AWADA, MCC junction, Upper Iweka',
      phone: '+234 803 XXX XXXX',
    },
    {
      city: 'Nnewi',
      address: 'No.1 shop at Innoson Plaza, Nnewi roundabout',
      phone: '+234 803 XXX XXXX',
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/9f46325612cd04fe3c1a9308a2d87b13.png"
                alt="CME AUTOS"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold font-['Orbitron']">CME AUTOS</h3>
                <p className="text-xs text-gray-400">Premium Vehicle Import</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in premium vehicle import and export, connecting China and Nigeria with excellence since 2024.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/chinamadeeasy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="https://twitter.com/chinamadeeasy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="https://instagram.com/chinamadeeasy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                <i className="ri-instagram-fill text-lg"></i>
              </a>
              <a href="https://tiktok.com/@chinamadeeasy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                <i className="ri-tiktok-fill text-lg"></i>
              </a>
              <a href="https://wa.me/2347079208913" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                <i className="ri-whatsapp-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm sm:text-base">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              {offices.slice(0, 3).map((office, index) => (
                <div key={index} className="text-sm">
                  <h5 className="font-medium text-yellow-500 mb-1">{office.city}</h5>
                  <p className="text-gray-400 mb-1">{office.address}</p>
                  <p className="text-gray-400">{office.phone}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm">
                <i className="ri-mail-line mr-2"></i>
                info@cmeauto.com
              </p>
              <p className="text-gray-400 text-sm mt-2">
                <i className="ri-time-line mr-2"></i>
                Mon-Fri: 9AM-6PM, Sat: 9AM-4PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 CME AUTOS. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">Terms of Service</a>
              </div>
              <a 
                href="https://wa.me/2348110484217" 
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Developed by Chicano'shub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
