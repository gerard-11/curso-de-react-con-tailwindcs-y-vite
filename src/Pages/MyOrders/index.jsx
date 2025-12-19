import Layout from "../../components/Layout/index.jsx";
import OrderCard from "../../components/OrderCard/index.jsx";
import {useContext} from "react";
import {ShoppingCartContext} from "../../context/index.jsx";
import {Link} from "react-router-dom";

function MyOrders() {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
            My orders
            {
                context.order.map((order,index) => (
                    <Link className='flex w-80 text-blue-700 mt-4 justify-center border rounded-md px-2 hover:text-black' key={index} to={`/my-orders/${index}`}>
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