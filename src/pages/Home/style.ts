import styled from 'styled-components'

export const StyledHomePage = styled.main`
  display: flex;

  justify-content: center;

  height: 100vh;
  width: 100vw;
  min-width: 500px;

  .hide-container {
    display: none;
  }

  .image-area {
    width: 50%;
    background-color: var(--color-primary-1);
    align-items: center;
    justify-content: center;

    img {
      width: 700px;
      height: 500px;
    }
  }

  .form-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    min-width: 500px;

    .form-info {
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 1.2rem;

      h4 {
        color: var(--grey-6);
        font-size: var(--font-size-26);
        font-weight: var(--font-weight-400);
      }

      p {
        color: var(--grey-3);
        font-size: var(--font-size-16);
        font-weight: var(--font-weight-400);
      }
    }
  }

  /* Breakpoint para tablets maiores */
  @media (min-width: 600px) {
    /* regras de estilo aqui */
  }

  /* Breakpoint para desktops pequenos */
  @media (min-width: 800px) {
  }

  /* Breakpoint para desktops grandes */
  @media (min-width: 1000px) {
    flex-direction: row;
    /* regras de estilo aqui */
    .hide-container {
      display: flex;
    }
  }
`
