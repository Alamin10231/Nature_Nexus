

const NewsLetter = () => {
    return (
        <div>
               {/* Newsletter Section */}
      <div className="mt-8 text-center py-20">
        <h3 className="text-3xl font-semibold text-Gray-900 ">Stay Updated</h3>
        <p className="text-gray-900 mt-2 text-xl py-3">Subscribe to our newsletter for the latest updates and news from Nature Nexus.</p>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg text-gray-800 w-1/2 md:w-1/4"
          />
          <button className="bg-green-400 text-gray-900 px-4 py-2 rounded-lg ml-2">
            Subscribe
          </button>
        </div>
      </div>
        </div>
    );
};

export default NewsLetter;