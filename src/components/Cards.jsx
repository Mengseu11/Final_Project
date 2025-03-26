import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice"; 

export default function Cards({ id, price, title, description, images ,image,}) {
  const dispatch = useDispatch();
  const imageUrl = image || images?.[0]   || "https://via.placeholder.com/150" ; 

  
  const handleAddToCart = (e) => {
    e.preventDefault(); 
    dispatch(addToCart({ id, price, title, description, images,image ,imageUrl}));
  };

  return (
    <div className="p-3 border rounded-xl  ">
    <a href="#" className="group relative block overflow-hidden" >
      <img
  src={imageUrl}
  alt={title}
  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 z-0"
/>


      <div className="relative  transition  p-6">
        <h3 className=" text-lg font-bold line-clamp-1">{title}</h3>
        <p className="mt-1.5 text-sm text-gray-400">${price}</p>

        <button
          onClick={handleAddToCart}
          className="mt-1 block w-full rounded-sm bg-slate-600 p-4 text-sm font-medium text-white transition hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </a>
    </div>
  );
}
