import { useContext} from 'react';
import {ShoppingCartContext} from '../../context/index.jsx'
import {PlusCircleIcon} from "@heroicons/react/16/solid/index.js";


const Card=(data)=>{
    const context=useContext(ShoppingCartContext)
    const showProduct=(productDetail)=>{
        context.openDetailProduct();
        context.setProductToShow(productDetail)
    }
    const addProductsToCart=(event, productData)=>{
        event.stopPropagation()
        context.setCount(context.count +1)
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu()
        context.closeDetailProduct();
    }
    return (
        <div
            className=' bg-white cursor-pointer w-40 h-40 rounded-lg my-2 '
            onClick={()=> showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data?.data?.category?.name}</span>
                <img src={data.data.images[0]} alt='headphones' className='h-full w-full  rounded-lg'/>
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event)=>addProductsToCart(event, data.data)}
                ><PlusCircleIcon/>
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className=' text-sm font-light'>{data.data.slug}</span>
                <span className=' text-lg font-bold'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card