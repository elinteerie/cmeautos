import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { featuredCars } from '../../mocks/cars';

export default function Inventory() {
  const [cars] = useState(featuredCars);
  const [filteredCars, setFilteredCars] = useState(featuredCars);
  const [filters, setFilters] = useState({
    brand: '',
    minPrice: '',
    maxPrice: '',
    year: '',
    fuelType: '',
    transmission: '',
    search: ''
  });

  useEffect(() => {
    let filtered = cars;

    if (filters.brand) {
      filtered = filtered.filter(car => car.brand === filters.brand);
    }

    if (filters.minPrice) {
      filtered = filtered.filter(car => car.price >= parseInt(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(car => car.price <= parseInt(filters.maxPrice));
    }

    if (filters.year) {
      filtered = filtered.filter(car => car.year === parseInt(filters.year));
    }

    if (filters.fuelType) {
      filtered = filtered.filter(car => car.fuelType === filters.fuelType);
    }

    if (filters.transmission) {
      filtered = filtered.filter(car => car.transmission === filters.transmission);
    }

    if (filters.search) {
      filtered = filtered.filter(car => 
        car.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        car.brand.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    setFilteredCars(filtered);
  }, [cars, filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const clearFilters = () => {
    setFilters({
      brand: '',
      minPrice: '',
      maxPrice: '',
      year: '',
      fuelType: '',
      transmission: '',
      search: ''
    });
  };

  const years = Array.from(new Set(cars.map(car => car.year))).sort((a, b) => b - a);
  const brands = Array.from(new Set(cars.map(car => car.brand))).sort();
  const fuelTypes = Array.from(new Set(cars.map(car => car.fuelType))).sort();
  const transmissions = Array.from(new Set(cars.map(car => car.transmission))).sort();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 sm:py-32 bg-cover bg-center pt-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20automotive%20showroom%20with%20luxury%20cars%20displayed%2C%20premium%20vehicle%20dealership%20interior%2C%20professional%20car%20exhibition%20hall%2C%20contemporary%20auto%20gallery&width=1920&height=800&seq=10&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Vehicle Inventory</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Browse our extensive collection of premium vehicles ready for import
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <h2 className="text-2xl font-bold mb-4 lg:mb-0">Filter Vehicles</h2>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Showing {filteredCars.length} of {cars.length} vehicles
                </span>
                <Button variant="outline" size="sm" onClick={clearFilters} className="whitespace-nowrap">
                  Clear Filters
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
              <div>
                <input
                  type="text"
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                  placeholder="Search cars..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                />
              </div>
              
              <div>
                <select
                  name="brand"
                  value={filters.brand}
                  onChange={handleFilterChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                >
                  <option value="">All Brands</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  name="year"
                  value={filters.year}
                  onChange={handleFilterChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                >
                  <option value="">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  name="fuelType"
                  value={filters.fuelType}
                  onChange={handleFilterChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                >
                  <option value="">All Fuel Types</option>
                  {fuelTypes.map(fuel => (
                    <option key={fuel} value={fuel}>{fuel}</option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  name="transmission"
                  value={filters.transmission}
                  onChange={handleFilterChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                >
                  <option value="">All Transmissions</option>
                  {transmissions.map(trans => (
                    <option key={trans} value={trans}>{trans}</option>
                  ))}
                </select>
              </div>

              <div>
                <input
                  type="number"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                  placeholder="Min Price"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <input
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  placeholder="Max Price"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCars.length === 0 ? (
            <div className="text-center py-12">
              <i className="ri-car-line text-6xl text-gray-400 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No vehicles found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more results</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-product-shop>
              {filteredCars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        car.status === 'Available' ? 'bg-green-100 text-green-800' :
                        car.status === 'Sold' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {car.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
                    <div className="text-2xl font-bold text-yellow-500 mb-4">
                      ₦{car.price.toLocaleString()}
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Year:</span>
                        <span className="font-medium">{car.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mileage:</span>
                        <span className="font-medium">{car.mileage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fuel:</span>
                        <span className="font-medium">{car.fuelType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Transmission:</span>
                        <span className="font-medium">{car.transmission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span className="font-medium">{car.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="primary" size="sm" className="flex-1 whitespace-nowrap">
                        View Details
                      </Button>
                      <a 
                        href="https://wa.me/2347079208913"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full whitespace-nowrap">
                          Inquire Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Service Features */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Our Inventory?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium vehicles with comprehensive service and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20automotive%20quality%20inspection%20process%2C%20vehicle%20inspection%20checklist%2C%20car%20quality%20control%2C%20automotive%20testing%20facility&width=300&height=200&seq=15&orientation=landscape"
                alt="Quality Inspection"
                className="w-full h-32 object-cover object-top rounded-lg mb-4"
              />
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-xl text-black"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
              <p className="text-gray-600 text-sm">Every vehicle undergoes rigorous quality inspection before listing</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Fast%20automotive%20shipping%20and%20delivery%20service%2C%20car%20transport%20logistics%2C%20vehicle%20delivery%20truck%2C%20automotive%20shipping%20process&width=300&height=200&seq=16&orientation=landscape"
                alt="Fast Delivery"
                className="w-full h-32 object-cover object-top rounded-lg mb-4"
              />
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-truck-line text-xl text-black"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Efficient shipping and delivery to your location worldwide</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20automotive%20customer%20support%20team%2C%20car%20dealership%20customer%20service%2C%20expert%20automotive%20consultation%2C%20friendly%20sales%20assistance&width=300&height=200&seq=17&orientation=landscape"
                alt="Expert Support"
                className="w-full h-32 object-cover object-top rounded-lg mb-4"
              />
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-line text-xl text-black"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600 text-sm">Dedicated support team to help you find your perfect vehicle</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
