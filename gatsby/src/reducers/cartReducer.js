export const cartReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return { count: state.count + 1 }
    }
    case "remove": {
      return { count: state.count - 1 }
    }
    case "toggleMiniCart": {
      return state.storeContext.miniCartIsOpen
        ? (state.storeContext.miniCartIsOpen = false)
        : (state.storeContext.miniCartIsOpen = true)
    }
    default: {
      console.log(state)
    }
  }
}
