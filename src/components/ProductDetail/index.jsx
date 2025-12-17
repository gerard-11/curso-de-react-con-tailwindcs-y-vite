import './style.css'
import {XMarkIcon} from '@heroicons/react/24/solid'
import {useContext} from "react";
import {ShoppingCartContext} from "../../context/index.jsx";


const ProductDetail = () => {
    const context=useContext(ShoppingCartContext)
    console.log(context.productToShow)
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black bg-white rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon
                        className="size-6 text-blue-500 cursor-pointer"
                        onClick={context.closeDetailProduct}
                    />
                </div>

            </div>
            <figure className='p-2'>
                <img
                    className='w-full h-full rounded-lg'
                    src={context.productToShow.images}
                    alt={context.productToShow.name} />
            </figure>
            <p className='flex flex-col p-6 '>
                <span className='font-medium text-2xl'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm mb-10'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail