import styled from 'styled-components'

export const StyledCardsList = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    padding: 0 2rem 3rem 2rem;
    gap: 3rem;

    h1 {
      font-weight: lighter;
      font-size: var(--font-size-20);
    }

    .filter-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .select-container,
      .input-container {
        height: 50px;
        border-radius: var(--border-radius-8);
        padding: 0 1rem;
        cursor: pointer;

        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      }

      .select-container:active,
      .input-container:active {
        outline: 2px solid var(--color-primary-1);
      }

      .select-container {
        background-color: var(--grey-1);
        width: 80px;

        select {
          border: none;
          background-color: transparent;
          align-self: center;
          color: var(--grey-5);
          width: 100%;
          height: 100%;
          cursor: pointer;

          outline: none;

          option {
            background-color: transparent;
            color: var(--grey-5);
          }
        }
      }

      .input-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: var(--grey-0);
        border-radius: var(--border-radius-8);

        input {
          border: none;
          background-color: transparent;
          width: 100px;
          height: 100%;

          outline: none;
          cursor: pointer;
        }
      }
    }
  }

  .contacts-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    .card:hover {
      background-color: var(--color-white);
      box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
    }
  }

  /* Breakpoint para tablets maiores */
  @media (min-width: 600px) {
    /* regras de estilo aqui */
    .container {
      padding: 1rem;
    }
  }

  /* Breakpoint para desktops pequenos */
  @media (min-width: 800px) {
  }

  /* Breakpoint para desktops grandes */
  @media (min-width: 1000px) {
    /* regras de estilo aqui */
    .container {
      padding: 3rem 0;
      justify-content: space-between;
      flex-direction: row;
    }

    .filter-container {
      width: 40%;
    }
  }
`
