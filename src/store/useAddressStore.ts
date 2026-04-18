import { create } from "zustand";

export interface AddressData {
  id: string;
  name: string;
  phone: string;
  address: string;
}

interface IAddressStore {
  addresses: AddressData[];
  defaultId: string | null;
  addAddress: (data: Omit<AddressData, "id">) => void;
  updateAddress: (id: string, data: Omit<AddressData, "id">) => void;
  removeAddress: (id: string) => void;
  setDefault: (id: string) => void;
}

export const useAddressStore = create<IAddressStore>((set) => ({
  addresses: [],
  defaultId: null,

  addAddress: (data) =>
    set((state) => {
      const newAddress = { ...data, id: crypto.randomUUID() };
      return {
        addresses: [...state.addresses, newAddress],
        // ← tự động set mặc định nếu chưa có
        defaultId: state.defaultId ?? newAddress.id,
      };
    }),

  updateAddress: (id, data) =>
    set((state) => ({
      addresses: state.addresses.map((a) =>
        a.id === id ? { ...a, ...data } : a,
      ),
    })),

  removeAddress: (id) =>
    set((state) => {
      const filtered = state.addresses.filter((a) => a.id !== id);
      return {
        addresses: filtered,
        // ← nếu xóa cái đang mặc định thì chuyển sang cái đầu tiên
        defaultId:
          state.defaultId === id ? (filtered[0]?.id ?? null) : state.defaultId,
      };
    }),

  setDefault: (id) => set({ defaultId: id }),
}));
