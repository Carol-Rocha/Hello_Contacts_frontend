import styled from 'styled-components'

export const StyledCardsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  .card:hover {
    background-color: var(--color-white);
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
  }
`
