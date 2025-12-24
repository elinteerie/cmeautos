import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { featuredCars, carBrands, carCategories } from '../../mocks/cars';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const filteredCars = featuredCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !selectedBrand || car.brand === selectedBrand;
    const matchesCategory = !selectedCategory || car.name.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesPrice = !priceRange || 
      (priceRange === 'under-25000' && car.price < 25000) ||
      (priceRange === '25000-35000' && car.price >= 25000 && car.price <= 35000) ||
      (priceRange === 'over-35000' && car.price > 35000);
    
    return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
  });

  // Popular affordable cars
  const popularCars = [
    {
      id: 'pop-1',
      name: 'Changan CS35 Plus',
      brand: 'Changan',
      price: 8500000,
      image: 'https://readdy.ai/api/search-image?query=White%20Changan%20CS35%20Plus%202024%20compact%20SUV%20affordable%20vehicle%20in%20modern%20showroom%20professional%20automotive%20photography%20clean%20white%20background%20bright%20lighting%20contemporary%20design%20elegant%20front%20three-quarter%20angle&width=400&height=300&seq=changan-cs35-popular-1&orientation=landscape',
      description: 'Compact SUV with modern features'
    },
    {
      id: 'pop-2',
      name: 'Geely Emgrand',
      brand: 'Geely',
      price: 7200000,
      image: 'https://readdy.ai/api/search-image?query=Silver%20Geely%20Emgrand%202024%20affordable%20sedan%20budget%20vehicle%20in%20showroom%20professional%20car%20photography%20clean%20white%20background%20premium%20lighting%20sleek%20design%20front%20angle%20view&width=400&height=300&seq=geely-emgrand-popular-2&orientation=landscape',
      description: 'Reliable sedan for daily commute'
    },
    {
      id: 'pop-3',
      name: 'MG 5',
      brand: 'MG',
      price: 9800000,
      image: 'https://readdy.ai/api/search-image?query=Blue%20MG%205%202024%20modern%20sedan%20affordable%20vehicle%20in%20elegant%20showroom%20professional%20automotive%20photography%20minimal%20white%20background%20bright%20lighting%20contemporary%20design%20front%20three-quarter%20angle&width=400&height=300&seq=mg-5-popular-3&orientation=landscape',
      description: 'Stylish sedan with great value'
    },
    {
      id: 'pop-4',
      name: 'Haval M6',
      brand: 'Haval',
      price: 10500000,
      image: 'https://readdy.ai/api/search-image?query=Gray%20Haval%20M6%202024%20family%20SUV%20affordable%20vehicle%20in%20modern%20car%20showroom%20professional%20photography%20clean%20white%20background%20premium%20lighting%20spacious%20design%20elegant%20front%20angle&width=400&height=300&seq=haval-m6-popular-4&orientation=landscape',
      description: 'Spacious family SUV'
    },
    {
      id: 'pop-5',
      name: 'Chery Tiggo 4 Pro',
      brand: 'Chery',
      price: 9200000,
      image: 'https://readdy.ai/api/search-image?query=Red%20Chery%20Tiggo%204%20Pro%202024%20compact%20SUV%20budget%20vehicle%20in%20showroom%20professional%20automotive%20photography%20clean%20white%20background%20bright%20lighting%20modern%20design%20front%20three-quarter%20view&width=400&height=300&seq=chery-tiggo-4-popular-5&orientation=landscape',
      description: 'Compact SUV with smart tech'
    },
    {
      id: 'pop-6',
      name: 'JAC S3',
      brand: 'JAC',
      price: 7800000,
      image: 'https://readdy.ai/api/search-image?query=White%20JAC%20S3%202024%20small%20SUV%20affordable%20vehicle%20in%20elegant%20showroom%20professional%20car%20photography%20minimal%20white%20background%20sophisticated%20lighting%20compact%20design%20front%20angle%20shot&width=400&height=300&seq=jac-s3-popular-6&orientation=landscape',
      description: 'Affordable compact crossover'
    },
    {
      id: 'pop-7',
      name: 'Dongfeng S30',
      brand: 'Dongfeng',
      price: 6900000,
      image: 'https://readdy.ai/api/search-image?query=Black%20Dongfeng%20S30%202024%20budget%20sedan%20affordable%20vehicle%20in%20modern%20showroom%20professional%20automotive%20photography%20clean%20white%20background%20bright%20lighting%20economical%20design%20elegant%20front%20view&width=400&height=300&seq=dongfeng-s30-popular-7&orientation=landscape',
      description: 'Budget-friendly sedan'
    },
    {
      id: 'pop-8',
      name: 'FAW Bestune B70',
      brand: 'FAW',
      price: 11200000,
      image: 'https://readdy.ai/api/search-image?query=Silver%20FAW%20Bestune%20B70%202024%20mid-size%20sedan%20affordable%20vehicle%20in%20car%20showroom%20professional%20photography%20minimal%20white%20background%20premium%20lighting%20elegant%20design%20front%20three-quarter%20angle&width=400&height=300&seq=faw-b70-popular-8&orientation=landscape',
      description: 'Mid-size sedan with comfort'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Fully Responsive */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://readdy.ai/api/search-image?query=ultra%20luxurious%20white%20car%20showroom%20interior%20pristine%20white%20marble%20floors%20gleaming%20white%20luxury%20vehicles%20premium%20white%20lighting%20elegant%20white%20pillars%20modern%20minimalist%20white%20architecture%20spotless%20showroom%20glass%20displays%20white%20supercars%20white%20sports%20cars%20white%20luxury%20sedans%20bright%20ambient%20lighting%20sophisticated%20white%20interior%20design%20polished%20white%20surfaces%20contemporary%20white%20exhibition%20space%20high%20end%20automotive%20gallery&width=1920&height=1080&seq=white-luxury-showroom-v2&orientation=landscape)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading - Responsive */}
            <div className="mb-6 sm:mb-8 md:mb-12">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8" style={{ fontFamily: '"Orbitron", sans-serif' }}>
                <span className="block mb-1 sm:mb-2">PREMIUM</span>
                <span className="block text-yellow-400 transform scale-105 mb-1 sm:mb-2">VEHICLE</span>
                <span className="block">SPECIALISTS</span>
              </h1>
              <div className="w-24 sm:w-32 md:w-40 lg:w-48 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            </div>
            
            {/* Subtitle - Responsive */}
            <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 sm:mb-6 md:mb-8 max-w-5xl mx-auto leading-relaxed font-light px-4">
                Experience luxury redefined. We bring the world's most exclusive automobiles directly to your doorstep with unmatched quality and service excellence.
              </p>
            </div>
            
            {/* Search Interface - Responsive */}
            <div className="max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <div className="bg-white/15 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border border-white/30 shadow-2xl">
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4" style={{ fontFamily: '"Orbitron", sans-serif' }}>
                    Find Your Dream Vehicle
                  </h3>
                  <div className="w-16 sm:w-20 h-1 bg-yellow-400 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full"></div>
                </div>

                {/* Search Bar - Responsive */}
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <div className="relative max-w-3xl mx-auto">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-white/70">
                      <i className="ri-search-line text-xl sm:text-2xl"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="Search luxury vehicles, brands, models..."
                      className="w-full pl-12 sm:pl-16 pr-4 sm:pr-8 py-4 sm:py-5 md:py-6 bg-white/20 border border-white/30 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-white/70 backdrop-blur-sm text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 hover:bg-white/25"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                {/* Filter Dropdowns - Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  <div className="relative">
                    <label className="block text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2">Brand</label>
                    <select 
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/20 border border-white/30 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-yellow-400 text-white backdrop-blur-sm text-sm sm:text-base transition-all duration-300 hover:bg-white/25 cursor-pointer"
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                    >
                      <option value="">All Premium Brands</option>
                      {carBrands.map(brand => (
                        <option key={brand} value={brand} className="text-black bg-white">{brand}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2">Category</label>
                    <select 
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/20 border border-white/30 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-yellow-400 text-white backdrop-blur-sm text-sm sm:text-base transition-all duration-300 hover:bg-white/25 cursor-pointer"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="">Vehicle Category</option>
                      {carCategories.map(category => (
                        <option key={category} value={category} className="text-black bg-white">{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2">Price Range</label>
                    <select 
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/20 border border-white/30 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-yellow-400 text-white backdrop-blur-sm text-sm sm:text-base transition-all duration-300 hover:bg-white/25 cursor-pointer"
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                    >
                      <option value="">All Prices</option>
                      <option value="under-25000" className="text-black bg-white">Under $25,000</option>
                      <option value="25000-35000" className="text-black bg-white">$25,000 - $35,000</option>
                      <option value="over-35000" className="text-black bg-white">Over $35,000</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Responsive & Properly Aligned */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 max-w-3xl mx-auto px-4">
              <Link to="/inventory" className="flex-1 sm:flex-initial">
                <Button variant="primary" className="w-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black whitespace-nowrap hover:scale-105 transition-all duration-300 shadow-2xl rounded-xl sm:rounded-2xl">
                  <i className="ri-car-line mr-2 sm:mr-3 text-xl sm:text-2xl"></i>
                  Explore Premium Collection
                </Button>
              </Link>
              <Link to="/contact" className="flex-1 sm:flex-initial">
                <Button variant="outline" className="w-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-bold text-white border-2 border-white hover:bg-white hover:text-black whitespace-nowrap hover:scale-105 transition-all duration-300 shadow-2xl rounded-xl sm:rounded-2xl">
                  <i className="ri-phone-line mr-2 sm:mr-3 text-xl sm:text-2xl"></i>
                  Get Exclusive Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats - Responsive */}
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20 w-full px-4">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-white max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/30 shadow-2xl hover:bg-white/25 transition-all duration-300 min-w-[100px] sm:min-w-[120px] md:min-w-[140px] text-center flex-1 max-w-[140px]">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1">5000+</div>
              <div className="text-xs sm:text-sm font-medium">Premium Vehicles</div>
            </div>
            <div className="bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/30 shadow-2xl hover:bg-white/25 transition-all duration-300 min-w-[100px] sm:min-w-[120px] md:min-w-[140px] text-center flex-1 max-w-[140px]">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1">15+</div>
              <div className="text-xs sm:text-sm font-medium">Years Excellence</div>
            </div>
            <div className="bg-white/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/30 shadow-2xl hover:bg-white/25 transition-all duration-300 min-w-[100px] sm:min-w-[120px] md:min-w-[140px] text-center flex-1 max-w-[140px]">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-1">50+</div>
              <div className="text-xs sm:text-sm font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Affordable Cars Section - NEW */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900" style={{ fontFamily: '"Orbitron", sans-serif' }}>
              Popular Affordable Cars
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Quality vehicles at unbeatable prices - Your dream car is now within reach
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10" data-product-shop>
            {popularCars.map((car) => (
              <div key={car.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-yellow-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-56 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Best Value Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-xl">
                      Best Value
                    </span>
                  </div>
                  
                  {/* Favorite Button */}
                  <div className="absolute top-4 left-4">
                    <button className="p-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-heart-line text-gray-700 hover:text-red-500 transition-colors text-base"></i>
                      </div>
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Vehicle Name and Brand */}
                  <div className="mb-4">
                    <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">{car.name}</h3>
                    <p className="text-gray-600 text-sm font-medium">{car.brand}</p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{car.description}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-yellow-600">₦{car.price.toLocaleString()}</div>
                    <p className="text-xs text-gray-500 font-medium mt-1">Starting price</p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="primary" 
                      className="flex-1 py-3 text-sm font-bold whitespace-nowrap hover:scale-105 transition-all duration-300 shadow-lg rounded-lg"
                      onClick={() => window.open('https://wa.me/2347079208913', '_blank')}
                    >
                      <i className="ri-message-3-line mr-2"></i>
                      Inquire Now
                    </Button>
                    <button 
                      onClick={() => window.open('https://wa.me/2347079208913', '_blank')}
                      className="px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-yellow-400 hover:bg-yellow-50 hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-phone-line text-gray-600 hover:text-yellow-600 transition-colors text-base"></i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/inventory">
              <Button variant="outline" className="px-10 py-4 text-lg font-bold whitespace-nowrap hover:scale-105 transition-all duration-300 shadow-xl border-2 hover:border-yellow-400 hover:bg-yellow-50 rounded-xl">
                View All Affordable Cars
                <i className="ri-arrow-right-line ml-3 text-lg"></i>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Premium Brands - Better Spacing */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900" style={{ fontFamily: '"Orbitron", sans-serif' }}>
              Leading Chinese Automotive Brands
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We partner with China's most innovative and prestigious automotive manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/2beec11cb41640114cdc8738cbe3b6c3.png" alt="SAIC Motor" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/c24180e69af0aa25b8ba1fa3c30daa2a.png" alt="BYD" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/c7e18c4ab8a81f7dea272102ae9be348.png" alt="Geely" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/16241c40e8736af8a73210b100f58444.png" alt="Great Wall Motors" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/6420e28d09de7f464a57f186c9c2f3e0.png" alt="Chery" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/bbb29c2de537060f2434d83174622dde.png" alt="NIO" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/2f2725c6df465cd407ffcd2174a1fbc8.png" alt="Xpeng Motors" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/cda5113b99246ab7be5718b509257706.png" alt="Li Auto" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/bea8f53d153e1ca8f2c630716d49c230.png" alt="Changan" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/87ef5ba648300b4a9f350caa0c19eca9.png" alt="Haval" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/503703dad7ed75cba497870a6b1451c9.jpeg" alt="MG Motor" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/742c71eafb1ebc50104393ecd1383ce7.png" alt="JAC Motors" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/b13a3705e98730e770f344b1185d33f3.png" alt="BAIC Motor" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/e8f635c4f538be3d2bc3fc98e1e6697f.png" alt="GAC Motor" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/f89416c47af9f5f9525287defd144e7f.png" alt="Dongfeng Motor" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="group text-center p-6 hover:scale-110 transition-all duration-500">
              <div className="bg-white rounded-3xl shadow-xl p-8 group-hover:shadow-2xl group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-yellow-100 transition-all duration-500 border border-gray-100 hover:border-yellow-200 flex items-center justify-center h-32">
                <img src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/da22f8d8f5aa4b97895ab0a1979cedc5.png" alt="Hongqi" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Premium Collection - Enhanced Cards */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900" style={{ fontFamily: '"Orbitron", sans-serif' }}>
              Featured Premium Collection
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our curated selection of luxury vehicles, each one handpicked for discerning clientele
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12" data-product-shop>
            {filteredCars.slice(0, 6).map((car) => (
              <div key={car.id} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-yellow-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
                      {car.status}
                    </span>
                  </div>
                  
                  {/* Favorite Button */}
                  <div className="absolute top-6 left-6">
                    <button className="p-3 bg-white/95 backdrop-blur-sm rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-heart-line text-gray-700 hover:text-red-500 transition-colors text-lg"></i>
                      </div>
                    </button>
                  </div>
                </div>
                
                <div className="p-8">
                  {/* Vehicle Name and Price */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex-1">
                      <h3 className="font-bold text-2xl text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">{car.name}</h3>
                      <p className="text-gray-600 text-lg font-medium">{car.brand}</p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-3xl font-bold text-yellow-600">₦{car.price.toLocaleString()}</div>
                      <p className="text-sm text-gray-500 font-medium">Starting from</p>
                    </div>
                  </div>
                  
                  {/* Vehicle Specifications */}
                  <div className="grid grid-cols-2 gap-6 text-base text-gray-600 mb-8">
                    <div className="flex items-center group-hover:text-gray-800 transition-colors">
                      <div className="w-6 h-6 flex items-center justify-center mr-4">
                        <i className="ri-calendar-line text-yellow-500 text-lg"></i>
                      </div>
                      <span className="font-semibold">{car.year}</span>
                    </div>
                    <div className="flex items-center group-hover:text-gray-800 transition-colors">
                      <div className="w-6 h-6 flex items-center justify-center mr-4">
                        <i className="ri-gas-station-line text-yellow-500 text-lg"></i>
                      </div>
                      <span className="font-semibold">{car.fuelType}</span>
                    </div>
                    <div className="flex items-center group-hover:text-gray-800 transition-colors">
                      <div className="w-6 h-6 flex items-center justify-center mr-4">
                        <i className="ri-speed-line text-yellow-500 text-lg"></i>
                      </div>
                      <span className="font-semibold">{car.mileage}</span>
                    </div>
                    <div className="flex items-center group-hover:text-gray-800 transition-colors">
                      <div className="w-6 h-6 flex items-center justify-center mr-4">
                        <i className="ri-settings-line text-yellow-500 text-lg"></i>
                      </div>
                      <span className="font-semibold">{car.transmission}</span>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center text-base text-gray-500 mb-8">
                    <div className="w-6 h-6 flex items-center justify-center mr-4">
                      <i className="ri-map-pin-line text-yellow-500 text-lg"></i>
                    </div>
                    <span className="font-medium">{car.location}</span>
                  </div>
                  
                  {/* Action Buttons - Better Spacing */}
                  <div className="flex gap-4">
                    <Button variant="primary" className="flex-1 py-4 text-base font-bold whitespace-nowrap hover:scale-105 transition-all duration-300 shadow-xl rounded-xl">
                      <i className="ri-eye-line mr-2"></i>
                      View Details
                    </Button>
                    <button 
                      onClick={() => window.open('https://wa.me/2347079208913', '_blank')}
                      className="px-6 py-4 border-2 border-gray-200 rounded-xl hover:border-yellow-400 hover:bg-yellow-50 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-phone-line text-gray-600 hover:text-yellow-600 transition-colors text-lg"></i>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Link to="/inventory">
              <Button variant="outline" className="px-12 py-5 text-xl font-bold whitespace-nowrap hover:scale-105 transition-all duration-300 shadow-xl border-2 hover:border-yellow-400 hover:bg-yellow-50 rounded-2xl">
                Explore Complete Collection
                <i className="ri-arrow-right-line ml-3 text-xl"></i>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose CME AUTOS */}
      <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900" style={{ fontFamily: '"Orbitron", sans-serif' }}>
              Why Choose CME AUTOS?
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience unmatched excellence in premium vehicle importation with our comprehensive services
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {[
              {
                icon: 'ri-shield-check-line',
                title: 'Quality Assurance',
                description: 'Every vehicle undergoes rigorous 127-point inspection and certification processes to ensure premium quality'
              },
              {
                icon: 'ri-truck-line',
                title: 'Global Logistics',
                description: 'Seamless worldwide shipping network with real-time tracking, comprehensive insurance, and white-glove delivery'
              },
              {
                icon: 'ri-customer-service-2-line',
                title: '24/7 VIP Support',
                description: 'Dedicated premium customer service team with multilingual support available around the clock'
              },
              {
                icon: 'ri-money-dollar-circle-line',
                title: 'Competitive Pricing',
                description: 'Best market rates with transparent pricing, no hidden fees, and flexible financing options available'
              },
              {
                icon: 'ri-file-shield-2-line',
                title: 'Legal Compliance',
                description: 'Complete documentation handling and full compliance with international trade regulations and customs'
              },
              {
                icon: 'ri-time-line',
                title: 'Express Delivery',
                description: 'Efficient processing and delivery within promised timeframes with expedited shipping options'
              }
            ].map((feature, index) => (
              <div key={index} className="group text-center p-6 sm:p-8 lg:p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200 hover:-translate-y-2">
                <div className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                  <i className={`${feature.icon} text-2xl sm:text-3xl lg:text-4xl text-black`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8" style={{ fontFamily: '"Orbitron", sans-serif' }}>
            Ready to Drive Your Dream Car?
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-black mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Connect with our luxury vehicle specialists today and let us help you acquire the perfect vehicle from anywhere in the world
          </p>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center max-w-2xl mx-auto">
            <Button variant="outline" className="px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-semibold border-2 border-black text-black hover:bg-black hover:text-white whitespace-nowrap transition-all duration-300 shadow-2xl hover:scale-105">
              <i className="ri-phone-line mr-3 text-xl"></i>
              Call: +234 123 456 7890
            </Button>
            <Button variant="primary" className="px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-semibold bg-black text-white hover:bg-gray-900 hover:shadow-2xl whitespace-nowrap transition-all duration-300 hover:scale-105">
              <i className="ri-mail-line mr-3 text-xl"></i>
              Request Premium Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
