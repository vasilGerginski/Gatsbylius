import styled from "@emotion/styled"

export default styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 1.3rem;
    color: #0fbf9c;
  }

  .nav-links {
    position: relative;
    display: flex;
    align-items: center;
    list-style: none;

    .nav-link {
      padding: 0 1rem;
      text-transform: uppercase;

      a {
        color: rgb(36, 36, 40);
        transition: color 0.3s;
        &:hover,
        &.active {
          color: #0fbf9c;
        }
      }
    }
  }
`

/*
 */
