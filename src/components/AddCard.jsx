import React from 'react'
import { useDispatch } from 'react-redux'
import { AddItem, RemoveItem ,IncrimentQTY, DecrementQTY} from './Redux/cartSlic'
import { RiDeleteBin6Line } from "react-icons/ri";

const AddCard = ({ id, name, price, image, QTY }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className='text-green-600 font-lg  text-base overflow-auto'>
                <div className='flex justify-between mb-5 shadow-lg rounded-lg md:p-3 items-center'>
                    <div>
                        <img src={image} alt={name} className='h-38 rounded-lg' />
                    </div>

                    <div>
                        <span>{name}</span>
                        <div className='h-9 w-24 rounded-lg border-2 border-green-600 flex justify-between font-bold text-xl items-center p-2 pl-2 mt-4'>
                            <button className='hover:cursor-pointer'onClick={()=>QTY>1?dispatch(DecrementQTY(id)):1}>-</button>
                            <span className='bg-stone-300 w-8 h-8 pl-2'>{QTY}</span>
                            <button className='hover:cursor-pointer' onClick={()=>dispatch(IncrimentQTY(id))}>+</button>
                        </div>
                    </div>

                    <div>
                        <span>Rs {price} /</span>
                        <RiDeleteBin6Line
                            className='ml-8 mt-3 cursor-pointer'
                            onClick={() => dispatch(RemoveItem(id))}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCard;
