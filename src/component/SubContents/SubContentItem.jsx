import React, { useState } from "react";
import style from "./style/SubContentItem.module.css";
import { BACK_URL } from "../../config";
import axios from "axios";
import { useParams } from "react-router-dom";

const SubContentItem = () => {
  const [boardList, setBoardList] = useState([]);
  // const { category, typeOfClothes } = useParams();
  useState(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: `${BACK_URL}board/getList`,
          method: "GET",
          params: {
            category: `남성복`,
          },
        });
        setBoardList(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div className={style.Wrap}>
        <div className={style.Inner}>
          {boardList.map((data) => (
            <div className={style.Contents}>
              <div className={style.img}></div>
              <div className={style.name}>{data.name}</div>
              <div className={style.price}>{data.price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SubContentItem;
