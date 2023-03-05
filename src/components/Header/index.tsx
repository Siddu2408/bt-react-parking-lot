import * as React from "react";
import "./Header.scss";

export interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  return (
    <div className='header-container'>
      <h1 className='title'>{props.title}</h1>
    </div>
  );
}
