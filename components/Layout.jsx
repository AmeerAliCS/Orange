import Navbar from "./Navbar";
import Footer from "./Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";

function Layout(props) {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      {/* <h1>Hello World !!!!!</h1> */}
      {props.children}

      <MessengerCustomerChat
        pageId="110388588223967"
        appId="464199215610503"
        // htmlRef="<REF_STRING>"
      />
      <Footer />
    </>
  );
}
export default Layout;
