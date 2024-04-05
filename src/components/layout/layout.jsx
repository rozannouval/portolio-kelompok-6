import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <Navbar defaultText="Login sebagai Admin" />
      {children}
      <Outlet />
    </>
  );
}

export default Layout;
