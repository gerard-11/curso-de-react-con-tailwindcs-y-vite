import Layout from '../../components/Layout/index.jsx'
import Card from '../../components/Card/index.jsx'
import ProductDetail  from '../../components/ProductDetail/index.jsx'
import {useEffect, useState} from "react";
const Home=()=> {
    const [items,setItems]=useState(null)

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res=>res.json())
            .then(data=>setItems(data))
    },[])
    return (
        <>
            <Layout>
                Home
                <div className='grid  gap-4 grid-cols-4 w-full max-w-screen-lg'>
                    {
                        items?.map((item)=>(
                                <Card key={item.id} data={item}/>
                            )
                        )
                    }
                </div>
            <ProductDetail/>
            </Layout>

        </>
    )
}

export default Home