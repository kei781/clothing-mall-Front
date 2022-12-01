import React from "react";
import SubContentItem from "./SubContents/SubContentItem";
import style from "./style/SubContents.module.css";
import { Route, Routes, useParams } from "react-router-dom";
const SubContents = () => {
  return (
    <div className={style.Wrap}>
      <div className={style.Inner}>
        <div className={style.Subject}>SUBJECT</div>
        <div className={style.Contents}>
          <Routes>
            <Route path="/" element={<SubContentItem />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SubContents;
