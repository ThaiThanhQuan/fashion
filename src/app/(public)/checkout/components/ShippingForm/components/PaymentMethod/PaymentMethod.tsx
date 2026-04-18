"use client";
import { CreditCard, Wallet } from "lucide-react";
import { useState } from "react";

function PaymentMethod() {
  const [method, setMethod] = useState("card");
  return (
    <div className="space-y-8 ">
      <h2 className="text-2xl font-bold tracking-tight text-stone-900">
        Phương Thức Thanh Toán
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="group relative bg-white p-6 flex flex-col gap-4 cursor-pointer ring-1 ring-stone-900/10 hover:ring-stone-900/40 transition-all">
          <div className="flex justify-between items-center">
            <CreditCard />
            <input
              type="radio"
              name="payment"
              value="card"
              checked={method === "card"}
              onChange={() => setMethod("card")}
            />
          </div>
          <span className="text-sm font-bold tracking-tight">Thẻ Tín Dụng</span>
        </div>

        <div className="group relative bg-white p-6 flex flex-col gap-4 cursor-pointer ring-1 ring-stone-900/10 hover:ring-stone-900/40 transition-all">
          <div className="flex justify-between items-center">
            <Wallet />
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={method === "cash"}
              onChange={() => setMethod("cash")}
            />
          </div>
          <span className="text-sm font-bold tracking-tight">Tiền mặt</span>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
