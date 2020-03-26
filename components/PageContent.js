import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPageContent = styled.div` 
    background-color: #f9f9f9;
    height: 100%;
    padding: 1rem;
    overflow: auto;
`;


class PageContent extends Component {
    render() {
        return (
            <StyledPageContent>
                {this.props.children}
            </StyledPageContent>
        );
    }
}

export default PageContent;