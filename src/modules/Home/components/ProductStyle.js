import styled from 'styled-components';

// Styled Components
const ProductsContainerStyle = styled.div`
    width: 75%
    float: left;
    box-sizing: border-box;
    font-family: sans-serif;

    &:after {
        content: '';
        display: table;
        clear: both;
    }

    h2 {
        padding-left: 12px;
    }
`;

const ProductsListStyle = styled.ul`
    padding-left: 0;

    &:after {
        content: '';
        display: table;
        clear: both;
    }

    img {
        max-width: 100%;
    }
`;

const ProductsItemStyle = styled.li`
    float: left;
    width: 25%;
    min-height: 170px;
    margin: 0 12px 24px;
    padding: 6px 18px 24px;
    text-align: center;
    list-style: none;
    border-radius: 3px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(168, 163, 168, 1);
    -moz-box-shadow: 0px 2px 5px 0px rgba(168, 163, 168, 1);
    box-shadow: 0px 2px 5px 0px rgba(168, 163, 168, 1);
`;

const Button = styled.button`
    padding: 12px 18px;
    background-color: rgba(239, 71, 111, 1);
    border: none;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    border-radius: 2px;
    text-transform: uppercase;
    outline: none;
    -webkit-box-shadow: 0px 1px 5px 0px rgba(168, 163, 168, 1);
    -moz-box-shadow: 0px 1px 5px 0px rgba(168, 163, 168, 1);
    box-shadow: 0px 1px 5px 0px rgba(168, 163, 168, 1);
    transition: box-shadow 0.2s;

    &:hover {
        -webkit-box-shadow: 0px 2px 5px 2px rgba(168, 163, 168, 1);
        -moz-box-shadow: 0px 2px 5px 2px rgba(168, 163, 168, 1);
        box-shadow: 0px 2px 5px 2px rgba(168, 163, 168, 1);
    }
`;

export { ProductsContainerStyle, ProductsListStyle, ProductsItemStyle, Button };