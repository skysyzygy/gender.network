import '../styles/globals.css'
import {QueryClientProvider, QueryClient} from 'react-query'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const queryClient = new QueryClient()

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    
    <QueryClientProvider client={queryClient}>

      <Component {...pageProps} />

    </QueryClientProvider>
    </>
  
  )
}