import logo from '../../assets/images/mobile/icon_logo_white.svg';
import '../../css/HeaderCheckout.css'

function Header({ title }: any ) {
  return (
    <header className="header-checkout">
      <img src={logo} alt="icon_logo"/>
      <h1>{title}</h1>
    </header>
  )
}

export default Header;