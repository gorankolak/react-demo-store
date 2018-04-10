import styled from 'styled-components';

// Styled Components
const Main = styled.div`
    max-width: 1260px;
    margin: auto;
    padding: 0 24px 24px;
    box-sizing: border-box;

    &:after {
        content: '';
        display: table;
        clear: both;
    }

    h2 {
        text-transform: uppercase;
    }
`;

export { Main };