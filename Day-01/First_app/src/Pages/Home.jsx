import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Footer from "../components/Footer";
const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <Section count={count} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button disabled={count==0}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <Footer />
    </div>
  );
};

export default Home;
