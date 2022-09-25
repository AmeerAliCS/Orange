import Navbar from "./Navbar";
import Footer from "./Footer";
import { MessengerChat } from "react-messenger-chat-plugin";
import { createTheme, ThemeProvider } from "@mui/material";
import Head from "next/head";
const theme = createTheme({
  typography: {
    fontFamily: ["Tajawal", "sans-serif"].join(","),
  },
});
function Layout(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        {/* <meta name="robots" content="all" /> */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Arabic" />
        <meta name="author" content="orange platform" />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* <Navba /> */}
        <Navbar />
        {props.children}
        <MessengerChat
          pageId="110388588223967"
          language="ar"
          themeColor={"#ff7700"}
          bottomSpacing={50}
          loggedInGreeting="loggedInGreeting"
          loggedOutGreeting="loggedOutGreeting"
          greetingDialogDisplay={"show"}
          debugMode={true}
          onMessengerShow={() => {
            console.log("onMessengerShow");
          }}
          onMessengerHide={() => {
            console.log("onMessengerHide");
          }}
          onMessengerDialogShow={() => {
            console.log("onMessengerDialogShow");
          }}
          onMessengerDialogHide={() => {
            console.log("onMessengerDialogHide");
          }}
          onMessengerMounted={() => {
            console.log("onMessengerMounted");
          }}
          onMessengerLoad={() => {
            console.log("onMessengerLoad");
          }}
        />

        <Footer />
      </ThemeProvider>
    </>
  );
}
export default Layout;
