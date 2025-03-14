import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Footer from './components/Footer'
import Google_map from './components/Google_map'
import Contact from './components/Contact'
import Clients from './components/Clients'
import Article from './components/Article'
import Action from './components/Action'
import Traders from './components/Traders'
import Price from './components/Price'
import Skills from './components/Skills'
import OurTraders from './components/OurTraders'
import About from './components/About'
import Features from './components/Features'


const App = () => {
  return (
    <>
      <Navbar />
      <div className="py-16"> 
        <Section />
      </div>
      <div className="py-16"> 
        <Features />
      </div>
      <div className="py-16">
        <About />
      </div>
      <div className="py-16">
        <OurTraders />
      </div>
      <div className="py-16">
        <Skills />
      </div>
      <div className="py-16">
        <Price />
      </div>
      <div className="py-16">
        <Traders />
      </div>
      <div className="py-16">
        <Action />
      </div>
      <div className="py-16">
        <Article />
      </div>
      <div className="py-16">
        <Clients />
      </div>
      <div className="py-16">
        <Contact />
      </div>
      <div className="py-16">
        <Google_map />
      </div>
      <Footer />
    </>
  )
}

export default App;