import Navbar from "./Navbar";
import Footer from "./Footer";
// import MessengerCustomerChat from "react-messenger-customer-chat";
import { MessengerChat } from "react-messenger-chat-plugin";

function Layout(props) {
  return (
    <>
      {/* <Navba /> */}
      <Navbar />
      {/* <h1>Hello World !!!!!</h1> */}
      {props.children}
      <MessengerChat
        pageId="110388588223967"
        language="sv_SE"
        themeColor={"#000000"}
        bottomSpacing={300}
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
      ,
      {/* <MessengerCustomerChat
        pageId="110388588223967"
        appId="464199215610503"
        // htmlRef="<REF_STRING>"
      /> */}
      <Footer />
    </>
  );
}
export default Layout;
