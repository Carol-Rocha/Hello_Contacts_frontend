import styled from 'styled-components'

export const StyledProfileComponent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-weight: lighter;
    padding-left: 1rem;
  }

  .form-info {
    border-radius: var(--border-radius-5);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
    background-color: var(--grey-0);

    width: 80%;
    max-width: 550px;
    padding: 1.5rem 2.5rem 3rem 2.5rem;
    margin: 0 auto;
    text-align: center;

    h4 {
      font-weight: lighter;
      padding: 1rem 0 2rem 0;
    }

    form {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;

      p {
        color: #ce4646;
        font-size: var(--font-size-12);
        padding: 0.2rem 0 0 0.2rem;
        text-align: start;
      }

      #submit-button {
        margin-top: 1.5rem;
        padding: 1rem 1.5rem;
        border: none;
        border-radius: var(--border-radius-8);

        background-color: var(--color-primary-1);
        color: var(--grey-0);
        font-weight: bold;
      }

      #button-submit:active {
        background-color: var(--grey-3);
        color: var(--grey-0);
        font-weight: bold;
      }
    }
  }
`
