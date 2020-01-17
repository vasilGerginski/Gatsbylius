import styled from "styled-components";
import { color } from "../../helpers/themeHelpers";

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const CartInfo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  margin-left: 0.2rem;
  font-size: 0.8rem;
  border-radius: 50%;
  color: white;
  background-color: ${color("secondary")};
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
`;

export const MiniCartTotal = styled.div`
  float: right;
`;

export const MiniCartHeader = styled.div`
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 1.6em;
  color: #abb0be;

  ${MiniCartTotal}
`;

export const MiniCartItem = styled.li`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const MiniCartItemName = styled.span`
  display: block;
  padding-top: 10px;
  font-size: 16px;
`;

export const MiniCartItemPrice = styled.span`
  color: ${color("secondary")};
  margin-right: 8px;
`;

export const MiniCartItemQty = styled.span`
  color: ${color("secondary")};
`;

export const MiniCartItems = styled.ul`
    padding-top: 20px;
    li {
        margin-bottom: 18px;
    }
    
    img {
        float: left;
        margin-right: 12px;
    }
    
    ${MiniCartItemName}
    ${MiniCartItemPrice}
    ${MiniCartItemQty}
`;

export const MiniCart = styled.div`
  position: fixed;
  top: 4rem;
  right: 1rem;
  width: 320px;
  padding: 1rem;
  background: white;
  border-radius: 0.25rem;
  box-shadow: ${({ theme }) => theme.boxShadows.light};
  z-index: 100;

  ${MiniCartHeader}

  ${MiniCartItems}
    
    &:after {
    bottom: 100%;
    left: 89%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: white;
    border-width: 8px;
    margin-left: -8px;
  }
`;
