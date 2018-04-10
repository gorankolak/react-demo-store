import styled from 'styled-components';

// Styled Components
const HeaderContainerStyle = styled.header`
    margin-bottom: 12px;
    padding: 24px 12px 12px;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: rgba(7, 59, 76, 1);
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(168, 163, 168, 1);
    -moz-box-shadow: 0px 3px 5px 0px rgba(168, 163, 168, 1);
    box-shadow: 0px 3px 5px 0px rgba(168, 163, 168, 1);
`;

const HeaderH1Style = styled.h1`
    margin-top: 12px;
`;

export { HeaderContainerStyle, HeaderH1Style };