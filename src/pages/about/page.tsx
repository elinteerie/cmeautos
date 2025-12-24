import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { Link } from 'react-router-dom';

export default function About() {
  const teamMembers = [
    {
      name: "High Chief Chizuroke Augustine Olisakwe",
      position: "CEO & Founder",
      image: "https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/4604cd688a0fdd715cb0ac571eb61789.jpeg",
      // image: "src/img/ceoimg.png",
      description: "15+ years experience in automotive import/export business"
    },
    {
      name: "ASHEMA TOCHUKWU VITUS",
      nickname: "Endless Og",
      position: "Operations Manager Lagos",
      image: "https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/8333f15faeee63352310c5c4f3c9f2ca.jpeg",
      description: "Oversees Lagos operations and ensures exceptional customer service"
    },
    {
      name: "OKWU EMMANUEL CHIBUEZE",
      position: "Manager Abuja",
      image: "https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/b0481aa8a3d00ded8f0a3c431e1c8041.jpeg",
      description: "Oversees Abuja operations and ensures exceptional customer service"
    },
    {
      name: "Okonkwo Chisom Vincent",
      nickname: "Chicano",
      position: "Chief Technology Officer",
      image: "https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/9c8f7f248c10a5a072c5311d7880f4e3.png",
      description: "In charge of website and app development, manages all tech activities of CME AUTOS"
    }
  ];

  const offices = [
    {
      city: "Guangzhou, China",
      address: "Shop 5215, Floor 5, GuoTai International Trade Market, No. 27, Guangyuan West Road, Yuexiu District, Guangzhou, China",
      phone: "+86 20 8888 9999",
      email: "china@cmeautos.com"
    },
    {
      city: "Lagos, Nigeria",
      address: "Plot No 3321 Along \"D\" Close, 2nd Avenue, Festac Town, Lagos State",
      phone: "+234 1 234 5678",
      email: "lagos@cmeautos.com"
    },
    {
      city: "Abuja, Nigeria",
      address: "FABUZILO Mall, Suite 404, 6th Avenue Gwarinpa Abuja",
      phone: "+234 9 876 5432",
      email: "abuja@cmeautos.com"
    },
    {
      city: "Onitsha, Anambra State",
      address: "No. 17 ILODIBE service road AWADA, MCC junction Pedestrian bridge Awada, enclosing (ILODIBE MOTORS LTD) Upper Iweka, Onitsha",
      phone: "+234 803 XXX XXXX",
      email: "onitsha@cmeautos.com"
    },
    {
      city: "Nnewi",
      address: "No.1 shop at Innoson Plaza close to Organizer filling station Nnewi roundabout",
      phone: "+234 803 XXX XXXX",
      email: "nnewi@cmeautos.com"
    }
  ];

  const milestones = [
    { year: "2024", event: "Company Founded", description: "CME AUTOS established with first office in Guangzhou, China" },
    { year: "2024", event: "Nigeria Expansion", description: "Opened first Nigerian office in Lagos" },
    { year: "2024", event: "Multi-Location", description: "Expanded operations with offices in Abuja, Onitsha, Nnewi and Asaba" },
    { year: "2024", event: "Digital Platform", description: "Launched online tracking and ordering system" }
  ];

  const values = [
    {
      icon: "ri-shield-check-line",
      title: "Quality First",
      description: "We never compromise on the quality of vehicles we import and export"
    },
    {
      icon: "ri-heart-line",
      title: "Customer Focus",
      description: "Our customers' satisfaction is at the heart of everything we do"
    },
    {
      icon: "ri-handshake-line",
      title: "Trust & Integrity",
      description: "Building lasting relationships through honest and transparent business practices"
    },
    {
      icon: "ri-rocket-line",
      title: "Innovation",
      description: "Continuously improving our services with latest technology and processes"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center pt-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20automotive%20company%20headquarters%20building%2C%20professional%20corporate%20architecture%2C%20glass%20facade%2C%20contemporary%20business%20building%2C%20automotive%20industry%20office%20complex&width=1920&height=800&seq=18&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About CME AUTOS</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted partner in vehicle import and export, connecting China and Nigeria
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2024, CME AUTOS began as a dynamic automotive trading company with a clear mission: 
                  to make quality Chinese vehicles accessible to customers in Nigeria and across Africa.
                </p>
                <p>
                  What started as a focused operation has rapidly grown into a leading vehicle import/export company 
                  with offices in China, Lagos, Abuja, Onitsha, Nnewi, and Asaba. We've built strong partnerships 
                  with premium automotive manufacturers worldwide.
                </p>
                <p>
                  Our success is built on three pillars: unwavering commitment to quality, transparent business 
                  practices, and exceptional customer service. Every vehicle we handle undergoes rigorous 
                  inspection, and every customer receives personalized attention throughout their journey with us.
                </p>
                <p>
                  Today, CME AUTOS stands as a bridge between Chinese automotive excellence and global markets, 
                  particularly serving the growing demand in Nigeria and West Africa.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="src/img/ceoimg.png"
                alt="CME AUTOS Team Member"
                className="rounded-lg shadow-lg object-cover object-top w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="src/img/ceoimg.png"
                alt="CME AUTOS Leadership Team"
                className="rounded-lg shadow-lg object-cover object-top w-full h-96"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Leadership</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our leadership team brings together extensive experience in automotive trading, 
                  logistics, and international business. With deep understanding of both Chinese 
                  manufacturing excellence and African market needs, we bridge cultures and markets.
                </p>
                <p>
                  From our headquarters in Guangzhou to our offices across Nigeria in Lagos, Abuja, 
                  Onitsha, Nnewi, and Asaba, our leaders ensure that every aspect of our operation 
                  maintains the highest standards of professionalism and customer service.
                </p>
                <p>
                  We believe in building lasting relationships with our customers, suppliers, and 
                  partners. This philosophy has made CME AUTOS a trusted name in the automotive 
                  import/export industry across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-target-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide seamless, reliable, and affordable vehicle import/export services while maintaining 
                the highest standards of quality and customer satisfaction. We strive to make car ownership 
                dreams accessible to everyone.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-eye-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become the leading automotive import/export company in Africa, known for our integrity, 
                innovation, and commitment to connecting global automotive markets with local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our company's growth and development
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-300 mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The dedicated professionals behind CME AUTOS success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover object-top"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                {member.nickname && (
                  <p className="text-gray-500 text-sm mb-1">({member.nickname})</p>
                )}
                <p className="text-yellow-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">2024</div>
              <div className="text-gray-300">Year Established</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">6</div>
              <div className="text-gray-300">Office Locations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">100%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join satisfied customers who trust CME AUTOS for their vehicle import needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inventory">
              <Button variant="primary" size="lg" className="whitespace-nowrap">
                Browse Inventory
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="whitespace-nowrap">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
