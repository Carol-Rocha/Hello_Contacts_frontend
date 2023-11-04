import styled from 'styled-components'

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  img {
    width: 50px;
    height: 50px;

    animation: spin 1s linear infinite;
  }
`
