import React from "react"

export const defaultStoreState = {
  cartKey: localStorage.getItem("cartKey"),
  miniCartIsOpen: false,
  adding: false,
  products: [],
  cart: {},
  removeCartItem: () => {},
  updateCartItem: () => {},
}

export const StoreStateContext = React.createContext()
export const StoreDispatchContext = React.createContext()

export const withStoreContext = Component => {
  const context = React.useContext(StoreStateContext)
  return props => <Component {...props} storeContext={context} />
}

export const useStoreStateContext = () => {
  const context = React.useContext(StoreStateContext)
  if (context === undefined) {
    throw new Error(
      "useStoreStateContext must be used within a StoreStateProvider"
    )
  }
  return context
}

export const useStoreDispatchContext = () => {
  const context = React.useContext(StoreDispatchContext)
  if (context === undefined) {
    throw new Error(
      "useStoreDispatchContext must be used within a StoreDispatchContext"
    )
  }
  return context
}
