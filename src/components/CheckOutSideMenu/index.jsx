
import {XMarkIcon} from '@heroicons/react/24/solid'
import {Link} from 'react-router-dom'
import {useContext} from "react";
import {ShoppingCartContext} from "../../context/index.jsx";
import OrderCard from "../OrdersCard/index.jsx";
import {totalPrice} from "../../utils/index.jsx";
import './style.css'

const CheckOutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete=(id)=>{
        const filteredProducts=context.cartProducts.filter(product=>product.id !== id);
        context.setCartProducts(filteredProducts);
    }
   const handleCheckout=()=>{
        const orderToAdd= {
            date: new Date().toLocaleDateString('en-US'),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice:totalPrice(context.cartProducts),
        }
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([])
        context.setCount(0)
       context.closeCheckoutSideMenu()
       context.setFilteredByCategory(null)
       context.setSearchByTitle(null)
   }
    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 h-screen border border-black bg-white rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon
                        className="size-6 text-blue-500 cursor-pointer"
                        onClick={context.closeCheckoutSideMenu}
                    />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1 '>
                {
                    context.cartProducts.map(product=>(
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imgUrl={product.images}
                                price={product.price}
                                handleDelete={handleDelete}
                    />
                        )
                    )
                }
                {context.cartProducts.length > 0 &&
                        <div className='px-3 border-t-1 '>
                    <p className='flex items-center justify-between'>
                        <span className='font-light'>Total:</span>
                        <span className='font-bold'>${totalPrice(context.cartProducts)}</span>
                    </p>
                    <Link to='/my-orders/last'>
                        <button
                            className='w-full bg-black py-3  text-white rounded-lg mt-5 cursor-pointer'
                            onClick={() => handleCheckout()}>Checkout
                        </button>
                    </Link>
                </div>}

            </div>
        </aside>
    )
}

export default CheckOutSideMenu