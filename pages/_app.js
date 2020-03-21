import Page from '../components/Page';
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
};

Router.onRouteChangeError = () => {
    NProgress.done();
};

export default ({ Component, pageProps }) => (
    <Page>
        <Component {...pageProps} />
    </Page>
);