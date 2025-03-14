import React from "react";

const clients = [
  {
    id: 1,
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/1.png",
  },
  {
    id: 2,
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/2.png",
  },
  {
    id: 3,
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/3.png",
  },
  {
    id: 4,
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/4.png",
  },
  {
    id: 5,
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/1.png",
  },
  {
    id: 6,
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/2.png",
  },
];

const Clients = () => {
  return (
    <div>
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
        <div className="w-16 h-1 bg-gray-900 mx-auto mb-8"></div>
        <div className="flex flex-wrap justify-center gap-18">
          {clients.map((clients) => (
            <div
              key={clients.id}
              className="bg-white p-6 rounded-lg shadow-md w-40 h-40 flex items-center justify-center"
            >
              <img
                src={clients.image}
                alt="Logo"
                className="max-x-full max-h-full"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clients;
