import styled from 'styled-components'

function Button( { text, dark, white }:any ) {

  const StyledButton = styled.button`
    background-color: ${props => props.dark ? 'var(--black-russian)' : 'var(--white)'};
    border: 3px solid var(--black-russian);
    border-radius: 10px;
    padding: 14px 40px;
    color: ${props => props.dark ? 'var(--white)' : 'var(--black-russian)' };
    font-weight: 800;
    font-size: 18px;
    line-height: 20px;
    cursor: pointer;
    outline: none;

    @media screen and (max-width: 420px) {
      display: ${props => props.white ? 'none': 'block'}
    }
  `
  
  return (
    <StyledButton white={white} dark={dark}>{text}</StyledButton>
  )
}

export default Button;