import { createContext, useState } from 'react'
import food_items from '../food';
export const dataContext = createContext()

const UserContext = ({ children }) => {
    const [catego, setCatego] = useState(food_items)
    const [input, setInput] = useState("");
    const [showCart, setShowCart] = useState(false)
    let data = {
        input,
        setInput,
        catego,
        setCatego,
        showCart,
        setShowCart,
        
    }
    return (
        <>
            <dataContext.Provider value={data}>
                {children}

            </dataContext.Provider>
        </>
    )
}

export default UserContext