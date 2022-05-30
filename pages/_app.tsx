import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { store } from '../src/redux-store';
import { Provider } from 'react-redux';
import Head from 'next/head';
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <link rel="shortcut icon" href="yt_icon.png" type="image/x-icon" />
                <title>Youtube</title>
            </Head>
            <NextNProgress color='red' height={2} />
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp;
