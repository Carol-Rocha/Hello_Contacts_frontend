import { keyframes } from 'styled-components'

export const NavToggleAnimation = keyframes`
     0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    80% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    } 
  from {
    margin-top: -50%;

  }

  to{
    margin-top: 25px !important;
  }

`

export const closeToggleAnimation = keyframes`
     0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    } 
  from {
    margin-top: 20%
  }
  
  to{
    margin-top: -80%;

    }
`
