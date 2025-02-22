import { useEffect, useState } from 'react'
import Home from './Pages/Home'

function App() {
  const [product, setProduct] = useState()

useEffect(()=>{
  fetch("https://fakestoreapi.com/products")
  .then((response)=>response.json())
  .then((res)=>{
    setProduct(res)
    console.log(product);
  })
  .catch((err)=>{
    console.log(err);
  })
},[])
  return (
    <>
    <h1>Api fetch using react</h1>
      {/* <Home/> */}
      {
        product && product.map((item)=>{
          return(
            <div>
              <h2>{item.title}</h2>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <img src={item.image} alt="" height={"200px"} />
            </div>
          )
        })
      }
       
    </>
  )
}

export default App
