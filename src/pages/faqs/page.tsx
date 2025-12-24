import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does it take to receive my car after payment?',
      answer: 'The delivery timeline typically ranges from 4-8 weeks after full payment confirmation. This includes vehicle sourcing, shipping from China, customs clearance , and final delivery to your location. We provide real-time updates throughout the entire process to keep you informed at every stage.'
    },
    {
      question: 'How much do I need to pay upfront?',
      answer: 'We require a 80-100% deposit to initiate your vehicle order. This deposit secures your vehicle and covers initial procurement costs. The remaining balance is due before shipping. We offer flexible payment plans and accept various payment methods including bank transfers, online payments, and installment options for qualified customers.'
    },
    {
      question: 'What happens if the car I want is already in your showroom?',
      answer: 'If your desired vehicle is already available in our showroom, you can complete the purchase immediately! You\'ll benefit from faster delivery (typically 1-2 weeks), the ability to physically inspect the vehicle, immediate test drive availability, and potentially better pricing on in-stock units. Contact us to check current showroom inventory.'
    },
    {
      question: 'How can I track my car after ordering?',
      answer: 'We provide comprehensive tracking through multiple channels: a dedicated customer portal with real-time updates, SMS and email notifications at key milestones, WhatsApp updates with photos and videos of your vehicle, and direct communication with your assigned account manager. You\'ll receive tracking information immediately after your order is confirmed.'
    },
    {
      question: 'Are there hidden charges?',
      answer: 'Absolutely not! We believe in complete transparency. Our quotes include the vehicle cost, shipping fees, insurance, customs duties, port charges, and delivery to your location. The only additional costs would be optional services you choose (like extended warranty or custom modifications) or unforeseen government policy changes, which we\'ll communicate immediately.'
    },
    {
      question: 'Do you sell brand new cars or used cars?',
      answer: 'We specialize in both brand new and certified pre-owned vehicles. Our brand new cars come directly from authorized manufacturers with full warranties. Our used vehicles undergo rigorous 150-point inspections, come with detailed history reports, and include our quality guarantee. We clearly indicate the condition and provide complete documentation for every vehicle.'
    },
    {
      question: 'Where is CME Autos located?',
      answer: 'We have multiple strategic locations to serve you better: Our headquarters in Guangzhou, China for vehicle sourcing; Lagos office at Victoria Island for customer service; Abuja office in Central Business District; Onitsha branch at No. 17 ILODIBE service road AWADA, MCC junction (enclosing ILODIBE MOTORS LTD), Upper Iweka; and Nnewi & Asaba location at No.1 shop at Innoson Plaza, close to Organizer filling station, Nnewi roundabout. Visit any of our offices for personalized assistance.'
    },
    {
      question: 'Is it urgent to fix an oil leak?',
      answer: 'Yes, oil leaks should be addressed immediately! Even small leaks can lead to serious engine damage, reduced performance, environmental hazards, and potential fire risks. If you notice oil spots under your vehicle, low oil levels, or burning oil smell, contact our service center right away. We offer emergency repair services and can arrange immediate inspection. For vehicles under our warranty, repairs may be covered.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 sm:py-32 bg-cover bg-center pt-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Professional%20customer%20service%20representative%20helping%20client%20with%20automotive%20questions%2C%20modern%20consultation%20desk%2C%20friendly%20staff%20providing%20information%2C%20contemporary%20office%20environment%20with%20cars%20in%20background&width=1920&height=800&seq=50&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Find answers to common questions about importing vehicles with CME Autos
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                  >
                    <span className="text-lg sm:text-xl font-semibold pr-4">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      <i className="ri-arrow-down-s-line text-xl text-black"></i>
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <div className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Our team of automotive experts is ready to help you with any additional questions or concerns
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a 
                href="/contact" 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-mail-line text-2xl text-black"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm">info@cmeauto.com</p>
              </a>
              <a 
                href="tel:+2341234567890" 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-line text-2xl text-black"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm">+234 1 234 5678</p>
              </a>
              <a 
                href="https://wa.me/2341234567890" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-whatsapp-line text-2xl text-black"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm">Chat with us</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-2">15+</div>
              <p className="text-gray-600 text-sm sm:text-base">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-2">5000+</div>
              <p className="text-gray-600 text-sm sm:text-base">Vehicles Delivered</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-2">98%</div>
              <p className="text-gray-600 text-sm sm:text-base">Customer Satisfaction</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-2">24/7</div>
              <p className="text-gray-600 text-sm sm:text-base">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
