import styled from 'styled-components'

export const StyledCards = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 200px;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    padding: 3rem 1rem 1rem 1.5rem;
    width: 90%;
    max-width: 340px;
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
  }

  .card:hover {
    background-color: var(--color-white);
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
  }
`
