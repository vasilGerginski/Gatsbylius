import React from 'react';

export const defaultStoreContext = {
    cartKey: localStorage.getItem('cartKey'),
    miniCartIsOpen: false,
    adding: false,
    products: [],
    cart: {},
    addVariantToCart: () => {},
    removeCartItem: () => {},
    updateCartItem: () => {}
};

const StoreContext = React.createContext(defaultStoreContext);

export const withStoreContext = Component => {
    return props => (
        <StoreContext.Consumer>
            {context => <Component {...props} storeContext={context} />}
        </StoreContext.Consumer>
    )
};

export default StoreContext;