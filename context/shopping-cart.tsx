"use client";
import { createContext, useState, useContext } from "react";

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

  const removeFromCart = (item: any) => {
    const currentCart = [...shoppingCart];

    if (Array.isArray(item)) {
      const filteredCart = currentCart.filter((prod) => prod.id !== item[0].id);
      setShoppingCart(filteredCart);
      setShoppingCartLength(filteredCart.length);
      localStorage.setItem("shoppingCart", JSON.stringify(filteredCart));
    } else {
      const filteredCart = currentCart.filter((prod) => prod !== item);
      const cartWithItem = currentCart.filter((prod) => prod === item);
      cartWithItem.pop();

      setShoppingCart([...filteredCart, ...cartWithItem]);
      setShoppingCartLength([...filteredCart, ...cartWithItem].length);
      localStorage.setItem(
        "shoppingCart",
        JSON.stringify([...filteredCart, ...cartWithItem])
      );
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
