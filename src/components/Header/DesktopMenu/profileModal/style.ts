import styled from 'styled-components'

export const StyledProfileModal = styled.div`
  position: absolute;
  top: 50px;
  right: 0;

  width: 180px;
  padding: 1rem;

  background-color: var(--color-white);

  border-radius: 5px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);

  .position-relative {
    position: relative;
    padding: 1rem;

    #icon-close {
      position: absolute;
      top: 0;
      right: 0;

      height: 16px;
      width: 16px;

      cursor: pointer;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      padding-top: 1.5rem;

      li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        cursor: pointer;

        img {
          height: 20px;
          width: 20px;
        }
      }
    }
  }
`
