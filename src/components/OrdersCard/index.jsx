import {XMarkIcon} from "@heroicons/react/24/solid/index.js";


const OrdersCard = props => {
    const {id,title, imgUrl,price,handleDelete} = props
    let renderXMarkIcon
        if(handleDelete) {
            renderXMarkIcon =<XMarkIcon
                onClick={()=>handleDelete(id)}
                className="size-6 text-blue-500 cursor-pointer"/>
        }

    return (
        <div className="flex justify-between items-center p-2 w-full">
            <div className=' flex items-center gap-2 '>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full   full rounded-lg ' src={imgUrl} alt={title}/>
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div  className=' flex items-center gap-2 '>
                <p className='text-lg font-sm'>${price}</p>
                {renderXMarkIcon}
            </div>


        </div>
    )
}

export default OrdersCard;