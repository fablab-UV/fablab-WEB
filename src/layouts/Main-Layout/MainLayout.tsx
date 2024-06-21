// src/layouts/MainLayout.jsx
import React, { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: RootLayoutProps) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
