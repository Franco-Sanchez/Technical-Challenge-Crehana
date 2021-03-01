import Button from "./Button";
import styled from "styled-components";

function BannerCourses({ goto }) {
  const StyledBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--gray-lighter);
    padding: 72px 0;
    width: 85%;
    margin: 0 auto;
    border-radius: 10px;

    @media screen and (max-width: 420px) {
      width: 100%;
      margin: 0;
      padding: 50px 0px;
    }
  `;
  const StyledTitle = styled.h2`
    font-weight: 900;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    margin-bottom: 24px;

    @media screen and (max-width: 420px) {
      font-size: 32px;
    }
  `;
  const StyledText = styled.span`
    display: block;
  `;

  return (
    <StyledBanner>
      <StyledTitle>
        Title H2 - <StyledText>banner cursos nuevos</StyledText>
      </StyledTitle>
      <Button
        onClick={() =>
          sessionStorage.getItem("token") ? goto("checkout") : goto("register")
        }
        dark={true}
      >
        Comprar ahora
      </Button>
    </StyledBanner>
  );
}

export default BannerCourses;
