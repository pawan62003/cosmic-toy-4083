import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addProduct } from '../redux/ProductReducer/action'
import styled from 'styled-components'

const initialState={
    image:"",
    title:"",
    price:"",
    id:"",
    category:""
}

export const Admin = () => {
const [product,setProduct]=useState(initialState)
const dispatch=useDispatch()

const handleChange=(e)=>{
e.preventDefault()
setProduct({
  ...product,
    [e.target.name]:e.target.value
})
}

const handleSubmit = (e) =>{
    e.preventDefault()
   dispatch(addProduct(product))
   console.log(product);
   setProduct(initialState)
}
console.log(product);
  return (
    <DIV>
        <h3>Products Updation Page</h3>
        {/* <AdminNavbar/> */}
        <form onSubmit={handleSubmit}>
            <input type="text"  onChange={(e)=>{handleChange(e)}} placeholder='Image URL'name="image" value={product.image}/>
          <input type="text"  onChange={(e)=>{handleChange(e)}} placeholder='Title' name='title' value={product.title}/>
          <input type="text"  onChange={(e)=>{handleChange(e)}} placeholder='Price' name='price' value={product.price}/>
          <select name="category" id="">
            <option value="">Select Category</option>
            <option value="t-shirts">Men's T-Shirts</option>
            <option value="spice">Spices</option>
            <option value="vegetable">Vegetables</option>
            <option value="dairy">Dairy Goods</option>
          </select>
         <button type='submit'>Add/Edit Product</button>
        </form>
          
    </DIV>
  )
}

const DIV=styled.div`
 border:1px solid black;
   padding:0;
  margin:0;
/* background-color: #6b9cd5; */
height:100%;
border: 0px;

input{
  border-radius: 5px;
    width:90%;
    height:40px;
    font-size: large;
    text-align:center;
    
}
button{
    width:50%;
    height:35px;
    border-radius: 5px;
}
form{
  /* background-color: beige; */
  background: linear-gradient(to top, #fbff88, 20%, #13535399);
  /* border:1px solid black; */
  width: 30%;
    display: flex;
    flex-direction: column;
    gap:15px;
align-items: center;
justify-items: center;
margin: auto;
padding: 50px;
}
select{
    width:50%;
    height:30px;
    font-size: large;
    border-radius: 5px;
}
`;