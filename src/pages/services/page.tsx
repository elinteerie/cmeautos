import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { services } from '../../mocks/services';
import { Link } from 'react-router-dom';

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We discuss your requirements and provide expert advice on the best vehicles for your needs",
    icon: "ri-chat-3-line"
  },
  {
    step: "02", 
    title: "Vehicle Selection",
    description: "Choose from our extensive inventory or request specific models from our Chinese partners",
    icon: "ri-car-line"
  },
  {
    step: "03",
    title: "Quality Inspection",
    description: "Thorough inspection and documentation of your selected vehicle before shipment",
    icon: "ri-search-line"
  },
  {
    step: "04",
    title: "Shipping & Delivery",
    description: "Secure shipping with real-time tracking until your vehicle reaches your destination",
    icon: "ri-ship-line"
  }
];

const additionalServices = [
  {
    title: "Parts & Accessories",
    description: "Genuine auto parts and accessories sourced directly from manufacturers",
    icon: "ri-settings-3-line"
  },
  {
    title: "Warranty Services",
    description: "Comprehensive warranty coverage and maintenance support for all vehicles",
    icon: "ri-shield-check-line"
  },
  {
    title: "Trade-In Program",
    description: "Exchange your current vehicle for credit towards your new purchase",
    icon: "ri-exchange-line"
  },
  {
    title: "Fleet Solutions", 
    description: "Bulk vehicle procurement for businesses and government organizations",
    icon: "ri-truck-line"
  },
  {
    title: "Custom Orders",
    description: "Special order vehicles with specific configurations and modifications",
    icon: "ri-palette-line"
  },
  {
    title: "Training & Support",
    description: "Comprehensive training on vehicle features and maintenance procedures", 
    icon: "ri-graduation-cap-line"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 sm:py-32 bg-cover bg-center pt-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Professional%20automotive%20service%20center%20with%20modern%20equipment%2C%20car%20maintenance%20facility%2C%20automotive%20workshop%20with%20technicians%2C%20professional%20vehicle%20service%20environment&width=1920&height=800&seq=9&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive automotive solutions from import to delivery and beyond
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Complete Automotive Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              From vehicle sourcing to final delivery, we handle every aspect of your automotive needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <i className={`${service.icon} text-xl text-black`}></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm sm:text-base">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" className="whitespace-nowrap">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services to enhance your automotive experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${service.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">{service.description}</p>
                <Button variant="outline" size="sm" className="whitespace-nowrap">
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent steps from order to delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-xl font-bold text-black">{step.step}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"></div>
                )}
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your automotive needs and get a personalized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary" size="lg" className="whitespace-nowrap">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="whitespace-nowrap">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
