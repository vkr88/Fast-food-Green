import React, { useContext, } from 'react'
import Navbar from '../Navbar'
import Category from '../Category '
import Card from '../Card'
import { IoClose } from "react-icons/io5";
import food_items from '../food'
import { dataContext } from '../UserContext/UserContext'
import { TbTransitionRight } from 'react-icons/tb';
import AddCard from '../AddCard';
import { useSelector } from 'react-redux';

const Home = () => {
    let { catego, setCatego, showCart, setShowCart } = useContext(dataContext)
    function filters(Category) {
        if (Category === 'All') {
            setCatego(food_items)
        }
        else {
            const newlist = food_items.filter((item) => (item.food_category === Category))
            setCatego(newlist)
        }
    }
    let items = useSelector(state => state.cart)
    let SubTotal = Math.floor(items.reduce((total, item) => total + item.QTY * item.price, 0))
    let DeliveryFee = 20
    let texts = SubTotal * 0.5 / 100;
    let total = SubTotal + DeliveryFee + texts;

    return (


        <>
            <div className='bg-slate-200  md:w-full   scroll-auto'>
                <Navbar data={catego}></Navbar>
                <div className=' flex flex-wrap justify-center mt-7 '>
                    {Category.map((item, index) => (
                        <div key={index} className='bg-white h-40 w-40 m-2 md:m-3 rounded-lg justify-center items-center  flex flex-col gap-5 shadow-lg cursor-pointer hover:bg-green-200 transition-all duration-400 '
                            onClick={() => filters(item.name)}>

                            <div className='flex'>{item.icon}</div>
                            <p className='text-xl font-xl'>{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className='flex flex-wrap justify-center'>
                    {
                        catego.length>0?
                        catego.map((item, index) => (
                            <Card price={item.price} name={item.food_name} image={item.food_image} types={item.food_category} key={index} id={item.id}></Card>
                        )):(
                             <div className=' text-center text-green-600 text-4xl mt-30 h-86' >Not Found....</div>
                        )
                    }
                   
                </div>

            </div>

            <div className={` w-full  h-full  md:w-1/3 bg-white shadow-lg fixed top-0 right-0 overflow-auto  ${showCart ? 'translate-x-0 transition-all duration-1000' : 'translate-x-full transition-all duration-2000'}`}>
                <header className='w-full p-6'>
                    <div className='flex justify-between'>
                        <span className='text-green-600 font-semibold text-lg'>Order  Item</span>
                        <span className=' text-2xl text-green-600  cursor-pointer  hover:text-green-700'><IoClose className='font-bold '
                            onClick={() => setShowCart(false)} /></span>

                    </div>
                    <div className=' '>
                        <div className="mt-4 ">

                            {items.map((item, index) => (
                                <AddCard key={index}

                                    price={item.price}
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    QTY={item.QTY}
                                />
                            ))}


                        </div>
                        {
                        items.length > 0 ?
                            <div className='border-b-green-600 border-t-2'>
                                <div className='flex justify-between flex-col mt-5 mb-1'>
                                    <div className='flex justify-between'><span className='text-black text-base font-medium'>Subtotal</span> <span className='text-green-600'>Rs {SubTotal}/-</span></div>
                                    <div className='flex justify-between'><span className='text-black text-base font-medium'>Delivery Free</span> <span className='text-green-600'> Rs {DeliveryFee}/-</span></div>
                                    <div className='flex justify-between'><span className='text-black text-base font-medium'>Texes</span> <span className='text-green-600'  > Rs {texts}/-</span></div>
                                </div>
                                <hr />
                                <div className='flex justify-between text-xl font-xl mb-4 mt-3 text-green-600'>
                                    <span > Total</span>
                                    <span>RS {total} /-</span>
                                </div>
                                <button className='bg-green-500 w-full  h-9 rounded-lg text-black hover:'>Place Order</button>
                            </div>:
                            (
                                <div className='text-4xl text-green-600 text-center pt-30'>Empty.....</div>
                            )
                        }
                    </div>

                </header>
            </div>
        </>
    )
}

export default Home