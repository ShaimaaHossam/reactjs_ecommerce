
export const existingCartItem = ({
    prevCartItems,
    nextCartItem
})=>{
    return prevCartItems.find(
        cartItem => cartItem.productID === nextCartItem.productID  && cartItem.attributename === nextCartItem.attributename && cartItem.value === nextCartItem.value
    )
}

export const handleAddToCart = ({
    prevCartItems,
    nextCartItem,
}) =>{
    const quantityIncrement = 1;
    const cartItemExists = existingCartItem({
        prevCartItems,
        nextCartItem,
    });

    if(cartItemExists){
        return prevCartItems.map(cartItem=>
            cartItem.productID == nextCartItem.productID  && cartItem.attributename == nextCartItem.attributename && cartItem.value === nextCartItem.value
            ? 
            {
                ...cartItem,
                quantity: cartItem.quantity +quantityIncrement
            } : cartItem
            );
    }
    return[
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: quantityIncrement,
        }
    ]
}