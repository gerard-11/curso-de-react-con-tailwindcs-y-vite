import {createContext, useEffect, useState} from 'react'

export const ShoppingCartContext=createContext()

export const ShoppingCartProvider=({children})=> {
    //shopping cart
    const [count,setCount]=useState(0)
    //get products
    const [items,setItems]=useState(null)
    const [filteredItems,setFilteredItems]=useState(null)

    //get products by Category
    const [filteredByCategory,setFilteredByCategory]=useState(null)
    const [searchByCategory,setSearchByCategory]=useState(null)
    //get products by title
    const [searchByTitle,setSearchByTitle]=useState(null)

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res=>res.json())
            .then(data=>setItems(data))
    },[])
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

    const filteredItemsByTitle=(items,searchByTitle)=>{
        return items?.filter(item=>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    useEffect(()=>{
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items,searchByTitle))
        if (searchByCategory) setFilteredByCategory(filteredByCat(items,searchByCategory))

    },[items,searchByTitle,searchByCategory])

    const filteredByCat=(items,searchByCategory)=>{
        return items?.filter(item=>item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    //solo es para saber qué categorías tiene la api
    /*const GetElementByCat=()=>{
       const getCat= items?.reduce((acc,item)=>{
           const categoryName=item.category.name
           if(acc[categoryName]){
                acc[categoryName]+=1
           }else{
               acc[categoryName]=1
           }
           return acc
       },{})
        console.log(getCat)
    }
    GetElementByCat()*/
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
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            filteredByCategory,
            setFilteredByCategory,
            searchByCategory,
            setSearchByCategory

        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}