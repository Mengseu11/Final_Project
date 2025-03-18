import { useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateCartQuantity } from "../features/cart/cartSlice";
import { calculateTotal } from "../features/payment/paymentSlice";

export default function Payment() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const { subtotal, discount, deliveryFee, total } = useSelector((state) => state.payment);

  useEffect(() => {
    const newSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    dispatch(calculateTotal({ subtotal: newSubtotal, discount }));
  }, [cartItems, discount, dispatch]);

  const handleQuantityChange = (title, type) => {
    dispatch(
      updateCartQuantity({
        title,
        quantityChange: type === "increase" ? 1 : -1, // Increase or decrease
      })
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">My Shopping Cart</h2>

      {/* Table Header */}
      <div className="grid grid-cols-5 text-gray-600 font-medium pb-2 border-b">
        <p className="col-span-3">Product</p>
        <p>Quantity</p>
        <p>Price</p>
      </div>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div key={item.id} className="grid grid-cols-5 items-center py-4 border-b">
          <div className="flex gap-4 col-span-2">
            <img src={item.imageUrl} alt={item.title} className="w-12 h-12 rounded-md" />
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-xs text-gray-500">Product ID: {item.id}</p>
            </div>
          </div>

          <p>{item.size}</p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(item.title, "decrease")}
              className="p-1 border rounded bg-gray-200"
            >
              <FaMinus />
            </button>
            <span className="px-3">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.title, "increase")}
              className="p-1 border rounded bg-gray-200"
            >
              <FaPlus />
            </button>
          </div>

          <p>${item.price * item.quantity}</p>
        </div>
      ))}

      {/* Summary Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <p className="text-gray-600">Discount</p>
        <p className="text-right">${discount.toFixed(2)}</p>
        <p className="text-gray-600">Delivery</p>
        <p className="text-right">${deliveryFee.toFixed(2)}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-2 font-bold">
        <p className="text-lg">Subtotal</p>
        <p className="text-right">${subtotal.toFixed(2)}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-2 text-xl font-bold">
        <p>Total</p>
        <p className="text-right ">${total.toFixed(2)}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <a href="/men" className="px-6 py-3 bg-gray-500 rounded-lg text-white">
          Back to Shop
        </a>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
}
