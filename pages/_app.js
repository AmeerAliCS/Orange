import '../styles/globals.css'
import Layout from '../components/Layout';
import CustomerCard from "../components/CustomerCard";


function MyApp({ Component, pageProps }) {
  return (
        <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/*    <CustomerCard/>*/}
        </>
    );
}

export default MyApp
