import Categories from "./Categories";
import Courses from "./Courses";
import styled from 'styled-components'

function Main() {
  const StyledMain = styled.main`
    width: 85%;
    margin: 0 auto;
  `

  return (
    <StyledMain>
      <Categories title="Title H4 - Categorias" />
      <Courses />
    </StyledMain>
  )
}

export default Main;