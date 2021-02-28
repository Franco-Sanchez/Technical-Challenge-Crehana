import logo from '../../assets/images/mobile/icon_logo.svg';
import Button from './Button';
import styled from 'styled-components'

function Header({ title }: any) {
  const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
    margin: 0 auto 16px auto;
    width: 85%;

    @media screen and (max-width: 420px) {
      padding: 16px 0;
    }
  `

  const StyledAnchor = styled.a`
    display: none;

    @media screen and (max-width: 420px) {
      display: inline-block;
      color: var(--blue-lighter);
    }
  `

  const StyledLogo = styled.div`
    display: flex;
    align-items: center;
  `
  const StyledTitle = styled.h1`
    font-weight: 900;
    font-size: 20px;
    margin-left: 8px;
  `

  return (
    <StyledHeader>
      <StyledAnchor href="#menu"><i className="fas fa-bars"></i></StyledAnchor>
      <StyledLogo className="header__logo">
        <img src={logo} alt="icon_logo"/>
        <StyledTitle className="header__title">{title}</StyledTitle>
      </StyledLogo>
      <StyledAnchor href="#search"><i className="fas fa-search"></i></StyledAnchor>
      <Button white={true} text="Registrate gratis"/>
    </StyledHeader>
  )
}

export default Header;