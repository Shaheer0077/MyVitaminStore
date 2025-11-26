import { useCart } from "../context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const SideCart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQty } = useCart();
  const [showInstructions, setShowInstructions] = useState(false);
  const estimatedTotal = cart.reduce((total,item) => total + item.price*item.qty,0)

  return (
    <div
      className={`fixed inset-0 bg-black/40 transition-all duration-300 z-999 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white transition-transform duration-300 shadow-2xl flex flex-col z-1000 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >

        {/* HEADER */}
        <div className="flex justify-between items-center p-5 border-b border-[#81818133]">
          <h2 className="text-xl font-normal tracking-wide">SHOPPING CART</h2>
          <button onClick={onClose} className="cursor-pointer"><IoClose size={28}/></button>
        </div>

        {/* 🔹 Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-5">
          {cart.map((item) => (
            <div key={item.id} className="flex items-start gap-4 mb-7">
              <img src={item.image} alt="" className="w-20 h-20 object-contain" />

              <div className="flex-1">
                <p className="font-medium leading-5">{item.title}</p>
                <p className="text-sm text-gray-500 mt-1">{item.size || "90 Capsules"}</p>

                <div className="flex items-center gap-2 mt-1">
                  <span className="line-through text-gray-400">{item.oldPrice || "PKR 3,990"}</span>
                  <span className="text-red-500 font-semibold">{item.price}</span>
                </div>

                <div className="mt-3 border w-fit px-4 py-1.5 flex items-center gap-5 text-lg">
                  <FaMinus size={14} className="cursor-pointer" onClick={()=>{
                    if(item.qty>1){
                      updateQty(item.id,item.qty-1)
                    }
                    else{
                      removeFromCart(item.id)
                    }
                  }} />
                  <span>{item.qty}</span>
                  <FaPlus size={14} className="cursor-pointer" onClick={()=>{
                    updateQty(item.id,item.qty+1)
                  }} />
                </div>
              </div>

              <button className="text-gray-500 hover:text-red-500 cursor-pointer">
                <FaTrash size={15} onClick={()=> removeFromCart(item.id)} />
              </button>
            </div>
          ))}
        </div>

        {/* 🔹 FIXED BOTTOM SECTION */}
        <div className="border-t border-[#81818133]  px-5 pt-3 pb-5 bg-white">
          
          {/* Special Instruction */}
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="border-b border-[#81818133] w-full flex justify-between items-center text-gray-600 py-2"
          >
            <span>Order special instructions</span>
            <span>{showInstructions ? "▲" : "▼"}</span>
          </button>

          {showInstructions && (
            <textarea
              rows={3}
              placeholder="Write instructions..."
              className="w-full mt-2 p-3 border rounded-md outline-none"
            />
          )}

          {/* Total */}
          <div className="flex justify-between text-lg font-normal py-4">
            <span className="text-[#222222]">Estimated total</span>
            <span className="font-normal text-[#222222BF]">{estimatedTotal.toLocaleString()}</span>
          </div>

          <p className="text-sm text-gray-500 -mt-2 mb-3">
            Shipping calculated at checkout.
          </p>

          {/* Buttons */}
          <button className="w-full py-1 bg-[#40B69B] hover:bg-[#327764] text-white text-normal font-semibold  mb-4 cursor-pointer">
            VIEW CART
          </button>
          <button className="w-full py-1 bg-[#40B69B] hover:bg-[#327764] text-white text-normal font-semibold cursor-pointer">
            CHECK OUT
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default SideCart;
