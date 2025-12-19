import {XMarkIcon} from "@heroicons/react/24/solid/index.js";


const OrderCard = props => {
    const {totalPrice, totalProducts} = props

    return (
        <div className="flex justify-between items-center mb-2  border border-gray-200">
           <p>
               <span>02.12.25</span>
               <span>{totalProducts}</span>
               <span>{totalPrice}</span>
           </p>
        </div>
    )
}

export default OrderCard;