import { create } from "zustand";
import { orderService } from "../services";
import { ICreateOrder, IOrder, IPageable } from "../types";

interface IOrderStore {
  orders: IOrder[];
  isLoading: boolean;
  createOrder: (order: ICreateOrder) => Promise<IOrder | null>;
  fetchOrders: (queryParams?: IPageable) => Promise<void>;
}

export const useOrderStore = create<IOrderStore>((set) => ({
  orders: [],
  isLoading: false,

  createOrder: async (order) => {
    set({ isLoading: true });
    try {
      const res = await orderService.create(order);
      if (!res?.result) return null;

      set((state) => ({
        orders: [res.result, ...state.orders],
      }));

      return res.result;
    } finally {
      set({ isLoading: false });
    }
  },

  fetchOrders: async (queryParams = { page: 0, size: 10 }) => {
    set({ isLoading: true });
    try {
      const res = await orderService.getMyOrders(queryParams);
      set({ orders: res?.result?.content ?? [] });
    } catch {
      set({ orders: [] });
    } finally {
      set({ isLoading: false });
    }
  },
}));
