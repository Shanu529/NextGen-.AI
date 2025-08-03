import React, { useContext } from "react";
import { assets, plans } from "../assets/assets/assets";
import AppContextProvider, { ContextApp } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function BuyPage() {
  const { user, token, backendUrl, setShowLogin, loadCredit } =
    useContext(ContextApp);

  const navigate = useNavigate();
  const initPay = async (order) => {
    const option = {
      key: import.meta.env.VITE_TEST_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      receipt: order.receipt,
      order_id: order.id,
      handler: async (response) => {
        console.log(response);
      },
    };
    const rzp = new window.Razorpay(option);

    rzp.open();
  };

  const paymentRazorPay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
      }
      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",

        { planId },
        { headers: { token } }
      );

      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      toast.error(error.message)
    }
  };
  return (
    <>
      <div className="text-center">
        <button className="bg-slate-400 px-10 py-2 rounded-full text-sm">
          Our Plans
        </button>
        <h1 className="px-10 py-2 text-gray-700 font-medium text-2xl">
          Choose the plan{" "}
        </h1>
      </div>
      <div className="flex justify-center gap-5 py-40">
        {plans.map((items, index) => (
          <div className="bg-white p-10 rounded-md hover:scale-105 transition-all duration-700">
            <img className="w-7 py-2" src={assets.logo_icon} alt="" />
            <p className="text-sm py-2">{items.id}</p>
            <p className="text-lg py-2">{items.desc}</p>
            <p className="text-lg py-2">
              <span className="text-4xl font-medium px-2">${items.price}</span>/
              {items.credits} <span className="text-sm"> Creadit</span>
            </p>
            <button
              onClick={() => paymentRazorPay(item.id)}
              className="bg-black py-2 px-14 text-white my-5 rounded-md hover:bg-blue-500 transition-all duration-700 "
            >
              {user ? "Purchese" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default BuyPage;
