import React from 'react'
import { LuVegan } from "react-icons/lu";
import { useDispatch } from 'react-redux'
import { GiChickenOven } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddItem, RemoveItem } from './Redux/cartSlic';


const Card = ({ types, price, name, image, id }) => {
 
  const notify = () => {
  toast.success("✅ Item Added", {
    autoClose: 1000,       
    hideProgressBar: true, 
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};


  const dispatch = useDispatch()
  console.log()
  return (
    <>
      <div className=' flex flex-wrap justify-evenly m-2 md:px-5  mt-6 gap-5'>

        <div key={id} className='flex bg-white w-40 h-80 md:h-85 md:w-60 flex-col rounded-lg  p-2  shadow-lg mb-4 hover:border-1 border-green-400 '>
          <img src={image} alt="" className='rounded-lg h-50 w-80' />
          <div className='text-lg font-semibold mt-3'>{name}</div>
          <div className='justify-between flex  text-green-600 font-semibold mt-2'>
            <span>RS {price} /-</span>

            <span className='flex '> <span className='mt-1 mr-1'>{types === "veg" ? <LuVegan /> : <GiChickenOven />}</span> {types}</span>
          </div>
          <button
            className='bg-green-600 rounded-lg h-10 mt-3 hover:bg-green-700 cursor-pointer'
            onClick={() => {
              dispatch(AddItem({
                id,
                price,
                name,
                image,
                QTY: 1
              }));
              notify();
            }}
          >
            Add to Dish
          </button>


        </div>


      </div>
       {/* <ToastContainer /> */}
    </>

  )
}

export default Card 