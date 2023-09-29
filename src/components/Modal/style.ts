import styled from 'styled-components'

export const StyledModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  > .main-modal {
    /* padding: 1rem 1.5rem; */
    padding: 1.5rem 2rem;
    border-radius: var(--border-radius-5);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
    background-color: var(--color-white);
    width: 80%;
    max-width: 440px;

    .container-position-relative {
      display: flex;
      flex-direction: column;

      position: relative;

      #icon-close {
        position: absolute;
        right: 0;

        height: 16px;
        width: 16px;

        cursor: pointer;
      }

      .info-modal,
      form {
        display: flex;
        flex-direction: column;
      }

      .info-modal {
        align-items: center;
        margin: 0 auto;
        text-align: center;
        width: 380px;

        padding: 2rem 0 2.5rem 0;

        gap: 0.8rem;

        h4 {
          color: var(--grey-5);
          font-weight: var(--font-weight-500);
          font-size: var(--font-size-16);
        }

        p {
          color: var(--grey-3);
          font-size: var(--font-size-12);
        }
      }

      form {
        gap: 1rem;

        input {
          padding: 1rem;
          background-color: var(--grey-1);
          border: none;
          border-radius: var(--border-radius-8);
          color: var(--grey-5);
        }

        input:focus {
          outline: 2px solid var(--color-primary-1);
        }

        input::placeholder {
          font-family: 'Inter', sans-serif;
          color: var(--grey-2);
        }

        .button-box {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          padding: 1rem;

          button {
            padding: 1rem 1.5rem;
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
    }
  }

  /* Breakpoint para tablets maiores */
  @media (min-width: 600px) {
    /* regras de estilo aqui */
  }

  /* Breakpoint para desktops pequenos */
  @media (min-width: 800px) {
    #modal-title {
      color: var(--grey-5);
      font-size: var(--font-size-18);
    }

    #modal-parag {
      color: var(--grey-3);
      font-size: var(--font-size-14);
    }
  }
  /* Breakpoint para desktops grandes */
  @media (min-width: 1000px) {
    /* regras de estilo aqui */
  }
`
