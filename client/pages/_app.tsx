import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { wrapper } from 'store/configureStore';

const App: NextPage<AppProps> = ({ Component, pageProps }): ReactElement => {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};
export default wrapper.withRedux(App);
