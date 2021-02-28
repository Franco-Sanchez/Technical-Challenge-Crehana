import logo from '../../assets/images/mobile/icon_logo_white.svg';
import styled from 'styled-components'

function Header({ title }: any ) {
  const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black-russian);
    padding: 19px 0;
  `
  const StyledTitle = styled.h1`
    color: var(--white);
    font-weight: 900;
    font-size: 20px;
    line-height: 18px;
    margin-left: 8px;
  `
  
  return (
    <StyledHeader>
      <img src={logo} alt="icon_logo"/>
      <StyledTitle>{title}</StyledTitle>
    </StyledHeader>
  )
}

export default Header;