import React, { useState } from 'react'

const Form_validate = () => {
    const [form,setForm]=useState({
        name:'',
        email:'',
        phone:'',
        address:'',
        password:'',
       })
    const [errors,setErrors]=useState({})

    const validate=()=>{
        let newErrors={}
        if(!form.name){
            newErrors.name='Name is required'
        }
        if(!form.email){
            newErrors.email='Email is required'
        }else if(!/\S+@\S+\.\S+/.test(form.email)){
            newErrors.email='Email is not valid'
        }
        if(!form.phone){
            newErrors.phone='Phone is required'
        }else if(!/^\d{10}$/.test(form.phone)){
            newErrors.phone='Phone number is not valid'
        }
        if(!form.password){
            newErrors.password='Password is required'
        }else if(form.password.length<8){
            newErrors.password='Password should be at least 8 characters long'
        }
        if(!form.address){
            newErrors.address='Address is required'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length===0
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validate()){
            alert("Form submitted successfully")
            setForm({name:'',email:'',phone:'',address:'',password:''})
            setErrors({})
        }
    }
  return (
    <>
    <h1>Form Validation</h1>
    <div className='form-container'>
        <form className='form' onSubmit={handleSubmit} >
            <h2>Register</h2>

            <div className="input-group">
                <label>Name</label>
                <input type="text" name='name' value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
                {errors.name && <p className='error'>{errors.name}</p>}
            </div>

            <div className='input-group'>
                <label>Email</label>
                <input type="email" name='email' value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
                {errors.email && <p className='error'>{errors.email}</p>}
            </div>

            <div className='input-group'>
                <label>phone</label>
                <input type="text" name='phone' value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
                {errors.phone && <p className='error'>{errors.phone}</p>}
            </div>

            <div className='input-group'>
                <label>Address</label>
                <input type="text" name='address' value={form.address} onChange={e=>setForm({...form,address:e.target.value})}/>
                {errors.address && <p className='error'>{errors.address}</p>}
            </div>

            <div className='input-group'>
                <label>Password</label>
                <input type="password" name='password' value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
                {errors.password && <p className='error'>{errors.password}</p>}
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Form_validate