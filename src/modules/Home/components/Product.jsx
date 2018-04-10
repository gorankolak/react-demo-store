import React, { Component } from 'react';
import { ProductsContainerStyle, ProductsListStyle, ProductsItemStyle, Button } from './ProductStyle';

export const PRODUCTS = [
    {
        id: "1",
        name: "First product",
        description: "First product description. Lorem ipsum dolor sit amet.",
        price: 10
    },
    {
        id: "2",
        name: "Second product",
        description: "Second description. Lorem ipsum dolor sit amet.",
        price: 25
    },
    {
        id: "3",
        name: "Third product",
        description: "Third description. Lorem ipsum dolor sit amet.",
        price: 5
    },
    {
        id: "4",
        name: "Fourth product",
        description: "Fourth description. Lorem ipsum dolor sit amet.",
        price: 30
    },
    {
        id: "5",
        name: "Fifth product",
        description: "Fifth description. Lorem ipsum dolor sit amet.",
        price: 45
    },
    {
        id: "6",
        name: "Sixth product",
        description: "Sixth description. Lorem ipsum dolor sit amet.",
        price: 50
    }
];

export class Products extends Component {
    render() {
        const { addProductToCart } = this.props;

        return (
            <ProductsContainerStyle>
                <h2>Products</h2>
                <ProductsListStyle>
                    {PRODUCTS.map((item, index) => (
                        <ProductsItemStyle key={index}>
                            <h3>{item.name}</h3>
                            <img src="https://placeholdit.co//i/150x170?&bg=ffd166" alt={item.name} />

                            <p>Price: ${item.price} </p>
                            <p>{item.description}</p>
                            <Button
                                type="button"
                                onClick={addProductToCart}
                                name={item.id}
                            >
                                Add to Cart
                            </Button>
                        </ProductsItemStyle>
                    ))}
                </ProductsListStyle>
            </ProductsContainerStyle>
        );
    }
}