// store/useAddressStore.ts
import { create } from 'zustand';
import { addressService } from '@/src/services';
import { IAddress, IBackendRes, ICreateAddress } from '@/src/types';

interface AddressStore {
    addresses: IAddress[];
    fetchAddresses: () => Promise<void>;
    addAddress: (data: ICreateAddress) => Promise<IBackendRes<IAddress>>;
    deleteAddress: (id: string) => Promise<void>;
    updateAddress: (id: string, data: ICreateAddress) => Promise<void>;
}

export const useAddressStore = create<AddressStore>((set, get) => ({
    addresses: [],

    fetchAddresses: async () => {
        try {
            const res = await addressService.getMyAddresses();
            set({ addresses: res?.result?.content ?? [] }); 
        } catch {
            set({ addresses: [] });
        }
    },

    addAddress: async (data) => {
        const res = await addressService.create(data);

        if (res?.result) {
            set(state => ({
                addresses: [...state.addresses, res.result!]
            }));
        }

        return res;
    },

    updateAddress: async (id, data) => {
        const res = await addressService.update(id, data);
        if (res?.result) {
            set(state => ({
                addresses: state.addresses.map(addr =>
                    addr.id === id ? res.result! : addr
                )
            }));
        }
    },

    deleteAddress: async (id) => {
        await addressService.delete(id);
        set(state => ({
            addresses: state.addresses.filter(addr => addr.id !== id)
        }));
    }
}));