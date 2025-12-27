import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate message length
    if (formData.message.length > 500) {
      setSubmitMessage('Message cannot exceed 500 characters.');
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d4tet49t85rh3e48p5fg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear submit message when user starts typing
    if (submitMessage) {
      setSubmitMessage('');
    }
  };

  const offices = [
    {
      city: "Guangzhou, China",
      address: "Room 1205, Tianhe Building, 123 Tianhe Road, Tianhe District, Guangzhou 510000",
      phone: "+234 707 920 8913",
      email: "china@cmeautos.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM (CST)",
      image: "https://readdy.ai/api/search-image?query=Modern%20office%20building%20in%20Guangzhou%20China%2C%20contemporary%20commercial%20architecture%2C%20glass%20facade%20building%2C%20professional%20business%20district%2C%20urban%20skyline%20with%20modern%20towers&width=400&height=300&seq=25&orientation=landscape"
    },
    {
      city: "Lagos, Nigeria",
      address: "Plot No 3321 Along \"D\" Close, 2nd Avenue, Festac Town, Lagos State",
      phone: "+234 816 973 6006",
      email: "lagos@cmeautos.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM (WAT)",
      image: "https://readdy.ai/api/search-image?query=Modern%20office%20building%20in%20Lagos%20Nigeria%2C%20contemporary%20commercial%20architecture%2C%20professional%20business%20district%2C%20urban%20development%2C%20glass%20and%20steel%20construction&width=400&height=300&seq=26&orientation=landscape"
    },
    {
      city: "Abuja, Nigeria",
      address: "FABUZILO Mall, Suite 404, 6th Avenue Gwarinpa Abuja",
      phone: "+234 703 393 5221",
      email: "abuja@cmeautos.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM (WAT)",
      image: "https://readdy.ai/api/search-image?query=Modern%20office%20building%20in%20Abuja%20Nigeria%2C%20contemporary%20commercial%20architecture%2C%20professional%20business%20center%2C%20capital%20city%20development%2C%20modern%20urban%20architecture&width=400&height=300&seq=27&orientation=landscape"
    },
    {
      city: "Onitsha, Anambra State",
      address: "No. 17 ILODIBE service road AWADA, MCC junction Pedestrian bridge Awada, enclosing (ILODIBE MOTORS LTD) Upper Iweka, Onitsha",
      phone: "+234 803 XXX XXXX",
      email: "onitsha@cmeautos.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM (WAT)",
      image: "https://readdy.ai/api/search-image?query=Modern%20automotive%20showroom%20in%20Onitsha%20Nigeria%2C%20professional%20car%20dealership%20building%2C%20commercial%20vehicle%20center%2C%20contemporary%20business%20facility&width=400&height=300&seq=28&orientation=landscape"
    },
    {
      city: "Nnewi",
      address: "No.1 shop at Innoson Plaza close to Organizer filling station Nnewi roundabout",
      phone: "+234 803 XXX XXXX",
      email: "nnewi@cmeautos.com",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM (WAT)",
      image: "https://readdy.ai/api/search-image?query=Modern%20commercial%20plaza%20with%20automotive%20shop%2C%20professional%20vehicle%20sales%20center%2C%20contemporary%20retail%20building%2C%20business%20facility%20in%20Nigeria&width=400&height=300&seq=29&orientation=landscape"
    }
  ];

  const contactMethods = [
    {
      icon: "ri-phone-line",
      title: "Call Us",
      description: "Speak directly with our experts",
      contact: "+234 707 920 8913",
      action: "Call Now",
      image: "https://readdy.ai/api/search-image?query=Professional%20customer%20service%20representative%20answering%20phone%20call%20in%20modern%20office%2C%20friendly%20automotive%20consultant%2C%20business%20communication%2C%20customer%20support&width=300&height=200&seq=40&orientation=landscape"
    },
    {
      icon: "ri-mail-line",
      title: "Email Us", 
      description: "Send us your questions anytime",
      contact: "info@cmeautos.com",
      action: "Send Email",
      image: "https://readdy.ai/api/search-image?query=Professional%20email%20communication%20concept%2C%20modern%20laptop%20with%20email%20interface%2C%20business%20correspondence%2C%20digital%20communication%20in%20office%20setting&width=300&height=200&seq=41&orientation=landscape"
    },
    {
      icon: "ri-chat-3-line",
      title: "Live Chat",
      description: "Get instant support online", 
      contact: "Available 24/7",
      action: "Start Chat",
      image: "https://readdy.ai/api/search-image?query=Live%20chat%20customer%20support%20interface%2C%20online%20help%20system%2C%20digital%20customer%20service%2C%20modern%20communication%20technology%2C%20responsive%20support&width=300&height=200&seq=42&orientation=landscape"
    },
    {
      icon: "ri-whatsapp-line",
      title: "WhatsApp",
      description: "Message us on WhatsApp",
      contact: "+234 707 920 8913", 
      action: "Message Us",
      image: "https://readdy.ai/api/search-image?query=WhatsApp%20business%20messaging%20on%20mobile%20phone%2C%20instant%20messaging%20for%20business%2C%20mobile%20communication%2C%20modern%20business%20chat%20interface&width=300&height=200&seq=43&orientation=landscape"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 sm:py-32 bg-cover bg-center pt-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Professional%20customer%20service%20center%20with%20modern%20office%20environment%2C%20automotive%20consultation%20desk%2C%20friendly%20staff%20helping%20customers%2C%20contemporary%20business%20meeting%20space&width=1920&height=800&seq=12&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with our automotive experts for personalized assistance
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Send us a Message</h2>
              
              {submitMessage && (
                <div className={`mb-4 p-3 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} data-readdy-form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="Vehicle Inquiry">Vehicle Inquiry</option>
                      <option value="Import Services">Import Services</option>
                      <option value="Shipping & Logistics">Shipping & Logistics</option>
                      <option value="After Sales Support">After Sales Support</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm resize-none"
                    placeholder="Tell us about your automotive needs..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full whitespace-nowrap"
                  disabled={isSubmitting}
                >
                  <i className="ri-send-plane-line mr-2"></i>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8 text-sm sm:text-base">
                  Ready to import your dream vehicle? Our team of automotive experts is here to help you 
                  every step of the way. Contact us through any of the methods below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg">
                    <img 
                      src={method.image} 
                      alt={method.title}
                      className="w-full h-24 sm:h-32 object-cover object-top rounded-lg mb-4"
                    />
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${method.icon} text-xl text-black`}></i>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-2">{method.description}</p>
                    <p className="font-medium text-sm">{method.contact}</p>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Offices</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our strategically located offices across China and Nigeria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={office.image} 
                  alt={`${office.city} Office`}
                  className="w-full h-48 sm:h-56 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">{office.city}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{office.address}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <i className="ri-phone-line text-yellow-500 mr-2"></i>
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-mail-line text-yellow-500 mr-2"></i>
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-time-line text-yellow-500 mr-2"></i>
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Connect With Us</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Follow us on social media for the latest updates, vehicle arrivals, and special offers
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a 
                href="https://facebook.com/chinamadeeasy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <i className="ri-facebook-fill text-3xl text-black"></i>
              </a>
              <a 
                href="https://instagram.com/chinamadeeasy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <i className="ri-instagram-fill text-3xl text-black"></i>
              </a>
              <a 
                href="https://twitter.com/chinamadeeasy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <i className="ri-twitter-fill text-3xl text-black"></i>
              </a>
              <a 
                href="https://tiktok.com/@chinamadeeasy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <i className="ri-tiktok-fill text-3xl text-black"></i>
              </a>
              <a 
                href="https://wa.me/2347079208913" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <i className="ri-whatsapp-fill text-3xl text-black"></i>
              </a>
              <a 
                href="https://youtube.com/@chinamadeeasy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <i className="ri-youtube-fill text-3xl text-black"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
