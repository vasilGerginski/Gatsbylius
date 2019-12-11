import React from "react"
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "addProducts": {
      return { ...state, products: action.payload }
    }
    case "remove": {
      return { count: state.count - 1 }
    }
    case "toggleMiniCart": {
      return state.storeContext.miniCartIsOpen
        ? (state.storeContext.miniCartIsOpen = false)
        : (state.storeContext.miniCartIsOpen = true)
    }
    case "updateCartKey": {
      return { ...state, cartKey: action.payload }
    }
    default: {
      throw new Error("Default reducer bla")
    }
  }
}
