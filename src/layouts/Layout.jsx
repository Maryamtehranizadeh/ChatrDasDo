import Footer from "./Footer";
import Header from "./Header";
import SearchBox from "./SearchBox";

function Layout({ children }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <SearchBox />
      <main style={{ flex: "1" }}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
