import React from "react";
import style from "./style/SideMenu.module.css";
const SideMenu = () => {
  return (
    <div className={style.Wrap}>
      <div className={style.Inner}>
        <a href="/" className={style.LogoImg}>
          로고이미지
        </a>
        <a href="/magazine">매거진</a>
        <a href="/new">신상품</a>
        <a href="/best">베스트</a>
        <a href="/brand">브랜드</a>
        <a href="/clothing/female">여성의류</a>
        <a href="/clothing/male">남성의류</a>
        <a href="/clothing/Teenager">청소년의류</a>
        <a href="/clothing/child">아동의류</a>
      </div>
    </div>
  );
};

export default SideMenu;
