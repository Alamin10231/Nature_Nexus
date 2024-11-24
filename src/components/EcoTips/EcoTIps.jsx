const EcoTips = () => {
    return (
      <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center pt-20 px-6">
        <h1 className="text-4xl font-bold text-blue-800">Eco Tips for a Sustainable Future</h1>
        <p className="mt-4 text-lg text-blue-600 text-center">
          Small changes in our daily lives can make a big impact on the environment. Here are some eco-friendly tips to help you live sustainably.
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Tip 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-green-700">Reduce Plastic Usage</h3>
            <p className="text-gray-600 mt-4">
              Minimize the use of single-use plastic by opting for reusable items like bags, bottles, and containers.
            </p>
          </div>
  
          {/* Tip 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-green-700">Save Water</h3>
            <p className="text-gray-600 mt-4">
              Turn off the tap while brushing your teeth and consider installing water-saving devices to reduce consumption.
            </p>
          </div>
  
          {/* Tip 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-green-700">Switch to Renewable Energy</h3>
            <p className="text-gray-600 mt-4">
              If possible, consider switching to renewable energy sources like solar or wind to reduce your carbon footprint.
            </p>
          </div>
  
          {/* Tip 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-green-700">Compost Organic Waste</h3>
            <p className="text-gray-600 mt-4">
              Composting helps divert organic waste from landfills and creates nutrient-rich soil for gardening.
            </p>
          </div>
  
          {/* Tip 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-green-700">Choose Sustainable Products</h3>
            <p className="text-gray-600 mt-4">
              Opt for eco-friendly, sustainable products made from recycled materials or those that have a minimal environmental impact.
            </p>
          </div>
  
          {/* Tip 6 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-green-700">Use Public Transport</h3>
            <p className="text-gray-600 mt-4">
              Reduce your carbon footprint by using public transport, carpooling, or biking instead of driving alone.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default EcoTips;
  