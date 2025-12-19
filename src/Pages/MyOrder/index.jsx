import Layout from "../../components/Layout/index.jsx";
import OrderCard from "../../components/OrdersCard/index.jsx";
import {useContext} from "react";
import {ShoppingCartContext} from "../../context/index.jsx";
import {Link} from "react-router-dom";
import {ChevronLeftIcon} from "@heroicons/react/16/solid/index.js";


function MyOrder() {
        const context=useContext(ShoppingCartContext);
        const currentPath=window.location.pathname;
        let index=currentPath.substring(currentPath.lastIndexOf("/")+ 1 );

        if(index === 'last'){
            index=context.order?.length -1
        }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
                </Link>
                <h1>My Order</h1>
            </div>

            <div>
              {
                    context.order?.[index].products?.map(product=>(
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imgUrl={product.images}
                                price={product.price}
                            />
                        ))

                }
            </div>
        </Layout>
    )
}

export default MyOrder