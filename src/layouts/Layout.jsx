import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

function Layout({ children }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main style={{ flex: "1" }}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
