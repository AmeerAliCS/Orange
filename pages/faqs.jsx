import Head from 'next/head'
import FaqsImage from '../components/faqs/FaqsImage'
import FaqsQuestions from '../components/faqs/FaqsQuestions'
export default function Faqs() {
    return (
      <>
      <Head>
        <title>Faqs</title>
      </Head>
      <FaqsImage />
      <FaqsQuestions />
      </>
    )
  }
  