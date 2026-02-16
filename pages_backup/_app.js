import '../styles/globals.css';
import { WishlistProvider } from '../context/WishlistContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <WishlistProvider>
      <Head>
        <title>GlowGuide Skincare</title>
      </Head>
      <Component {...pageProps} />
    </WishlistProvider>
  );
}

export default MyApp;