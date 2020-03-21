import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const PageContainer = styled.div` 
    margin-top: 4rem;
    background-color: #f9f9f9;
    height: 100%;
    padding: 1rem;
`;


class Page extends Component {
    render() {
        return (
            <PageContainer>
                <Meta />
                <Header />
                    {this.props.children}
            </PageContainer>
        );
    }
}

export default Page;