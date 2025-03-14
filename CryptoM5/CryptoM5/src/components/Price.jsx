import React from "react";

const Price = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      features: ["Wallets", "Trade", "Exchange", "Processing", "Analysis"],
    },
    {
      name: "Pro",
      price: "9.59",
      features: ["Wallets", "Trade", "Exchange", "Processing", "Analysis"],
    },
    {
      name: "Team",
      price: "24.99",
      features: ["Wallets", "Trade", "Exchange", "Processing", "Analysis"],
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
      <h1 className="text-3xl font-bold mb-8">Pricing Plan</h1>
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 text-center"
          >
            <div className="p-6">
              <h2 className="text-3xl font-bold text-purple-800 ">{plan.name}</h2>
              <p className="text-gray-500 text-lg">Lorem ipsum dolor</p>
            </div>
            <div className="bg-indigo-900 text-white py-6">
              <span className="text-4xl font-bold ">${plan.price}</span>
              <span className="text-sm">p/mo</span>
            </div>
            <div className="p-6 space-y-2">
              {plan.features.map((feature, i) => (
                <p key={i} className="text-gray-600 flex items-center gap-2">
                  <span>&#10003;</span>
                  {feature}
                </p>
              ))}
            </div>
            <div className="p-6">
              <button className="bg-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-600 transition">
                Get started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
