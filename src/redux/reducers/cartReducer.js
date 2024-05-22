var productsInCart = [];
export  const CartReducer = (state = productsInCart, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
        
            if(action.newProduct.qty >= 1) {
                action.newProduct.cart++
             alert("The product has been successfully added")
            if (action.newProduct.cart > 1) {
                return state
            }
            return [...state, action.newProduct];
        }
        else{
           
          return [...state]
        }
           
        case "DELETE_FROM_CART":
          
            action.product.cart--
            if(action.product.cart >= 1){
                return state
            }
           
            return state.filter((item) => item!= action.product);
        default: return state

    }


};


