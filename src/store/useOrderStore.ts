import { create } from "zustand";
import { ICartItem } from "./useCartStore";
import { AddressData } from "./useAddressStore";

export interface IOrder {
  id: string;
  items: ICartItem[];
  address: AddressData;
  subtotal: number;
  shippingFee: number;
  tax: number;
  grandTotal: number;
  createdAt: Date;
}

interface IOrderStore {
  orders: IOrder[];
  addOrder: (order: Omit<IOrder, "id" | "createdAt">) => void;
}

export const useOrderStore = create<IOrderStore>((set) => ({
  orders: [],
  addOrder: (order) =>
    set((state) => ({
      orders: [
        { ...order, id: crypto.randomUUID(), createdAt: new Date() },
        ...state.orders,
      ],
    })),
}));
