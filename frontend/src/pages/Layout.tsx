import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex-grow ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
