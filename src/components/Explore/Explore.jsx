


const ExploreNature = () => {
  const activities = [
    { title: 'Hiking Trails', description: 'Discover scenic hiking paths.', image: '/assests/hikinghills.jpg' },
    { title: 'Camping Spots', description: 'Find the best camping locations.', image: '/assests/Camping-Spots.jpg' },
    { title: 'Bird Watching', description: 'Explore serene spots for bird watching.', image: '/assests/BirdsFlying.jpg' },
    { title: 'Stargazing', description: 'Experience breathtaking night skies.', image: '/assests/stargazing.jpg' },
  ];

  return (
    <>
   
    <section className="bg-green-100 py-10">
      {/* Hero Section */}
      <div className="text-center px-5">
        <h1 className="text-4xl font-bold text-green-800">Explore Nature</h1>
        <p className="text-lg text-green-600 mt-3">
          Discover the beauty of nature and reconnect with the outdoors.
        </p>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 mt-8">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition p-5"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold text-green-700 mt-4">{activity.title}</h2>
            <p className="text-gray-600 mt-2">{activity.description}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-12">
        <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
          Plan Your Adventure
        </button>
      </div>
    </section>
    </>
  );
};

export default ExploreNature;
