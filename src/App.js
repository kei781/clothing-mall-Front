import Contents from "./component/Contents";
import SubContents from "./component/SubContents";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Layout from "./Layout/Layout";
import SideMenu from "./Layout/SideMenu";

function App() {
  return (
    <>
      {/* 상단 레이아웃 */}
      <Layout>
        {/* 왼쪽에 위치한 메뉴 */}
        <SideMenu />
        {/* 오른쪽 상단의 헤더 및 기능탭 */}
        <Header />
        {/* 오른쪽 하단의 컨텐츠 메뉴 3개 */}
        {/* 컴포넌트임. */}
        <Contents />
      </Layout>
      {/* 하단의 일괄메뉴 */}
      {/* 컴포넌트임. */}
      <SubContents />
      {/* 최하단 푸터 */}
      <Footer />
    </>
  );
}

export default App;
