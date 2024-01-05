"use client";
import { createContext, useState, useContext, useEffect } from "react";

interface ShoppingCartContextType {
  shoppingCartLength: number;
  shoppingCart: any[];
  addToCart: (item: any | any[]) => void;
  removeFromCart: (item: any | any[]) => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  shoppingCartLength: 0,
  shoppingCart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const ShoppingCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [shoppingCart, setShoppingCart] = useState<any[]>([]);
  const [shoppingCartLength, setShoppingCartLength] = useState(0);

  const addToCart = (item: any) => {
    if (Array.isArray(item)) {
      const currentCart = [...shoppingCart, ...item];

      setShoppingCart(currentCart);
      setShoppingCartLength(currentCart.length);
      localStorage.setItem("shoppingCart", JSON.stringify(currentCart));
    } else {
      const currentCart = [...shoppingCart];

      currentCart.push(item);
      setShoppingCart(currentCart);
      localStorage.setItem("shoppingCart", JSON.stringify(currentCart));
    }
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("shoppingCart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setShoppingCart(parsedCart);
      setShoppingCartLength(parsedCart.length);
    }
  }, []);

  const removeFromCart = (item: any) => {
    if (item === "all") {
      // Clear the entire cart
      setShoppingCart([]);
      setShoppingCartLength(0);
      localStorage.removeItem("shoppingCart");
    } else if (Array.isArray(item)) {
      // Remove all items in the array
      const updatedCart = shoppingCart.filter(
        (cartItem) => !item.includes(cartItem)
      );
      setShoppingCart(updatedCart);
      setShoppingCartLength(updatedCart.length);
      localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
    } else {
      // Remove a single specific item
      const updatedCart = shoppingCart.filter((cartItem) => cartItem !== item);
      setShoppingCart(updatedCart);
      setShoppingCartLength(updatedCart.length);
      localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, addToCart, removeFromCart, shoppingCartLength }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  if (context === undefined || context === null) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }

  return context;
};
