import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import ContentItem from "../component/Contents/ContentItem";
import style from "./style/Contents.module.css";

const Contents = () => {
  // 게시판 타입

  // 보여줘야할 옷의 종류
  return (
    <div className={style.Wrap}>
      <div className={style.Inner}>
        <div className={style.WrapTop}>
          <div className={style.Title}>HOT</div>
          <button className={style.PostButton}> + </button>
        </div>
      </div>
      <div className={style.Inner}>
        <div className={style.WrapTop}>
          <div className={style.Title}>트렌드</div>
          <button className={style.PostButton}> + </button>
        </div>
      </div>
      <div className={style.Inner}>
        <div className={style.WrapTop}>
          <div className={style.Title}>MD추천</div>
          <button className={style.PostButton}> + </button>
        </div>
      </div>
    </div>
  );
};

export default Contents;
