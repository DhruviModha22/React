import React from "react";

const traders = [
  {
    id: 1,
    name: "Nicholas Daniels",
    btc: "3.5 BTC",
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face1.jpg",
  },
  {
    id: 2,
    name: "Claude Banks",
    btc: "3.3 BTC",
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face2.jpg",
  },
  {
    id: 3,
    name: "Gayle Hicks",
    btc: "3.2 BTC",
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face3.jpg",
  },
  {
    id: 4,
    name: "Franklin Greer",
    btc: "3.1 BTC",
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face4.jpg",
  },
  {
    id: 5,
    name: "Nicholas Daniels",
    btc: "3.0 BTC",
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face1.jpg",
  },
  {
    id: 6,
    name: "Claude Banks",
    btc: "2.6 BTC",
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face2.jpg",
  },
  {
    id: 7,
    name: "Gayle Hicks",
    btc: "2.5 BTC",
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face3.jpg",
  },
  {
    id: 8,
    name: "Franklin Greer",
    btc: "2.3 BTC",
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face4.jpg",
  },
  {
    id: 9,
    name: "Nicholas Daniels",
    btc: "2.2 BTC",
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face1.jpg",
  },
  {
    id: 10,
    name: "Claude Banks",
    btc: "2.1 BTC",
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face2.jpg",
  },
  {
    id: 11,
    name: "Gayle Hicks",
    btc: "2.0 BTC",
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face3.jpg",
  },
  {
    id: 12,
    name: "Franklin Greer",
    btc: "1.9 BTC",
    image:
      "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/face4.jpg",
  },
];

const Traders = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Top Traders</h2>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 ">
        {traders.map((traders) => (
          <div key={traders.id} className="flex items-center space-x-3">
            <span className="text-lg font-semibold">{traders.id}</span>
            <img
              src={traders.image}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <span className="absolute top-7 left-11 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              ✓
            </span>
            <div>
              <p className="font-semibold">{traders.name}</p>
              <p className="text-gray-500 text-sm">{traders.btc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Traders;
