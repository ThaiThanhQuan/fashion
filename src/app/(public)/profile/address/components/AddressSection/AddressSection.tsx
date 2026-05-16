'use client'
import { useAddressStore } from "@/src/store/useAddressStore";
import AddressHeader from "./components/AddressHeader/AddressHeader";
import AddressList from "./components/AddressList/AddressList";
import { useEffect } from "react";


function AddressSection() {
    const { fetchAddresses } = useAddressStore();

    useEffect(() => {
        fetchAddresses();
    }, []);

    return ( 
        <div>
            <AddressHeader />
            <div className="mb-5">
                <AddressList />
            </div>
        </div>
     );
}

export default AddressSection;