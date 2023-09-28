import styled from 'styled-components'

export const StyledDesktopNavMenu = styled.nav`
  display: none;

  .nav-menu {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 3rem;

    li,
    a {
      color: var(--grey-3);
      font-size: var(--font-size-16);

      cursor: pointer;

      a {
        text-decoration: none;
      }
    }

    li:hover,
    a:hover {
      color: var(--grey-5);
    }
  }

  /* Breakpoint para tablets maiores */
  @media (min-width: 600px) {
    /* regras de estilo aqui */
  }

  /* Breakpoint para desktops pequenos */
  @media (min-width: 800px) {
    display: block;
  }

  /* Breakpoint para desktops grandes */
  @media (min-width: 1000px) {
    /* regras de estilo aqui */
  }
`
