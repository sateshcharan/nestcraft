import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-3/4 mx-auto ">
      <Header />
      <div className="flex-grow  flex justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
