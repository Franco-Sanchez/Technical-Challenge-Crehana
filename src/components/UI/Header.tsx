import React from 'react';
import '../../css/Header.css';

function Header({ title, text }: any) {
  return (
    <div className="header">
      <img src="/images/mobile/menu.svg" alt="menu" />
      <div className="header__logo">
        <img src="/images/mobile/icon_logo.svg" alt="icon_logo"/>
        <h1 className="header__title">{title}</h1>
      </div>
      <img src="/images/mobile/search.svg" alt="search" />
      <button className="header__button">{text}</button>
    </div>
  )
}

export default Header;