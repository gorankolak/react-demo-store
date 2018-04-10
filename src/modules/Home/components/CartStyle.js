import styled from 'styled-components';

// Styled Components
const CartContainerStyle = styled.div`
    width: 25%;
    float: left;
    margin-top: 67px;
    box-sizing: border-box;
    padding: 6px 24px 12px;
    border-radius: 3px;
    font-family: sans-serif;
    background-color: rgba(255, 209, 102, 1);
    -webkit-box-shadow: 0px 2px 5px 0px rgba(168, 163, 168, 1);
    -moz-box-shadow: 0px 2px 5px 0px rgba(168, 163, 168, 1);
    box-shadow: 0px 2px 5px 0px rgba(168, 163, 168, 1);
`;

const CartListStyle = styled.ul`
    padding-left: 0;
`;

const CartListItemStyle = styled.li`
    padding-bottom: 12px;
    list-style: none;
    border-bottom: 2px solid #000;

    h3 {
        margin-bottom: 12px;
    }

    input {
        margin-top: 12px;
        padding: 6px;
        border: none;
    }

    div {
        text-align: right;
    }

    p {
        margin: 0 0 12px;
    }
`;

const Button = styled.button`
    background: rgba(17, 138, 178, 1);
    padding: 8px 16px;
    border: none;
    font-size: 12px;
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

const PriceStyle = styled.h3`
    text-transform: uppercase;
    font-size: 18px;
`;

export { CartContainerStyle, CartListStyle, CartListItemStyle, Button, PriceStyle };