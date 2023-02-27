import React from 'react'
import StarIcon from '../assets/images/star.svg';
import HeartIcon from '../assets/images/love.svg';
import EyeIcon from '../assets/images/eye.svg';
import {Link, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

export default function ProductCard({product}) {


  const { id, images, title, price, category } = product;

  const navigate= useNavigate();

  const dispatch= useDispatch();

  const addToCartHandler = (product)=>{

    console.log(product);

    dispatch(addToCart({product, qty:1}))

    navigate("/carts");

  }

 


  return (
   <>


      <div className="text-gray-700 dark:bg-gray-900 items-center w-full md:w-4/5 lg:w-4/5 min-h-[10rem] shadow-lg rounded-md overflow-hidden">

        <img className="w-full h-full object-cover" src={images[0]} alt={title} />

        <div className="p-5 flex flex-col gap-3">

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs bg-gray-200 dark:bg-purple-200">Stock Ready</span>
            <span className="px-3 py-1 rounded-full text-xs bg-green-200 dark:bg-purple-200">{category}</span>
          </div>


          {/* Product Title */}

          <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap dark:text-gray-200">
            {title}
          </h2>


          {/* Product Price section */}
          <div>
            <span className='text-xl font-bold dark:text-gray-200'>
              $ {price}
            </span>

            <div className='flex items-center gap-2 mt-1'>
              <span className='text-sm line-through opacity-50 dark:text-gray-200'>
                $ {price}
              </span>

              <span className='bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white'>
                save 20%
              </span>
            </div>

          </div>


          {/* product Rating */}

          <span className='flex items-center mt-1'>
{/* 
            <img src={StarIcon} alt="staricon" />
            <img src={StarIcon} alt="staricon" />
            <img src={StarIcon} alt="staricon" />
            <img src={StarIcon} alt="staricon" />
            <img src={StarIcon} alt="staricon" /> */}

            <span className='text-xs ml-2 text-gray-500 dark:text-gray-200'>
              20k Views
            </span>

          </span>


          {/* Product Action Button like Cart Wishlist View */}


          <div className='mt-5 flex gap-2'>

            <button  onClick={()=>{addToCartHandler(product)}} className='bg-red-500/80 hover:bg-red-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition dark:bg-rose-600'>
              Add To Cart
            </button>

            <button  className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md dark:bg-rose-300'>
              <img
                className='opacity-50'
                src={HeartIcon}
                alt="add to wishlist" />
            </button>

            <Link to={`/product/${id}`} className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md dark:bg-gray-200'>
              <img
                className='opacity-50'
                src={EyeIcon}
                alt="add to wishlist" />
            </Link>

          </div>




        </div>

      </div>
   
   </>
  ) 
}
