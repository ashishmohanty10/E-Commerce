import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StateProps {
  cart: Array<string>;
  addToCart: (id: number, cart: []) => void;
  deleteFromCart: (id: number, cart: []) => void;
}
