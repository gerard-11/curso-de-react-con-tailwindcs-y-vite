/*{array} params
* cart products, this function calculates total price new order
* */
export const totalPrice=(products)=>{
    return products.reduce((total,product)=> total + product.price,0)
}