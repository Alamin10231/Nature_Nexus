import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import styles for toast notifications
import Description from "../Description/Description";
import "./Card.css";

const Card = ({ item, handleliked }) => {
  const { title, description, image, buttonText, type, rating, watchCount, category, id } = item; // Ensure `id` is used
  const [showdes, setDes] = useState(true);
  const [checklike, setChecklike] = useState(false);

  // Notify function
  const notify = () => {
    if (!checklike) {
      toast.success("Congratulations! 🎉");
    } else {
      toast.info("You already liked this item.");
    }
  };

  // Toggle description visibility
  const toggleDescription = () => {
    setDes(!showdes);
  };

  // Handle "like" button
  const toggleLike = () => {
    setChecklike(!checklike);
    notify(); // Trigger notification
  };

  return (
    <div className="cardcontainer  px-14 py-10 my-8 gap-10 shadow-lg rounded-md  text-center mx-auto bg-[#E6F4EA]">
      {/* ToastContainer for rendering toasts */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div>
        <img
          className="w-[350px] h-[280px] rounded-lg mx-auto mb-6 object-cover"
          src={image}
          alt="Not available"
        />

        <div className="bg-[#E6F4EA] rounded-lg shadow-md p-6 max-w-sm">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Title: {title}
          </h1>
          <button className="text-lg text-gray-600 mb-4" onClick={toggleDescription}>
            <span className="text-bold">{showdes ? "Hide Description" : "Show Description"}</span>
          </button>
          {!showdes && <Description showdes={showdes} />}

          <div className="flex items-center justify-between">
            <p className="text-md text-gray-600 mb-4">WatchCount: {watchCount}</p>
            <p className="text-md text-gray-600 mb-4">Category: {category}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-md text-gray-600">Rating: {rating}</p>
            <p className="text-md font-medium text-green-600">Type: {type}</p>
          </div>

          <div className="flex items-center justify-between  ">
            <button
              onClick={toggleLike}
              className="mt-2 px-2  py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              {checklike ? "Liked" : "Like it"}
            </button>

            <button
              className="mt-2 px-2 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              {buttonText}
            </button>

            <button
              onClick={() => handleliked(id)} // Pass unique ID to handleliked
              className="mt-2 px-2 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Mark Visited
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
