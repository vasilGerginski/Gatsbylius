import styled from "@emotion/styled"

export default styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 1.3rem;
    color: rgb(36, 36, 40);
  }

  .nav-links {
    display: flex;
    align-items: center;
    list-style: none;

    .nav-link {
      padding: 0 1rem;
      text-transform: uppercase;

      a {
        color: rgb(36, 36, 40);
        transition: color 0.3s;
        &:hover {
          color: #0fbf9c;
        }
      }
    }
  }
`
