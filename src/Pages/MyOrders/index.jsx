import Layout from "../../components/Layout/index.jsx";
import OrderCard from "../../components/OrderCard/index.jsx";
import {useContext} from "react";
import {ShoppingCartContext} from "../../context/index.jsx";
import {Link} from "react-router-dom";

function MyOrders() {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
           <h1 className='text-xl mb-4'>My orders</h1>
            {
                context.order.map((order,index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrderCard
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}/>
                    </Link>
                    ))
            }

        </Layout>
    )
}

export default MyOrders