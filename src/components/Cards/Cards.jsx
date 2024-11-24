import { useEffect, useState } from "react";
import Card from "../Card/Card";
import './Cards.css';
import { toast, ToastContainer } from "react-toastify";
const Cards = ({ notify }) => {
  const [items, setItems] = useState([]);
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    fetch('/fakeData.json')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const handleliked = (like) => {
   if(liked.length >= items.length){
    toast.warn("you are already select max item ")
    return;
   }

    const newLiked = [...liked, like];
    setLiked(newLiked);
    toast.success("you are marked it")

    // Check after updating if all items are visited
   if(liked.length === items.length){
    toast("")
   }
  };

  return (
    <div>
      {/* Item and visited counts */}
      <div className="flex flex-col items-end justify-start container mx-auto text-xl">
        <h1 className="border-none shadow-md border-gray-700 w-24 inline px-4 my-2 py-1 rounded-md bg-green-400">
          item: {items.length}
        </h1>
        <h1 className="border-none shadow-md border-gray-700 px-4 my-2 py-1 rounded-md bg-green-400 inline">
          visited items: {liked.length}
        </h1>
      </div>

      {/* Cards grid */}
      <div className="cardscontainer container mx-auto  grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
        {items.map((item, idx) => (
          <Card
            notify={notify}
            handleliked={handleliked}
            key={idx}
            item={item}
          />
        ))}
      </div>
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
    </div>
  );
};

export default Cards;
