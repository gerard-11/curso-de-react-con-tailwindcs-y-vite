import { NavLink } from 'react-router-dom';
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context/index.jsx";
import { ShoppingBagIcon } from "@heroicons/react/16/solid/index.js";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
    const context = useContext(ShoppingCartContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const activeStyle = 'underline underline-offset-4'

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)
    const handleClickMenu=()=>{
       context.setFilteredByCategory(null);
       closeMenu()
    }

    // Left Menu Items (Categories)
    const renderLeftNav = () => (
        <>
            <li className='font-semibold'>
                <NavLink to='/'
                         onClick={handleClickMenu}>Shop</NavLink>
            </li>
            <li>
                <NavLink to='/' onClick={handleClickMenu}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>All</NavLink>
            </li>
            <li>
                <NavLink to='/electronics' onClick={() => { context.setSearchByCategory('electronics'); closeMenu(); }} className={({ isActive }) => isActive ? activeStyle : undefined}>Electronics</NavLink>
            </li>
            <li>
                <NavLink to='/furniture' onClick={() => { context.setSearchByCategory('furniture'); closeMenu(); }} className={({ isActive }) => isActive ? activeStyle : undefined}>Furniture</NavLink>
            </li>
            <li>
                <NavLink to='/shoes' onClick={() => { context.setSearchByCategory('shoes'); closeMenu(); }} className={({ isActive }) => isActive ? activeStyle : undefined}>Shoes</NavLink>
            </li>
            <li>
                <NavLink to='/clothes' onClick={() => { context.setSearchByCategory('clothes'); closeMenu(); }} className={({ isActive }) => isActive ? activeStyle : undefined}>Clothes</NavLink>
            </li>
            <li>
                <NavLink to='/miscellaneous' onClick={() => { context.setSearchByCategory('miscellaneous'); closeMenu(); }} className={({ isActive }) => isActive ? activeStyle : undefined}>Miscellaneous</NavLink>
            </li>
        </>
    )

    // Right Menu Items (Account)
    const renderRightNav = () => (
        <>
            <li className='text-black/60'>
                grrdrito@gmail.com
            </li>
            <li>
                <NavLink to='/my-account' onClick={closeMenu} className={({ isActive }) => isActive ? activeStyle : undefined}>My account</NavLink>
            </li>
            <li>
                <NavLink to='/my-orders' onClick={closeMenu} className={({ isActive }) => isActive ? activeStyle : undefined}>My orders</NavLink>
            </li>
            <li>
                <NavLink to='/sign-in' onClick={closeMenu} className={({ isActive }) => isActive ? activeStyle : undefined}>Sign in</NavLink>
            </li>
        </>
    )

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white shadow-sm'>
            {/* Mobile Header */}
            <div className="flex w-full justify-between items-center lg:hidden">
                <div onClick={toggleMenu} className="cursor-pointer">
                    {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </div>
                <NavLink to='/' onClick={() => { context.setFilteredByCategory(null); closeMenu(); }} className='font-bold text-lg'>
                    Shop
                </NavLink>
                <div className='flex items-center gap-1'>
                    <ShoppingBagIcon className='h-6 w-6' />
                    <div>{context.count}</div>
                </div>
            </div>

            {/* Desktop Left Menu */}
            <ul className='hidden lg:flex items-center gap-3'>
                {renderLeftNav()}
            </ul>

            {/* Desktop Right Menu */}
            <ul className='hidden lg:flex items-center gap-3'>
                {renderRightNav()}
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 cursor-pointer' /> <div>{context.count}</div>
                </li>
            </ul>

            {/* Mobile Collapsible Menu */}
            {isMenuOpen && (
                <ul className='lg:hidden flex flex-col items-center gap-4 absolute top-16 left-0 w-full bg-white py-6 border-b z-20'>
                    {renderLeftNav()}
                    <div className="w-full border-b my-2"></div>
                    {renderRightNav()}
                </ul>
            )}
        </nav>
    )
}

export { NavBar };