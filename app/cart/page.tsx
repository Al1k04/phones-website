"use client";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.phone.price * item.quantity,
    0,
  );
  return (
    <div>
      {cart.map((item) => (
        <div
          key={item.phone.id}
          className="bg-gray-800 rounded-xl p-4 m-5 transition hover:scale-105 w-1/4 hover:shadow-2xl cursor-pointer duration-175 ease-in-out"
        >
          <img
            src={item.phone.photo}
            alt={item.phone.name}
            className="w-full h-64 object-contain rounded-lg"
          />
          <div className="flex gap-4 justify-between items-center mb-2">
            <h2 className="text-xl font-bold">{item.phone.name}</h2>
            <span className="text-md">{item.phone.model}</span>
          </div>
          <div className="flex justify-between">
            <p>{item.phone.price} ₾</p>

            <button onClick={() => decreaseQuantity(item.phone.id)}>-</button>
            <p>quantity — {item.quantity}</p>
            <button onClick={() => increaseQuantity(item.phone.id)}>+</button>
          </div>
          <button onClick={() => removeFromCart(item.phone.id)}>Remove</button>
        </div>
      ))}
      <p className="fixed bottom-5 right-5  bg-gray-800 p-3 rounded">
        Total: {total} ₾
      </p>
    </div>
  );
}
