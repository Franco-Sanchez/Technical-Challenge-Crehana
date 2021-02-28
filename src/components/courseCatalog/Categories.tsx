import CategoryItem from "./CategoryItem";
import styled from 'styled-components'
import STORE from "../../store";

function Categories({ title }: any) {
  const StyledSection = styled.section`
    margin-top: 40px;
  `

  const StyledTitle = styled.h4`
    font-size: 24px;
    line-height: 28px;
    font-weight: 900;
    margin-bottom: 16px;
  `

  const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 120px);
    column-gap: 24px;

    @media screen and (max-width: 420px) {
      column-gap: 8px;
      overflow-x: scroll;
    }
  `

  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      <StyledContainer>
        {STORE.categories.slice(0, 8).map((category: any) => {
          return <CategoryItem key={category.id} name={category.name} />;
        })}
      </StyledContainer>
    </StyledSection>
  );
}

export default Categories;
