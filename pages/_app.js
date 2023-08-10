import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import AOS from "aos";

import "aos/dist/aos.css";
import '../styles/globals.sass'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    AOS.init(
      {
        once: true,
        disable: 'mobile',
        startEvent: 'load',
      }
    );
  }, []);
  return  <>
            <Head>
              <meta charSet="UTF-8" />
              <script id="CookieConsent" src="https://policy.app.cookieinformation.com/uc.js" data-culture="EN" type="text/javascript"></script>
              <meta name="keywords" content="" />
              <meta name="author" content="Livalta | Ab Agri" />

              <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
              <link rel="manifest" href="/favicon/site.webmanifest"></link>
            </Head>
            <div>
              <Component {...pageProps} />
            </div>
          </>
}

export default MyApp
