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
  }

  .ask-button {
    color: var(--grey-3);
  }

  .link-button {
    color: var(--color-primary-1);
    font-weight: var(--font-weight-700);
  }
`
