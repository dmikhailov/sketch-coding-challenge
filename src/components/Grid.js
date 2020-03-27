import styled from "styled-components";

const StyledGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;

    & > * {
        margin-right: 32px;
        margin-bottom: 32px;

        transition: all 0.2s ease-in 0s;
        width: calc(16.6667%);

        @media (max-width: 1440px) {
            width: calc(20%);
        }
        @media (max-width: 1024px) {
            width: calc(25%);
        }
        @media (max-width: 768px) {
            width: calc(33.3333%);
        }
        @media (max-width: 590px) {
            width: calc(50%);
        }
        @media (max-width: 375px) {
            width: calc(100%);
        }
    }
`;

const Grid = (props) => <StyledGrid>{props.children}</StyledGrid>;
export default Grid;
