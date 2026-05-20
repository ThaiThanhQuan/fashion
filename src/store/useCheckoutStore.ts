import { create } from "zustand";

export type CheckoutPaymentMethod = "COD" | "BANK_TRANSFER";

interface CheckoutStore {
  paymentMethod: CheckoutPaymentMethod;
  setPaymentMethod: (paymentMethod: CheckoutPaymentMethod) => void;
}

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  paymentMethod: "COD",
  setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
}));
