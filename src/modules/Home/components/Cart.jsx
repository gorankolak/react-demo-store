import React, { Component } from 'react';
import { CartContainerStyle, CartListStyle, CartListItemStyle, Button, PriceStyle } from './CartStyle';

export class Cart extends Component {
    render() {
        const {
            cart,
            totalPrice,
            removeProductFromCart
        } = this.props;

        return (
            <CartContainerStyle>
                <h2>Cart</h2>
                <CartListStyle>
                    {cart.map((cartItem, index) => (
                        <CartListItemStyle key={index}>
                            <h3> {cartItem.name}</h3>
                            <p>
                                <label>Quantity: </label>
                                <input
                                    type="input"
                                    value={cartItem.quantity}
                                    name={cartItem.id}
                                    readOnly
                                />
                            </p>
                            <p>
                            <label>Price: </label>${cartItem.price * cartItem.quantity}
                            </p>
                            <div>
                                <Button
                                    type="button"
                                    name={cartItem.id}
                                    onClick={removeProductFromCart}
                                >
                                    Remove
                                </Button>
                            </div>
                        </CartListItemStyle>
                    ))}
                    <PriceStyle>Total Price: ${totalPrice}</PriceStyle>
                </CartListStyle>
            </CartContainerStyle>
        );
    }
}