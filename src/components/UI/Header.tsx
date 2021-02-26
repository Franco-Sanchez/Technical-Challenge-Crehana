import menu from '../../assets/images/mobile/menu.svg';
import logo from '../../assets/images/mobile/icon_logo.svg';
import search from '../../assets/images/mobile/search.svg';
import '../../css/Header.css';

function Header({ title, text }: any) {
  return (
    <div className="header">
      <img src={menu} alt="menu" />
      <div className="header__logo">
        <img src={logo} alt="icon_logo"/>
        <h1 className="header__title">{title}</h1>
      </div>
      <img src={search} alt="search" />
      <button className="header__button">{text}</button>
    </div>
  )
}

export default Header;