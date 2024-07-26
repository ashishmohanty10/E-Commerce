import { ProductsProp } from "@/types/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface CartState {
  products: Array<ProductsProp & { quantity: number }>;
  addToCart: (product: ProductsProp) => void;
  deleteFromCart: (product: ProductsProp) => void;
  clearCart: (product: ProductsProp) => void;
  items: number;
}
