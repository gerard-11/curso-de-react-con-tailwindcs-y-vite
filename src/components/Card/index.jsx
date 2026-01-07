import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/index.jsx'
import { PlusCircleIcon, CheckIcon } from "@heroicons/react/16/solid/index.js";


const Card = (data) => {
    const context = useContext(ShoppingCartContext)
    const showProduct = (productDetail) => {
        context.openDetailProduct();
        context.setProductToShow(productDetail)
        context.closeCheckoutSideMenu()
    }
    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu()
        context.closeDetailProduct();
    }
    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter((item) => item.id === id).length > 0

        if (isInCart) {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1 text-white'
                ><CheckIcon />
                </div>
            )
        } else {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event) => addProductsToCart(event, data.data)}
                ><PlusCircleIcon />
                </div>
            )
        }
    }
    return (
        <div
            className='bg-white cursor-pointer w-full h-52 rounded-lg my-2'
            onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data?.data?.category?.name}</span>
                <img src={data.data.images[0]} alt='headphones' className='h-full w-full  rounded-lg' />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className=' text-sm font-light'>{data.data.slug}</span>
                <span className=' text-lg font-bold'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card