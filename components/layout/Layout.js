import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, noPadding }) => {
  return (
    <div className="bg-black flex flex-col w-full h-screen min-h-screen">
      <Navbar />
      <Content noPadding={noPadding}>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
