import logo from '../../assets/images/mobile/icon_logo.svg';
import '../../css/Header.css';

function Header({ title, text }: any) {
  return (
    <div className="header">
      <a href="#menu"><i className="fas fa-bars"></i></a>
      <div className="header__logo">
        <img src={logo} alt="icon_logo"/>
        <h1 className="header__title">{title}</h1>
      </div>
      <a href="#search"><i className="fas fa-search"></i></a>
      <button className="header__button">{text}</button>
    </div>
  )
}

export default Header;