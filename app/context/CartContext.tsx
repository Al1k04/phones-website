"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { Phone } from "../types/phone";
import { useEffect } from "react";

type CartContextType = {
  cart: CartItem[];
  addToCart: (phone: Phone) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

type CartItem = {
  phone: Phone;
  quantity: number;
};

export const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (phone: Phone) => {
    const existing = cart.find((item) => item.phone.id === phone.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.phone.id === phone.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { phone, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id: number) => {
    setCart(
      cart.map((item) =>
        item.phone.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.phone.id !== id));
  };

  const decreaseQuantity = (id: number) => {
    const item = cart.find((i) => i.phone.id === id);
    if (item && item.quantity === 1) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) =>
          item.phone.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
