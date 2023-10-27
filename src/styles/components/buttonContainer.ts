import styled from 'styled-components'

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
  padding: 1rem;

  button {
    padding: 1rem 1.5rem;
    border: none;
    border-radius: var(--border-radius-8);
    font-size: var(--font-size-16);
    font-weight: bold;
  }

  #button-return {
    background-color: var(--grey-1);
    color: var(--grey-3);
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
`
