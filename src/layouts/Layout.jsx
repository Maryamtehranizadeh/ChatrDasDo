import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";
function Layout({ children }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Search />
      <main style={{ flex: "1" }}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
