import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import { featuredCars } from '../../mocks/cars';

interface Car {
  id: number;
  name: string;
  brand: string;
  year: number;
  price: number;
  image: string;
  mileage: string;
  fuelType: string;
  transmission: string;
  status: string;
  location: string;
  description?: string;
}

export default function Admin() {
  const [cars, setCars] = useState<Car[]>(featuredCars);
  const [isAddingCar, setIsAddingCar] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('cards');
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    year: new Date().getFullYear(),
    price: 0,
    image: '',
    mileage: '',
    fuelType: '',
    transmission: '',
    status: 'Available',
    location: 'China Warehouse',
    description: ''
  });

  const brands = ['Toyota', 'Honda', 'Nissan', 'Hyundai', 'Mazda', 'Volkswagen', 'BMW', 'Mercedes-Benz', 'Audi', 'Lexus'];
  const fuelTypes = ['Petrol', 'Diesel', 'Hybrid', 'Electric'];
  const transmissions = ['Manual', 'Automatic', 'CVT'];
  const statuses = ['Available', 'Sold', 'Reserved', 'In Transit'];
  const locations = ['China Warehouse', 'Lagos Port', 'Abuja Showroom'];

  // Filter cars based on search and status
  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || car.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'year' || name === 'price' ? Number(value) : value
    }));
  };

  const generateCarImage = (brand: string, name: string) => {
    const carModel = name.toLowerCase().replace(/\s+/g, '-');
    const randomSeq = Math.floor(Math.random() * 100000);
    return `https://readdy.ai/api/search-image?query=$%7Bbrand%7D%20$%7Bname%7D%20luxury%20car%20premium%20vehicle%20in%20professional%20automotive%20showroom%20modern%20vehicle%20photography%20clean%20background%20premium%20car%20dealership%20setting%20bright%20studio%20lighting%20high%20quality%20detailed%20shot&width=400&height=300&seq=${randomSeq}&orientation=landscape`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingCar) {
      setCars(prev => prev.map(car => 
        car.id === editingCar.id 
          ? { 
              ...car, 
              ...formData,
              image: formData.image || generateCarImage(formData.brand, formData.name)
            }
          : car
      ));
      setEditingCar(null);
    } else {
      const newCar: Car = {
        id: Date.now(),
        ...formData,
        image: formData.image || generateCarImage(formData.brand, formData.name)
      };
      setCars(prev => [...prev, newCar]);
      setIsAddingCar(false);
    }

    setFormData({
      name: '',
      brand: '',
      year: new Date().getFullYear(),
      price: 0,
      image: '',
      mileage: '',
      fuelType: '',
      transmission: '',
      status: 'Available',
      location: 'China Warehouse',
      description: ''
    });
  };

  const handleEdit = (car: Car) => {
    setEditingCar(car);
    setFormData({
      name: car.name,
      brand: car.brand,
      year: car.year,
      price: car.price,
      image: car.image,
      mileage: car.mileage,
      fuelType: car.fuelType,
      transmission: car.transmission,
      status: car.status,
      location: car.location,
      description: car.description || ''
    });
    setIsAddingCar(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this car?')) {
      setCars(prev => prev.filter(car => car.id !== id));
    }
  };

  const cancelForm = () => {
    setIsAddingCar(false);
    setEditingCar(null);
    setFormData({
      name: '',
      brand: '',
      year: new Date().getFullYear(),
      price: 0,
      image: '',
      mileage: '',
      fuelType: '',
      transmission: '',
      status: 'Available',
      location: 'China Warehouse',
      description: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section with proper margin-top */}
      <section 
        className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden mt-16 sm:mt-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20professional%20car%20dealership%20office%20interior%20with%20luxury%20vehicles%2C%20contemporary%20automotive%20business%20workspace%2C%20glass%20windows%20showcasing%20premium%20cars%2C%20elegant%20administrative%20environment&width=1200&height=600&seq=admin-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-['Orbitron'] leading-tight">
              Admin <span className="text-yellow-500">Dashboard</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive vehicle inventory management system for CME AUTOS
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 sm:px-6 py-3 border border-white/20 min-w-[120px]">
                <div className="text-xl sm:text-2xl font-bold text-yellow-500">{cars.length}</div>
                <div className="text-xs sm:text-sm text-gray-200">Total Vehicles</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 sm:px-6 py-3 border border-white/20 min-w-[120px]">
                <div className="text-xl sm:text-2xl font-bold text-green-400">{cars.filter(car => car.status === 'Available').length}</div>
                <div className="text-xs sm:text-sm text-gray-200">Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 sm:px-6 py-3 border border-white/20 min-w-[120px]">
                <div className="text-xl sm:text-2xl font-bold text-blue-400">{cars.filter(car => car.status === 'In Transit').length}</div>
                <div className="text-xs sm:text-sm text-gray-200">In Transit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content with improved spacing */}
      <section className="py-8 sm:py-12 lg:py-16 -mt-8 sm:-mt-10 lg:-mt-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Enhanced Stats Cards with better responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">Total Vehicles</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">{cars.length}</p>
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <i className="ri-arrow-up-line mr-1"></i> Active inventory
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg ml-3">
                  <i className="ri-car-line text-lg sm:text-2xl text-white"></i>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">Available</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">{cars.filter(car => car.status === 'Available').length}</p>
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <i className="ri-check-line mr-1"></i> Ready for sale
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg ml-3">
                  <i className="ri-check-double-line text-lg sm:text-2xl text-white"></i>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">Sold</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">{cars.filter(car => car.status === 'Sold').length}</p>
                  <p className="text-xs text-red-600 mt-1 flex items-center">
                    <i className="ri-money-dollar-circle-line mr-1"></i> Completed sales
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg ml-3">
                  <i className="ri-hand-coin-line text-lg sm:text-2xl text-white"></i>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">In Transit</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">{cars.filter(car => car.status === 'In Transit').length}</p>
                  <p className="text-xs text-yellow-600 mt-1 flex items-center">
                    <i className="ri-truck-line mr-1"></i> Being shipped
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg ml-3">
                  <i className="ri-ship-line text-lg sm:text-2xl text-white"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Controls Section with improved responsive design */}
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-100">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-1">
                {/* Search */}
                <div className="relative flex-1 max-w-full sm:max-w-md">
                  <i className="ri-search-line absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base"></i>
                  <input
                    type="text"
                    placeholder="Search vehicles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-50 transition-all duration-200"
                  />
                </div>
                
                {/* Filter */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-50 min-w-[140px] sm:min-w-[150px]"
                >
                  <option value="all">All Status</option>
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                {/* View Mode Toggle */}
                <div className="flex rounded-xl bg-gray-100 p-1">
                  <button
                    onClick={() => setViewMode('cards')}
                    className={`px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium flex items-center justify-center ${
                      viewMode === 'cards' 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <i className="ri-grid-line mr-1 sm:mr-2"></i>
                    <span className="hidden sm:inline">Cards</span>
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium flex items-center justify-center ${
                      viewMode === 'table' 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <i className="ri-list-check mr-1 sm:mr-2"></i>
                    <span className="hidden sm:inline">Table</span>
                  </button>
                </div>
                
                {/* Add Car Button */}
                <Button 
                  onClick={() => setIsAddingCar(true)}
                  variant="primary"
                  className="whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base px-4 sm:px-6"
                >
                  <i className="ri-add-line mr-1 sm:mr-2"></i>
                  <span className="hidden sm:inline">Add Vehicle</span>
                  <span className="sm:hidden">Add</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Add/Edit Car Form with improved responsive spacing */}
          {isAddingCar && (
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-['Orbitron'] flex items-center">
                  {editingCar ? (
                    <>
                      <i className="ri-edit-box-line mr-2 sm:mr-3 text-yellow-500"></i>
                      <span className="hidden sm:inline">Edit Vehicle</span>
                      <span className="sm:hidden">Edit</span>
                    </>
                  ) : (
                    <>
                      <i className="ri-add-circle-line mr-2 sm:mr-3 text-yellow-500"></i>
                      <span className="hidden sm:inline">Add New Vehicle</span>
                      <span className="sm:hidden">Add Vehicle</span>
                    </>
                  )}
                </h3>
                <button
                  onClick={cancelForm}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <i className="ri-close-line text-lg sm:text-xl"></i>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {/* Left Column */}
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <i className="ri-car-line mr-2 text-yellow-500"></i>Vehicle Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-50 transition-all duration-200"
                        placeholder="e.g., Toyota Camry 2024"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <i className="ri-shield-star-line mr-2 text-yellow-500"></i>Brand *
                      </label>
                      <select
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-50"
                      >
                        <option value="">Select Brand</option>
                        {brands.map(brand => (
                          <option key={brand} value={brand}>{brand}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          <i className="ri-calendar-line mr-2 text-yellow-500"></i>Year *
                        </label>
                        <input
                          type="number"
                          name="year"
                          value={formData.year}
                          onChange={handleInputChange}
                          required
                          min="2000"
                          max="2030"
                          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          <i className="ri-money-dollar-circle-line mr-2 text-yellow-500"></i>Price (Naira) *
                        </label>
                        <input
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          required
                          min="0"
                          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <i className="ri-speed-line mr-2 text-yellow-500"></i>Mileage *
                      </label>
                      <input
                        type="text"
                        name="mileage"
                        value={formData.mileage}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-50"
                        placeholder="e.g., 0 km or 15,000 km"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <i className="ri-image-line mr-2 text-yellow-500"></i>Vehicle Image
                      </label>
                      <div className="space-y-4">
                        <input
                          type="url"
                          name="image"
                          value={formData.image}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-50"
                          placeholder="Enter image URL or leave empty for auto-generation"
                        />
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start">
                            <i className="ri-information-line text-blue-500 mr-2 mt-0.5"></i>
                            <div className="text-sm text-blue-700">
                              <p className="font-medium mb-1">Image Options:</p>
                              <ul className="space-y-1 text-xs">
                                <li>• Paste a direct image URL (recommended: 400x300px)</li>
                                <li>• Leave empty to auto-generate a professional car photo</li>
                                <li>• Supported formats: JPG, PNG, WebP</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {formData.image && (
                          <div className="mt-3">
                            <p className="text-sm font-medium text-gray-700 mb-2">Image Preview:</p>
                            <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden border">
                              <img 
                                src={formData.image} 
                                alt="Preview" 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.innerHTML = '<div class="flex items-center justify-center h-full text-red-500"><i class="ri-image-line mr-2"></i>Invalid image URL</div>';
                                  }
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <i className="ri-gas-station-line mr-2 text-yellow-500"></i>Fuel Type *
                      </label>
                      <select
                        name="fuelType"
                        value={formData.fuelType}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-50"
                      >
                        <option value="">Select Fuel Type</option>
                        {fuelTypes.map(fuel => (
                          <option key={fuel} value={fuel}>{fuel}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <i className="ri-settings-3-line mr-2 text-yellow-500"></i>Transmission *
                      </label>
                      <select
                        name="transmission"
                        value={formData.transmission}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-50"
                      >
                        <option value="">Select Transmission</option>
                        {transmissions.map(trans => (
                          <option key={trans} value={trans}>{trans}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          <i className="ri-checkbox-circle-line mr-2 text-yellow-500"></i>Status *
                        </label>
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-50"
                        >
                          {statuses.map(status => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          <i className="ri-map-pin-line mr-2 text-yellow-500"></i>Location *
                        </label>
                        <select
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-50"
                        >
                          {locations.map(location => (
                            <option key={location} value={location}>{location}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <i className="ri-file-text-line mr-2 text-yellow-500"></i>Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-gray-50 resize-none"
                    placeholder="Additional details about the vehicle..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="flex-1 sm:flex-none shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <i className="ri-save-line mr-2"></i>
                    {editingCar ? 'Update Vehicle' : 'Add Vehicle'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={cancelForm} 
                    className="flex-1 sm:flex-none"
                  >
                    <i className="ri-close-line mr-2"></i>
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Vehicle Display with enhanced responsive design */}
          {viewMode === 'cards' ? (
            /* Cards View with improved responsive grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {filteredCars.map((car) => (
                <div key={car.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        car.status === 'Available' ? 'bg-green-100 text-green-800' :
                        car.status === 'Sold' ? 'bg-red-100 text-red-800' :
                        car.status === 'Reserved' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {car.status}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                        ₦{car.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{car.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{car.brand} • {car.year}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <i className="ri-speed-line mr-2 text-yellow-500"></i>
                        {car.mileage}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="ri-gas-station-line mr-2 text-yellow-500"></i>
                        {car.fuelType}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="ri-settings-3-line mr-2 text-yellow-500"></i>
                        {car.transmission}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="ri-map-pin-line mr-2 text-yellow-500"></i>
                        {car.location}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-4 border-t">
                      <button
                        onClick={() => handleEdit(car)}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                      >
                        <i className="ri-edit-line mr-2"></i>Edit
                      </button>
                      <button
                        onClick={() => handleDelete(car.id)}
                        className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                      >
                        <i className="ri-delete-bin-line mr-2"></i>Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Table View with enhanced mobile responsiveness */
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <div className="min-w-full">
                  {/* Mobile Card View for small screens */}
                  <div className="block sm:hidden">
                    <div className="divide-y divide-gray-200">
                      {filteredCars.map((car) => (
                        <div key={car.id} className="p-4 hover:bg-gray-50 transition-colors duration-150">
                          <div className="flex items-start space-x-4">
                            <img 
                              src={car.image} 
                              alt={car.name}
                              className="w-20 h-20 object-cover rounded-xl shadow-sm flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-gray-900 text-sm truncate">{car.name}</div>
                              <div className="text-xs text-gray-500 mb-2">{car.brand} • {car.year}</div>
                              <div className="flex items-center justify-between mb-2">
                                <div className="text-lg font-bold text-gray-900">₦{car.price.toLocaleString()}</div>
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                  car.status === 'Available' ? 'bg-green-100 text-green-800' :
                                  car.status === 'Sold' ? 'bg-red-100 text-red-800' :
                                  car.status === 'Reserved' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-blue-100 text-blue-800'
                                }`}>
                                  {car.status}
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="text-xs text-gray-500">{car.location}</div>
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => handleEdit(car)}
                                    className="text-blue-600 hover:text-blue-800 p-1.5 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                  >
                                    <i className="ri-edit-line text-sm"></i>
                                  </button>
                                  <button
                                    onClick={() => handleDelete(car.id)}
                                    className="text-red-600 hover:text-red-800 p-1.5 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                  >
                                    <i className="ri-delete-bin-line text-sm"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Desktop Table View */}
                  <table className="hidden sm:table w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Vehicle</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Details</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Location</th>
                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredCars.map((car) => (
                        <tr key={car.id} className="hover:bg-gray-50 transition-colors duration-150">
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <img 
                                src={car.image} 
                                alt={car.name}
                                className="w-16 h-16 object-cover rounded-xl mr-4 shadow-sm"
                              />
                              <div>
                                <div className="font-semibold text-gray-900">{car.name}</div>
                                <div className="text-sm text-gray-500">{car.brand} • {car.year}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm">
                              <div className="text-gray-900">{car.mileage}</div>
                              <div className="text-gray-500">{car.fuelType} • {car.transmission}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-lg font-bold text-gray-900">₦{car.price.toLocaleString()}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                              car.status === 'Available' ? 'bg-green-100 text-green-800' :
                              car.status === 'Sold' ? 'bg-red-100 text-red-800' :
                              car.status === 'Reserved' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {car.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{car.location}</td>
                          <td className="px-6 py-4">
                            <div className="flex justify-center space-x-3">
                              <button
                                onClick={() => handleEdit(car)}
                                className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                title="Edit Vehicle"
                              >
                                <i className="ri-edit-line text-lg"></i>
                              </button>
                              <button
                                onClick={() => handleDelete(car.id)}
                                className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                title="Delete Vehicle"
                              >
                                <i className="ri-delete-bin-line text-lg"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {filteredCars.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <i className="ri-car-line text-4xl sm:text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">No vehicles found</h3>
              <p className="text-sm sm:text-base text-gray-500 px-4">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
