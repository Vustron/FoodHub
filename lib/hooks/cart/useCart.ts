import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/lib/helpers/types";
import { toast } from "react-hot-toast";
import { create } from "zustand";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  updateItemQuantity: (id: string | undefined, qty: number) => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItems = currentItems.find((item) => item.id === data.id);

        if (existingItems) {
          return toast("Item already in the cart");
        }

        set({ items: [...get().items, data] });
        toast.success("item added to the cart");
      },

      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removed from the cart");
      },

      removeAll: () => {
        set({ items: [] });
      },

      updateItemQuantity: (id: string | undefined, qty: number) => {
        const updatedItems = get().items.map((item) =>
          item.id === id ? { ...item, qty } : item,
        );

        set({ items: updatedItems });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
