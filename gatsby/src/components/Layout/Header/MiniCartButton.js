import React from "react"
import { withStoreContext } from "../../../context/StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartInfo, NavItem, NavLink } from "./styled";

const MiniCartButton = props => (
    <NavItem key={"cart"}>
        <NavLink onClick={() => {
            props.storeContext.miniCartIsOpen ?
            props.storeContext.miniCartIsOpen = false :
            props.storeContext.miniCartIsOpen = true
        }}>
            <FontAwesomeIcon icon={faShoppingCart} /> <CartInfo>{props.storeContext.products.length}</CartInfo>
        </NavLink>
    </NavItem>
)

export default withStoreContext(MiniCartButton);