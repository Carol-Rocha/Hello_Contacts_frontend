import styled from 'styled-components'

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  padding: 3rem 1rem 1rem 1.5rem;
  width: 90%;
  max-width: 340px;
  margin: 0 auto;
  gap: 1rem;
  margin-bottom: 2rem;
  background-color: var(--grey-0);
  border-radius: var(--border-radius-8);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);

  .edit-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    cursor: pointer;
  }

  .card-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    color: var(--grey-5);
  }

  button {
    width: 100px;
    padding: 0.8rem 0;
    margin: 0 auto;

    border: none;
    border-radius: var(--border-radius-8);
    background-color: var(--color-primary-1);

    color: var(--grey-0);
    font-size: var(--font-size-16);
    font-weight: bold;
  }

  button:focus {
    background-color: var(--grey-3);
  }

  /* Breakpoint para tablets maiores */
  @media (min-width: 600px) {
    /* regras de estilo aqui */
  }

  /* Breakpoint para desktops pequenos */
  @media (min-width: 800px) {
    margin: 0;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  /* Breakpoint para desktops grandes */
  @media (min-width: 1000px) {
    /* regras de estilo aqui */
  }
`
