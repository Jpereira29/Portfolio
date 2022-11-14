import { Header } from "../components/Header"
import { GlobalStyle } from "../styles/globals"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
