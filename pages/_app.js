import '../styles/globals.css'
import Script from 'next/script'
import {QueryClientProvider, QueryClient} from 'react-query'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const queryClient = new QueryClient()

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
          <Script id="analytics1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-D4R0Z132LX`}
      />
  
      <Script id="analytics2" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-D4R0Z132LX');
        `}
      </Script>

    <QueryClientProvider client={queryClient}>

      <Component {...pageProps} />

    </QueryClientProvider>
    </>
  
  )
}