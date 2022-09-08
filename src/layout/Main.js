import Header from "../components/Header";

const Main = (props) => {
  return (
    <>
      <Header />
      {/* <header>Main Header</header> */}
      {props.children}
      {/* <footer>Main Footer</footer> */}
    </>
  );
};

export default Main;
