import React, { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'

const App = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")  
    .then((response)=>response.json())
    .then((res)=>{
      setProduct(res)
      console.log(product);
      setLoading(false);
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false);
    })
  },[])

  return (
    <>
    <div className="bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold text-center">Welcome to API Data Store!</h1>
    </div>
    <h1 className="text-2xl text-center font-bold">Products</h1>
    <div className="flex flex-wrap gap-8 justify-center p-8 bg-gray-100 min-h-screen">
    {loading ? (
      <div className="text-center text-xl font-semibold">Loading...</div>
    ) : (
      product.map((product) => <ProductCard key={product.id} product={product}/>)
    )}
  </div>
</>
  )
}

export default App
