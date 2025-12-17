import './style.css'
import {XMarkIcon} from '@heroicons/react/24/solid'
import {useContext} from "react";
import {ShoppingCartContext} from "../../context/index.jsx";

const CheckOutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black bg-white rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon
                        className="size-6 text-blue-500 cursor-pointer"
                        onClick={context.closeCheckoutSideMenu}
                    />
                </div>
            </div>
            <p className='flex flex-col p-6 '>
                <span className='font-medium text-2xl'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm mb-10'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default CheckOutSideMenu