import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";

export default function AddtoCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isOpen, setIsOpen] = useState(false); 
  
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="relative">

      <Link
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-slate-600 bg-slate-100px-4 py-2 rounded-md "
      > 
        <FaShoppingCart className="text-xl" />
        
        <span className="bg-red-500 mb-6 text-white text-xs font-bold px-2 py-1 rounded-full">
          {cartItems.length}
        </span>
      </Link>

{isOpen && (
  <div className="absolute  w-80 bg-white shadow-lg rounded-lg border p-4 z-50">

    {cartItems.length === 0 ? (
      <p className="text-center text-gray-700">Your cart is empty.</p>
    ) : (
      <>
        <ul className="max-h-72 overflow-y-auto space-y-3 z-50">
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center gap-3 border-b pb-3">

              <img
                src={item.imageUrl} 
                alt={item.title}
                className="w-14 h-14 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="text-sm text-gray-500 font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-xs">${item.price}</p>
                <p className="text-gray-600 text-xs">Qty: {item.quantity}</p>
              </div>


              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                <IoMdClose className="text-lg" />
              </button>
            </li>
          ))}
        </ul>


        <button className="bg-blue-600 text-white w-full py-2 mt-4 rounded-md hover:bg-blue-700">
          <Link to="/payment">
            Proceed to Checkout
          </Link>
        </button>
      </>
    )}
  </div>
)}
</div>
  );
}
