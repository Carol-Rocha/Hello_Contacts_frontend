import styled from 'styled-components'

export const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;

  background-color: var(--grey-1);
  border-radius: var(--border-radius-5);

  input {
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
  }
`
