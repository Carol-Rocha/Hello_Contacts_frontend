import styled from 'styled-components'
import {
  NavToggleAnimation,
  closeToggleAnimation
} from '../../../styles/components/animation/NavToggleAnimation'

export const StyledMobileNavMenu = styled.nav`
  display: flex;
  width: 100%;

  .show-menu-info {
    display: block;
    margin-top: 2rem;
    animation-name: ${NavToggleAnimation};
    animation-duration: 2s;
    animation-timing-function: ease;

    li,
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem 0;

      color: var(--grey-3);

      img {
        height: 20px;
        width: 20px;
      }

      span {
        font-size: var(--font-size-16);
      }
    }

    a {
      text-decoration: none;
    }

    li:hover,
    a:hover {
      font-weight: bold;
    }
  }

  .close-menu-info {
    animation-name: ${closeToggleAnimation};
    animation-duration: 5s;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem 0;

      color: var(--grey-3);

      img {
        height: 20px;
        width: 20px;
      }

      span {
        font-size: var(--font-size-16);
      }
    }

    display: none;
  }

  /* Breakpoint para tablets maiores */
  @media (min-width: 600px) {
    /* regras de estilo aqui */
  }

  /* Breakpoint para desktops pequenos */
  @media (min-width: 800px) {
    display: none;
  }

  /* Breakpoint para desktops grandes */
  @media (min-width: 1000px) {
    /* regras de estilo aqui */
  }
`
