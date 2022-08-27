import Head from "next/head";
import FaqsImage from "../components/faqs/FaqsImage";
import FaqsQuestions from "../components/faqs/FaqsQuestions";
export default function Faqs() {
  return (
    <>
      <Head>
        <title>Faqs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="icon.svg " />
      </Head>

      <FaqsImage />
      <FaqsQuestions />
    </>
  );
}
