import React, { useEffect, useState } from 'react'

const GST_RATE=0.18;

const ProductApp = () => {
    const [products,setProducts]=useState([])
    const[cart,setCart]=useState(
        JSON.parse(localStorage.getItem("cart"))||[]
    )

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
       .then((response)=>response.json())
       .then((data)=>setProducts(data))
       .catch((error)=>{
        console.log("Error fetching products",error);
       })
    },[])

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

    const addToCart=(product)=>{
        setCart([...cart,product])
    }

    const RemoveFromCart=(index)=>{
        setCart(cart.filter((product,i)=>i!==index))
    }

    const totalPrice=cart.reduce((sum,item)=>sum+item.price,0)
    const gstAmount=totalPrice*GST_RATE
    const grandTotal=totalPrice+gstAmount
  return (
    <div className='products-container'>
        <div className='products-list'>
            <h2>Welcome to Shop Ease</h2>
            <div className='products-grid'>
                {products.map((product)=>(
                    <div key={product.id} className='product-card'>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <p>${product.price}</p>
                        <button onClick={()=>addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>

        <div className='cart-container'>
            <h2>Cart</h2>
            {cart.length===0?<p>No items in carts</p>:cart.map((item,index)=>(
                <div key={index} className='cart-item'>
                    <img src={item.image} alt="" />
                    <p>{item.title}-${item.price}</p>
                    <button onClick={()=>RemoveFromCart(index)}>Remove</button>
                </div>
            ))}

            <div className='cart-total'>
                <p><strong>Total Price:</strong>${totalPrice.toFixed(2)}</p>
                <p><strong>GST (18%):</strong>${gstAmount.toFixed(2)}</p>
                <p><strong>Grade Total:</strong>${grandTotal.toFixed(2)}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductApp