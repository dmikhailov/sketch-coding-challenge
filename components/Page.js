import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const PageContainer = styled.div` 
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    height: 100%;   
`;

const Content = styled.div` 
    background-color: #f9f9f9;
    height: 100%;
    padding: 1rem;
    overflow: auto;
`;


class Page extends Component {
    render() {
        return (
            <PageContainer>
                <Meta />
                <Header />
                <Content>
                    {this.props.children}
                </Content>
            </PageContainer>
        );
    }
}

export default Page;