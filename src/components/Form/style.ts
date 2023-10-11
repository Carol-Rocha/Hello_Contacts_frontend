import styled from 'styled-components'

export const StyledFormContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 500px;
  height: 100vh;

  section {
    display: flex;
    flex-direction: column;

    width: 500px;
    padding: 2rem 4rem 4rem 4rem;

    .form-information {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      h1 {
        color: var(--grey-6);
        font-weight: lighter;
      }

      p {
        color: var(--grey-3);
      }
    }

    .form-buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 1.5rem;

      span {
        color: var(--grey-3);
        font-size: var(--font-size-14);
      }

      #submit-button {
        color: var(--color-primary-1);
        font-weight: bold;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 3rem 2rem;

    .nav-buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 1rem;

      button {
        padding: 0.8rem;

        min-width: 40%;
        border: none;
        border-radius: var(--border-radius-8);

        background-color: var(--grey-1);
        color: var(--grey-3);
        font-size: var(--font-size-16);
        font-weight: bold;
      }

      #button-submit {
        background-color: var(--color-primary-1);
        color: var(--grey-0);
        font-weight: bold;
      }

      button:active,
      #button-submit:active {
        background-color: var(--grey-3);
        color: var(--grey-0);
        font-weight: bold;
      }
    }
  }

  #illustration-image {
    display: none;
  }

  /* Breakpoint para tablets maiores */
  @media (min-width: 600px) {
    /* regras de estilo aqui */
    section {
      background-color: var(--grey-0);
      box-shadow: 0px 4px 30px rgba(0, 4, 30, 0.25);
      border-radius: var(--border-radius-8);
    }
  }

  /* Breakpoint para desktops pequenos */
  @media (min-width: 800px) {
    flex-direction: row;

    /* #illustration-image {
      display: flex;
      width: 200px;
      height: 200px;
    } */
  }

  /* Breakpoint para desktops grandes */
  @media (min-width: 1000px) {
    /* regras de estilo aqui */
  }
`
