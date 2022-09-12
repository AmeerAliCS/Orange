import Navbar from "./Navbar";
import Footer from "./Footer";
import { MessengerChat } from "react-messenger-chat-plugin";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: ["Tajawal", "sans-serif"].join(","),
  },
});
function Layout(props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Navba /> */}
        <Navbar />
        {/* <h1>Hello World !!!!!</h1> */}
        {props.children}
        <MessengerChat
          pageId="110388588223967"
          language="ar"
          themeColor={"#ff7700"}
          bottomSpacing={100}
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
