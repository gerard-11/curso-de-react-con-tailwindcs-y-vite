import {ChevronRightIcon} from "@heroicons/react/16/solid/index.js";

const OrderCard = props => {
    const {totalPrice, totalProducts} = props

    return (
        <div className=" justify-between mb-3 border border-black rounded-lg p-4 w-80 ">
           <p className='flex justify-between'>
               <div className='flex flex-col'>
                   <span>02.12.25</span>
                   <span> {totalProducts} Articles</span>
               </div>
               <p className='flex items-center'>
                   <span className='font-medium text-2xl'> ${totalPrice}</span>
                   <ChevronRightIcon className='h-6 w-6 mx-0'/>
               </p>

           </p>
        </div>
    )
}

export default OrderCard;