import { ReactNode } from "react";

import "./Layout.scss";
import Header from "../components/Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='layout-container'>
      <header>
        <Header title={"Welcome to BT Parking Lot System"} />
      </header>
      <main className='main-container'>{children}</main>
    </div>
  );
}
