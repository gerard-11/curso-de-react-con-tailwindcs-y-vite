import {createContext, useState} from 'react'

export const ShoppingCartContext=createContext()

export const ShoppingCartProvider=({children})=> {
    //shopping cart
    const [count,setCount]=useState(0)
    //product detail open/close
    const [isCheckoutSideMenuOpen,setIsCheckoutSideMenuOpen]=useState(false)
    const openCheckoutSideMenu=()=>{setIsCheckoutSideMenuOpen(true)}
    const closeCheckoutSideMenu=()=>{setIsCheckoutSideMenuOpen(false)}
    //checkout side menu
    const [isProductDetailOpen,setIsProductDetailOpen]=useState(false)
    const openDetailProduct=()=>{setIsProductDetailOpen(true)}
    const closeDetailProduct=()=>{setIsProductDetailOpen(false)}
    //product detail . show product
    const [productToShow,setProductToShow]=useState({})
    //shopping cart . add products to cart
    const [cartProducts,setCartProducts]=useState([])

    //shopping cart order
    const [order, setOrder]=useState([])



    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openDetailProduct,
            closeDetailProduct,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            order,
            setOrder,

        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}