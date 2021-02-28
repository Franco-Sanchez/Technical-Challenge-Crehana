import styled from 'styled-components'

function CategoryItem({ name }: any) {
  const StyledButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 112px;
    background-color: var(--gray-lighter);
    cursor: pointer;
    border: none;
    font-size: 14px;
    line-height: 20px;
    color: var(--black);
    font-weight: bold;
    border-radius: 10px;
  `

  const StyledIcon = styled.i`
    color: var(--gray-dark);
    margin-bottom: 10px;
  `
  
  return (
    <StyledButton>
      <StyledIcon className="fas fa-bullhorn"></StyledIcon>
      {name}
    </StyledButton>
  )
}

export default CategoryItem;