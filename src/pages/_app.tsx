/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { AppContextProvider } from '../contexts/AppContext';

import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppContextProvider>
            <Layout>
                <>
                    <Head>
                        <title>acquisition.io</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    </Head>
                    <Component {...pageProps} />
                </>
            </Layout>
        </AppContextProvider>
    );
}
