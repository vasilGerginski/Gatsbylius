import React from "react"
import { withStoreContext } from "../../../context/StoreContext";
import {
    MiniCartHeader,
    MiniCartItem,
    MiniCartItemName,
    MiniCartItemPrice, MiniCartItemQty,
    MiniCartItems,
    MiniCartTotal,
    MiniCart as MinicartComponent
} from "./styled";

const MiniCart = props => {
    if  (props.storeContext.miniCartIsOpen) {
        return (
            <MinicartComponent>
                <MiniCartHeader>
                    <MiniCartTotal>Total: <MiniCartItemPrice>10 €</MiniCartItemPrice></MiniCartTotal>
                </MiniCartHeader>
                <MiniCartItems>
                    {props.storeContext.products.map(product => {
                        return(
                            <MiniCartItem>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
                                <MiniCartItemName>{ product.name }</MiniCartItemName>
                                <MiniCartItemPrice>{ product.price } €</MiniCartItemPrice>
                                <MiniCartItemQty>Qty: { product.qty }</MiniCartItemQty>
                            </MiniCartItem>
                        )
                    })}
                </MiniCartItems>
            </MinicartComponent>
        )
    }

    return null
}

export default withStoreContext(MiniCart);