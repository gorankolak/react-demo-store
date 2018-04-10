import React, { Component } from 'react';
import { Main } from './HomeStyle';
import { Products, PRODUCTS, Cart } from './components';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            totalCartPrice: 0
        };
    }

    getTotalPrice = () => {
        let totalCartPrice = 0;

        this.state.cart.forEach(cartItem => {
            totalCartPrice += cartItem.price * cartItem.quantity;
        });
        return totalCartPrice;
    };

    addProductToCart = e => {
        const id = e.target.name;
        const item = PRODUCTS.find(item => item.id === id);
        const cart = this.state.cart.filter(n => n.id !== id);
        
        if (!item.quantity) {
            item.quantity = 0;
        }
        item.quantity += 1;
        cart.push(item);
        this.setState({
            cart
        });
    };

    removeProductFromCart = e => {
        const id = e.target.name;
        const item = PRODUCTS.find(item => item.id === id);

        const cart = this.state.cart;
        const newCart = cart.filter(n => n.id !== id);
        item.quantity = 0;
        this.setState({
            cart: newCart
        });
    };

    render() {
        const cart = this.state.cart;
        const totalPrice = this.getTotalPrice();
        const removeProductFromCart = this.removeProductFromCart;
        const addProductToCart = this.addProductToCart;

        return (
            <Main>
                <Products addProductToCart={addProductToCart} />
                <Cart
                    cart={cart}
                    totalPrice={totalPrice}
                    removeProductFromCart={removeProductFromCart}
                />
            </Main>
        );
    }
}

export default Home;