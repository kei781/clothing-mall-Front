import React from "react";
import style from "./style/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={style.Wrap}>
      <div className={style.Inner}>{children}</div>
    </div>
  );
};

export default Layout;
