import Page from '../components/Page';
import Router from "next/router";
import NProgress from "nprogress";
import {ApolloProvider} from 'react-apollo';
import withData from '../hoc/withData';
import App from "next/app";

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
};

Router.onRouteChangeError = () => {
    NProgress.done();
};

class SketchApp extends App {
    render() {
        const {Component, apollo, pageProps} = this.props;
        return (
            <ApolloProvider client={apollo}>
                <Page>
                    <Component {...pageProps} />
                </Page>
            </ApolloProvider>
        );
    }
}
export default withData(SketchApp);