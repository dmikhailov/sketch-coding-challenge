import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "react-apollo";
import withData from "../hoc/withData";
import App from "next/app";
import React from "react";
import styled from "styled-components";
import Meta from "../components/Meta";

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
};

Router.onRouteChangeError = () => {
    NProgress.done();
};

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    height: 100%;
`;

class SketchApp extends App {
    render() {
        const { Component, apollo, pageProps } = this.props;
        return (
            <ApolloProvider client={apollo}>
                <PageContainer>
                    <Meta />
                    <Component {...pageProps} />
                </PageContainer>
            </ApolloProvider>
        );
    }
}
export default withData(SketchApp);
