import '../../css/Pagination.css'
import styled from 'styled-components'

function Pagination() {
  const StyledPagination = styled.div`
    display: none;
    
    @media screen and (max-width: 420px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 40px;
      padding: 0 5px;
    }
  `

  const StyledPrevious = styled.a`
    @media screen and (max-width: 420px) {
      color: var(--gray-main);
    }
  `

  const StyledParagraph = styled.p`
    @media screen and (max-width: 420px) {
      color: var(--black-russian);
      line-height: 20px;
      letter-spacing: 0.4px;
    }
  ` 

  const StyledNext = styled.a`
    @media screen and (max-width: 420px) {
      color: var(--black-russian);
    }
  `

  return(
    <StyledPagination>
        <StyledPrevious href="#previous">
          <i className="fas fa-chevron-left"></i>
        </StyledPrevious>
        <StyledParagraph>
          <span className="selected">01</span> / <span>03</span>
        </StyledParagraph>
        <StyledNext href="#next">
          <i className="fas fa-chevron-right"></i>
        </StyledNext>
    </StyledPagination>
  )
}

export default Pagination;