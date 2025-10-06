import React, { useContext } from "react";
import { assets, plans } from "../assets/assets/assets";
import { ContextApp } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function BuyPage() {
  const { user, token, backendUrl, loadCreaditData, setShowLogin } =
    useContext(ContextApp);
  const navigate = useNavigate();

  const initPay = async (order) => {
    if (!window.Razorpay) {
      toast.error("Razorpay SDK not loaded!");
      return;
    }
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      handler: async (response) => {
        console.log("Payment success:", response);
        toast.success("Payment completed!");
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorPay = async (planId) => {
    console.log("clicked");
    
    try {
      console.log("paymentRazorPay called with planId:", planId);

      if (!user) {
        setShowLogin(true);
        return;
      } else if (!planId) {
        toast.error("No plan selected");
        return;
      }

      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        { headers: { token } }
      );

      console.log("here is data  from razerpay", data);
      console.log("here is order  from razerpay", data.order);

      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-16">

      <div className="text-center mb-12">
        <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-full text-xs md:text-sm mb-4">
          Our Plans
        </button>
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Choose the plan that’s right for you
        </h1>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {plans && plans.length > 0 ? (
          plans.map((plan, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col items-center"
            >
              <img src={assets.logoo} alt="logo" className="w-24 mb-3" />
              <p className="text-gray-500 text-sm mb-2">Plan {plan.id}</p>
              <p className="text-gray-800 font-medium text-base mb-3">
                {plan.desc}
              </p>

              <p className="text-gray-900 text-lg mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-500 text-sm">
                  {" "}
                  / {plan.credits} credits
                </span>
              </p>

              <button
                onClick={() => paymentRazorPay(plan.id)}
                className="w-full bg-[rgb(8,120,130)] hover:bg-[rgb(25,182,197)] text-white py-2.5 rounded-full transition-all"
              >
                {user ? "Purchase" : "Get Started"}
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No plans available right now.
          </p>
        )}
      </div>
    </div>
  );
}

export default BuyPage;
