'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import taxiRates from '@/data/taxiRates.json';

const PriceCalculator = () => {
  const router = useRouter();
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState('');

  // Reset dependent fields when region changes
  useEffect(() => {
    setSelectedOrigin('');
    setSelectedDuration('');
    setSelectedVehicle('');
    setSelectedAddOns([]);
    setCalculatedPrice(null);
    setSelectedDestination('');
  }, [selectedRegion]);

  // Reset dependent fields when origin changes
  useEffect(() => {
    setSelectedDuration('');
    setSelectedVehicle('');
    setSelectedAddOns([]);
    setCalculatedPrice(null);
    setSelectedDestination('');
  }, [selectedOrigin]);

  // Calculate price when all required fields are selected
  useEffect(() => {
    if (selectedRegion && selectedOrigin && selectedDuration && selectedVehicle) {
      const region = taxiRates.regions[selectedRegion];
      const origin = region.origins[selectedOrigin];
      const rate = origin.rates.find(r => r.duration === selectedDuration);
      
      if (rate) {
        let basePrice = rate[selectedVehicle];
        
        // Add add-on costs
        const addOnCost = selectedAddOns.reduce((total, addOn) => {
          const addOnData = region.addOns.find(a => a.destination === addOn);
          return total + (addOnData ? addOnData[selectedVehicle] : 0);
        }, 0);
        
        setCalculatedPrice(basePrice + addOnCost);
        setSelectedDestination(rate.destination);
      }
    }
  }, [selectedRegion, selectedOrigin, selectedDuration, selectedVehicle, selectedAddOns]);

  const handleAddOnChange = (addOn) => {
    setSelectedAddOns(prev => 
      prev.includes(addOn) 
        ? prev.filter(item => item !== addOn)
        : [...prev, addOn]
    );
  };

  const handleBookNow = () => {
    if (!calculatedPrice) return;

    const region = taxiRates.regions[selectedRegion];
    const origin = region.origins[selectedOrigin];
    const rate = origin.rates.find(r => r.duration === selectedDuration);
    
    if (!rate) return;

    let basePrice = rate[selectedVehicle];
    const addOnCost = selectedAddOns.reduce((total, addOn) => {
      const addOnData = region.addOns.find(a => a.destination === addOn);
      return total + (addOnData ? addOnData[selectedVehicle] : 0);
    }, 0);

    const params = new URLSearchParams({
      region: selectedRegion,
      origin: selectedOrigin,
      duration: selectedDuration,
      destination: rate.destination,
      vehicleType: selectedVehicle,
      addOns: encodeURIComponent(JSON.stringify(selectedAddOns)),
      basePrice: basePrice.toString(),
      addOnPrice: addOnCost.toString(),
      totalPrice: (basePrice + addOnCost).toString()
    });

    router.push(`/booking?${params.toString()}`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getAvailableDurations = () => {
    if (!selectedRegion || !selectedOrigin) return [];
    const region = taxiRates.regions[selectedRegion];
    const origin = region.origins[selectedOrigin];
    return origin.rates.map(rate => rate.duration);
  };

  const getAvailableOrigins = () => {
    if (!selectedRegion) return [];
    const region = taxiRates.regions[selectedRegion];
    return Object.keys(region.origins);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get Your <span className="text-indigo-600">Instant Quote</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Calculate your taxi fare instantly by selecting your destination, duration, and vehicle type.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform hover:shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Form */}
            <div className="p-8 lg:p-12 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Select Your Preferences</h3>
              
              {/* Progress Indicator */}
              <div className="mb-8">
                {/* Mobile Layout - Stacked */}
                <div className="block sm:hidden">
                  <div className="space-y-3">
                    <div className={`flex items-center ${selectedRegion ? 'text-indigo-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedRegion ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        1
                      </div>
                      <span className="ml-3 text-sm font-medium">Choose Region</span>
                    </div>
                    <div className={`flex items-center ${selectedOrigin ? 'text-indigo-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedOrigin ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        2
                      </div>
                      <span className="ml-3 text-sm font-medium">Select Origin</span>
                    </div>
                    <div className={`flex items-center ${selectedDuration ? 'text-indigo-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedDuration ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        3
                      </div>
                      <span className="ml-3 text-sm font-medium">Pick Duration</span>
                    </div>
                    <div className={`flex items-center ${selectedVehicle ? 'text-indigo-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedVehicle ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        4
                      </div>
                      <span className="ml-3 text-sm font-medium">Choose Vehicle</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${(selectedRegion ? 25 : 0) + (selectedOrigin ? 25 : 0) + (selectedDuration ? 25 : 0) + (selectedVehicle ? 25 : 0)}%` 
                      }}
                    ></div>
                  </div>
                </div>

                {/* Desktop Layout - Horizontal */}
                <div className="hidden sm:block">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center ${selectedRegion ? 'text-indigo-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedRegion ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        1
                      </div>
                      <span className="ml-2 text-sm font-medium">Region</span>
                    </div>
                    <div className={`flex items-center ${selectedOrigin ? 'text-indigo-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedOrigin ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        2
                      </div>
                      <span className="ml-2 text-sm font-medium">Origin</span>
                    </div>
                    <div className={`flex items-center ${selectedDuration ? 'text-indigo-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedDuration ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        3
                      </div>
                      <span className="ml-2 text-sm font-medium">Duration</span>
                    </div>
                    <div className={`flex items-center ${selectedVehicle ? 'text-indigo-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedVehicle ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        4
                      </div>
                      <span className="ml-2 text-sm font-medium">Vehicle</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${(selectedRegion ? 25 : 0) + (selectedOrigin ? 25 : 0) + (selectedDuration ? 25 : 0) + (selectedVehicle ? 25 : 0)}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Region Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Choose Destination Region
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className={`w-full p-4 border-2 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white hover:border-indigo-300 ${
                    selectedRegion ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
                  }`}
                >
                  <option value="">Select Region</option>
                  {Object.entries(taxiRates.regions).map(([key, region]) => (
                    <option key={key} value={key}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Origin Selection */}
              {selectedRegion && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Starting From
                  </label>
                  <select
                    value={selectedOrigin}
                    onChange={(e) => setSelectedOrigin(e.target.value)}
                    className={`w-full p-4 border-2 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white hover:border-indigo-300 ${
                      selectedOrigin ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Select Origin</option>
                    {getAvailableOrigins().map(origin => (
                      <option key={origin} value={origin}>
                        {taxiRates.regions[selectedRegion].origins[origin].name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Duration Selection */}
              {selectedOrigin && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Trip Duration
                  </label>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className={`w-full p-4 border-2 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white hover:border-indigo-300 ${
                      selectedDuration ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Select Duration</option>
                    {getAvailableDurations().map(duration => (
                      <option key={duration} value={duration}>
                        {duration}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Vehicle Type Selection */}
              {selectedDuration && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Vehicle Type
                  </label>
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(taxiRates.vehicleTypes).map(([key, vehicle]) => (
                      <label key={key} className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md ${
                        selectedVehicle === key 
                          ? 'border-indigo-500 bg-indigo-50 shadow-md' 
                          : 'border-gray-200 bg-white hover:bg-white hover:border-indigo-300'
                      }`}>
                        <input
                          type="radio"
                          name="vehicle"
                          value={key}
                          checked={selectedVehicle === key}
                          onChange={(e) => setSelectedVehicle(e.target.value)}
                          className="mr-4 text-indigo-600 focus:ring-indigo-500 w-5 h-5"
                        />
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800">{vehicle.name}</div>
                          <div className="text-sm text-gray-600">{vehicle.capacity} • {vehicle.description}</div>
                        </div>
                        {selectedVehicle === key && (
                          <div className="ml-2">
                            <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Add-ons Selection */}
              {selectedVehicle && selectedRegion && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Additional Destinations (Optional)
                  </label>
                  <div className="space-y-3">
                    {taxiRates.regions[selectedRegion].addOns.map((addOn, index) => (
                      <label key={index} className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md ${
                        selectedAddOns.includes(addOn.destination)
                          ? 'border-indigo-500 bg-indigo-50 shadow-md' 
                          : 'border-gray-200 bg-white hover:bg-white hover:border-indigo-300'
                      }`}>
                        <input
                          type="checkbox"
                          checked={selectedAddOns.includes(addOn.destination)}
                          onChange={() => handleAddOnChange(addOn.destination)}
                          className="mr-4 text-indigo-600 focus:ring-indigo-500 w-5 h-5"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">{addOn.destination}</div>
                          <div className="text-sm text-indigo-600 font-semibold">
                            {formatPrice(addOn[selectedVehicle])}
                          </div>
                        </div>
                        {selectedAddOns.includes(addOn.destination) && (
                          <div className="ml-2">
                            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Price Display */}
            <div className="p-8 lg:p-12 bg-white">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Your Quote</h3>
              
              {calculatedPrice ? (
                <div className="space-y-8">
                  <div className="text-center bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 transform transition-all duration-500 hover:scale-105">
                    <div className="text-5xl font-bold text-indigo-600 mb-3 animate-pulse">
                      {formatPrice(calculatedPrice)}
                    </div>
                    <div className="text-gray-600 text-lg">Total Package Price</div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <h4 className="font-semibold text-gray-800 text-lg mb-4">Package Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Destination:</span>
                        <span className="font-semibold text-gray-800">{selectedDestination}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold text-gray-800">{selectedDuration}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Vehicle:</span>
                        <span className="font-semibold text-gray-800">
                          {taxiRates.vehicleTypes[selectedVehicle]?.name}
                        </span>
                      </div>
                      {selectedAddOns.length > 0 && (
                        <div className="pt-3">
                          <div className="text-sm text-gray-600 mb-2 font-medium">Add-ons included:</div>
                          {selectedAddOns.map((addOn, index) => (
                            <div key={index} className="text-sm text-indigo-600 font-medium">• {addOn}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
                    <h4 className="font-semibold text-emerald-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      What's Included:
                    </h4>
                    <ul className="text-sm text-emerald-700 space-y-2">
                      {taxiRates.inclusions.map((inclusion, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                          {inclusion}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={handleBookNow}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Book This Package
                  </button>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-lg">Select your preferences to see the price</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
