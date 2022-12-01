import React from "react";
import style from "./style/Header.module.css";
const Header = () => {
  return (
    <header className={style.Wrap}>
      <div className={style.Inner}>
        <ul className={style.FunctionMenu}>
          <li>
            <form>
              <input type="text" placeholder="검색어를 입력해 주세요" />
              <button>검색</button>
            </form>
          </li>
          <li>Account</li>
          <li>장바구니</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
