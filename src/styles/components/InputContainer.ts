import styled from 'styled-components'

export const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  margin-top: 1rem;

  background-color: var(--grey-1);
  border-radius: var(--border-radius-5);

  input {
    color: var(--grey-3);

    border: none;
    background-color: var(--grey-1);
    width: 100%;
  }

  input:focus {
    outline: transparent;
  }

  input::placeholder {
    font-family: 'Inter', sans-serif;
    color: var(--grey-2);
    font-size: var(--font-size-12);
  }

  #closed-password-icon {
    height: 20px;
    width: 20px;

    cursor: pointer;
  }

  .profilePageicons {
    padding-right: 1rem;
  }

  .profilePageInput {
    color: var(--grey-5);
  }
`
