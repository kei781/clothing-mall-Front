import React from "react";
import style from "./style/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.Wrap}>
      <div className={style.Inner}>
        <div className={style.Consumer}>
          <ul>
            <li>
              <div className={style.Title}>COMPANY. 연습용사이트</div>
              <div className={style.Contents}>
                <b>COMPANY.</b> 연습용사이트 <b>owner.</b> 노상운
                <br />
                <b>tel.</b> 010-1234-1234 <br />
                <b>business no. </b>123-12-12345 <br />
                <b>mail order license.</b> 2022-서울서울-1234호 [사업자정보확인]
                <br />
                <b>personal info manager.</b> 노상운 (야옹야옹@naver.com)
                <br />
                <ul>
                  <li>
                    <b>address.</b>
                  </li>
                  <li>
                    <div>[123123] 서울광역시 광화문쪽 이쪽동</div>
                    <div>123-12번지 123층 연습용사이트</div>
                  </li>
                </ul>
                <b>
                  copyright © exam_1 all rights reserved / published by plain
                  designs
                </b>
              </div>
            </li>
            <li>
              <div className={style.Title}>C/S CENTER</div>
              <div className={style.Contents}>
                123-1234-1234 <br />
                <b>월-금: </b> PM 14:00 - PM 17:00 <br />
                <b>점심: </b> PM 13:00 - PM 14:00 <br />
                <b>토 / 일 / 공휴일 OFF</b>
                <br />
                <b>[Q&A & 카카오 상담시간]</b>
                <br />
                AM 10:00 - PM 18:00 Q&A
                <br />
                게시판이나 카카오 상담시 더 빠른 상담이 가능합니다
              </div>
            </li>
            <li>
              <div className={style.Title}>
                BANK
                <br />
                ACCOUNT
              </div>
              <div className={style.Contents}>
                KB국민: 123123-12-123123 <br />
                예금주 : 노상운(연습용사이트)
              </div>
            </li>
            <li>
              <div className={style.Title}>[교환/반품 주소]</div>
              <div className={style.Contents}>
                서울광역시 서울서울 저쪽동 123-12번지 꼭대기층 연습용사이트
                <br />
                CJ대한통운 택배고객센터 : 1588-1255 <br />* 공지사항 및
                이용안내를 참고하여 지정택배사로 반품요청해주세요.
              </div>
            </li>
            <li>
              <div className={style.Title}>SERVICE</div>
              <div className={style.Contents}>
                고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰 에서
                가입한 구매안전 서비스를 이용하실 수 있습니다.
              </div>
            </li>
          </ul>
        </div>
        <div className={style.Home}>
          <ul>
            <li>
              <a href="/">홈으로</a>
            </li>
            <li>
              <a href="/">회사소개</a>
            </li>
            <li>
              <a href="/">이용약관</a>
            </li>
            <li>
              <a href="/">개안정보취급방침</a>
            </li>
            <li>
              <a href="/">이용안내</a>
            </li>
            <li>
              <a href="/">고객센터</a>
            </li>
            <li>
              <a href="/">자주묻는질문</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
