import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { dataContext } from './UserContext/UserContext';
import { food_items } from './food';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const { input, setInput, setCatego, setShowCart } = useContext(dataContext)
  useEffect(() => {
    const newfood = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCatego(newfood);
  }, [input]);

  let items = useSelector(state => state.cart)
  console.log(items)
  
  return (

    <>
      <div className=' flex justify-around pt-7'>
        <div className='bg-white w-17 h-17 flex justify-center items-center rounded-lg  shadow-md'><MdFastfood className='h-16 w-10 text-green-600' /></div>
        <div>
          <form onSubmit={(e) => e.preventDefault()} action="" className='flex h-17 w-50 md:w-200 bg-white rounded-lg justify-center items-center pl-6 shadow-md '>
            <FaSearch className=' h-10 w-6 text-green-600' />
            <input type="text" className=' h-17 w-full bg-white rounded-lg  pl-8 outline-none' placeholder='Search your dish' onChange={(e) => setInput(e.target.value) } value={input} />
          </form>
        </div>
        <div className='bg-white w-17 h-17 flex justify-center items-center rounded-lg shadow-md'>

          <LuShoppingBag className='h-16 w-10 text-green-600 hover:cursor-pointer' onClick={() => setShowCart(true)} />
          <span className='abosolut top-0 text-green-600 font-bold right-0 mb-10'>{items.length}</span>
        </div>

      </div>

    </>
  )
}

export default Navbar