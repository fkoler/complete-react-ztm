import styled from 'styled-components';

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
`;

export const Title = styled.h2`
    font-size: 28px;
    margin: 40px 0 25px 0;
    text-align: center;
`;
