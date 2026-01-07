import Layout from '../../components/Layout/index.jsx'
import Card from '../../components/Card/index.jsx'
import ProductDetail from '../../components/ProductDetail/index.jsx'
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../context/index.jsx";

const Home = () => {
    const context = useContext(ShoppingCartContext);
    const renderView = () => {
        if (context.searchByTitle?.length > 0) {
            if (context.filteredItems?.length > 0) {
                return (
                    context.filteredItems?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))
                )
            } else {
                return (
                    <div>No Hay Coincidencias</div>
                )
            }
        }
        if (context.filteredByCategory) {
            return (
                context.filteredByCategory?.map((item) => (
                    <Card key={item.id} data={item} />
                ))
            )
        } if (!context.filteredByCategory) {
            return context.items?.map((item) => (
                <Card key={item.id} data={item} />
            ))
        }
    }

    return (
        <>
            <Layout>
                <div className='flex items-center justify-center relative w-80 mb-2'>
                    <h1 className='font-medium text-xl'>Exclusive Products</h1>
                </div>
                <div className='flex  items-center gap-3'>
                    <input type='text'
                        placeholder='Search Product'
                        className='border border-black p-2 rounded-lg w-60 mb-4 focus:outline-none'
                        onChange={(event) => context.setSearchByTitle(event.target.value)} />
                </div>
                <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg px-8'>
                    {renderView()}
                </div>
                <ProductDetail />
            </Layout>

        </>
    )
}

export default Home