import styled from 'styled-components'
import {
  CloseMenuAnimation,
  MenuToggleAnimation
} from '../../styles/components/animation/MenuToggleAnimation'

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  padding: 2.2rem 1.5rem;

  background-color: var(--grey-0);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  .header-branding {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    .user-info h4 {
      color: var(--grey-6);
      font-size: var(--font-size-20);
      font-weight: lighter;
    }

    .user-info span {
      color: var(--grey-3);
      font-size: var(--font-size-12);
    }
  }

  .menu-button,
  .open-menu-button {
    border: none;
    background-color: transparent;
  }

  .open-menu-button {
    animation-name: ${MenuToggleAnimation};
    animation-duration: 2s;
    animation-timing-function: ease;
  }
  .menu-button {
    animation-name: ${CloseMenuAnimation};
    animation-duration: 2s;
    animation-timing-function: ease;
  }

  /* Breakpoint para tablets maiores */
  @media (min-width: 600px) {
    /* regras de estilo aqui */
    padding: 2.2rem 3rem;
  }

  /* Breakpoint para desktops pequenos */
  @media (min-width: 800px) {
    .user-info h4 {
      font-size: var(--font-size-36);
    }

    .user-info span {
      font-size: var(--font-size-16);
    }

    .open-menu-button,
    .menu-button {
      display: none;
    }
  }

  /* Breakpoint para desktops grandes */
  @media (min-width: 1000px) {
    /* regras de estilo aqui */
  }
`
