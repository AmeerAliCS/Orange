import '../styles/globals.css'
import Layout from '../components/Layout';
import CustomersReviewCard from "../components/CustomersReviewCard";


function MyApp({ Component, pageProps }) {
  return (
        <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </>
    );
}

export default MyApp
