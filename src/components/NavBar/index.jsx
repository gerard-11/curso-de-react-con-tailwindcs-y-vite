import {NavLink} from 'react-router-dom';
import {useContext} from "react";
import {ShoppingCartContext} from "../../context/index.jsx";
import {ShoppingBagIcon} from "@heroicons/react/16/solid/index.js";

const NavBar=()=>{
    const context=useContext(ShoppingCartContext)
    const activeStyle='underline underline-offset-4'
    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
            <ul className='flex items-center gap-3 '>
                <li className='font-semibold'>
                    <NavLink
                        to='/'
                        className={({isActive})=>
                            isActive? activeStyle: undefined}>
                        Shop
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/'
                        onClick={()=>context.setFilteredByCategory(null)}
                        className={({isActive})=> isActive? activeStyle: undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={({isActive})=> isActive? activeStyle: undefined}
                        onClick={()=>context.setSearchByCategory('electronics')}
                     >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furniture' className={({isActive})=> isActive? activeStyle: undefined}
                        onClick={()=>context.setSearchByCategory('furniture')}>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/shoes'  className={({isActive})=> isActive? activeStyle: undefined}
                        onClick={()=>context.setSearchByCategory('shoes')}>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                             onClick={()=>context.setSearchByCategory('clothes')}
                             className={({isActive})=> isActive? activeStyle: undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/miscellaneous'
                             onClick={()=>context.setSearchByCategory('miscellaneous')}
                             className={({isActive})=> isActive? activeStyle: undefined}>
                        Miscellaneous
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                   grrdrito@gmail.com
                </li>
                <li>
                    <NavLink to='/my-account'  className={({isActive})=> isActive? activeStyle: undefined}>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-orders'  className={({isActive})=> isActive? activeStyle: undefined}>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'  className={({isActive})=> isActive? activeStyle: undefined}>
                        Sign in
                    </NavLink>
                </li>
                <li className='flex items-center'>
                      <ShoppingBagIcon className=' h-6 w-6 cursor-pointer'/> <div>{context.count}</div>
                </li>
            </ul>
        </nav>
    )
}

export{NavBar};