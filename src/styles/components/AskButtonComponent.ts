import styled from 'styled-components'

export const StyledAskButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;
  padding: 1rem 0;

  span {
    font-size: var(--font-size-12);
    cursor: pointer;
  }

  .ask-button {
    color: var(--grey-3);
  }

  .ask-button:hover {
    text-decoration: underline;
  }

  .link-button {
    color: var(--color-primary-1);
    font-weight: var(--font-weight-700);
  }
`
