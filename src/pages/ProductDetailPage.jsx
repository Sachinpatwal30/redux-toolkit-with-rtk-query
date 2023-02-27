import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useGetProductByIdQuery } from '../features/product/productApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

export default function ProductDetailPage() {

  const {id}= useParams();

  const navigate = useNavigate();
  const dispatch= useDispatch();


  const [qty, setQty] = useState(1);

  const addToCartHandler= (product)=>{




    dispatch(addToCart({product,qty:Number(qty)}))

    navigate('/carts');



  }


  const {data:product, isLoading,isError, error}= useGetProductByIdQuery(id);



  return (
   <>

      <section className="h-screen m-auto flex items-center dark:bg-gray-800">

        <div className="w-full flex flex-col md:flex-row md:justify-between md:space-x-10 items-center ">
          <div className="relative ">
            <img id='image' className="w-full h-full" src={product?.images[0]} alt="product image" />
            <div className='arrows w-full absolute inset-y-1/2 flex justify-between px-3'>
              <button id='prev'><i className="fa-solid fa-chevron-left"></i></button>
              <button id='next'><i className="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>

          <div className='space-y-5 p-5'>
            <h4 className='text-xl font-semibold dark:text-gray-200'>{product?.title}</h4>
            <h3 className='text-2xl inline-block font-bold bg-green-400 text-white px-2 rounded-lg my-6 dark:text-gray-200 dark:bg-green-600'>{product?.category}</h3>
            <h2 className='text-xl font-bold dark:text-gray-200 '>${product?.price}</h2>
            <p className='text-sm dark:text-gray-100'>Description</p>
            <hr />
            <p className='text-sm dark:text-gray-200'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
          </div>

          <div className='space-y-5'>
            <input className='w-24 h-8 px-3 border border-gray-600 outline-0' min={1} value={qty} onChange={(e) => setQty(e.target.value)} type="number" id="amount" />

            <div>
              <button className="w-8 h-8 bg-red-500 rounded-full shadow-xl"></button>
              <button className="w-8 h-8 bg-red-500 rounded-full shadow-xl"></button>
              <button className="w-8 h-8 bg-red-500 rounded-full shadow-xl"></button>
              <button className="w-8 h-8 bg-red-500 rounded-full shadow-xl"></button>
            </div>

          </div>

          <div className="space-x-5 flex items-center">
            <button className="flex items-center space-x-2 border border-rose-400 px-5 py-2 rounded-md hover:bg-rose-400 hover:text-white dark:bg-rose-800 hover:dark:bg-rose-600">
              <FontAwesomeIcon className="text-rose-400" icon={faHeart} />
              <span className='dark:text-white'>Favorites</span>
            </button>
            <button  className="whitespace-pre bg-rose-400 px-5 py-2 rounded-md text-white hover:bg-white hover:border hover:border-gray-600 hover:text-black dark:bg-purple-800 hover:dark:bg-purple-600 hover:dark:text-white">
              <FontAwesomeIcon icon={faCartShopping} />
              <span onClick={() => { addToCartHandler(product) }}>Add to Cart</span>
            </button>
          </div>

        </div>

      </section></>
  )
}
