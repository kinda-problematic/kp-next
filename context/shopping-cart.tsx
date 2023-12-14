"use client";
import { createContext, useState, useContext } from "react";

interface ShoppingCartContextType {
  shoppingCart: any[];
  addToCart: (item: any | any[]) => void;
  removeFromCart: (item: any | any[]) => void;
}

// Define the shape of the context
export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  shoppingCart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// Define the provider component
export const ShoppingCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [shoppingCart, setShoppingCart] = useState<any[]>([]);

  const addToCart = (item: any) => {
    if (Array.isArray(item)) {
      const currentCart = [...shoppingCart, ...item];

      setShoppingCart(currentCart);
      localStorage.setItem("shoppingCart", JSON.stringify(currentCart));
    } else {
      const currentCart = [...shoppingCart];

      currentCart.push(item);
      setShoppingCart(currentCart);
      localStorage.setItem("shoppingCart", JSON.stringify(currentCart));
    }
  };

  const removeFromCart = (item: any) => {
    const currentCart = [...shoppingCart];

    if (Array.isArray(item)) {
      const filteredCart = currentCart.filter((prod) => prod.id !== item[0].id);
      setShoppingCart(filteredCart);
      localStorage.setItem("shoppingCart", JSON.stringify(filteredCart));
    } else {
      const filteredCart = currentCart.filter((prod) => prod !== item);
      const cartWithItem = currentCart.filter((prod) => prod === item);
      cartWithItem.pop();

      setShoppingCart([...filteredCart, ...cartWithItem]);
      localStorage.setItem(
        "shoppingCart",
        JSON.stringify([...filteredCart, ...cartWithItem])
      );
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, addToCart, removeFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Define the hook to use the context
export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};
