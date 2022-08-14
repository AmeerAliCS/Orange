import Navbar from "./Navbar";

function Layout(props) {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      {/* <h1>Hello World !!!!!</h1> */}
      {props.children}
      {/* <footer>Footer</footer> */}
    </>
  );
}
export default Layout;
