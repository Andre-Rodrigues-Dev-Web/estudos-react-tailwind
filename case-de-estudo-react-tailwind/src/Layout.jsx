import { Outlet } from "react-router-dom";
import Menu from "./shared/components/Menu";

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Layout;
