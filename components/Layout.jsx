import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      {/* <h1>Hello World !!!!!</h1> */}
      {props.children}

        <Footer />
    </>
  );
}
export default Layout;
