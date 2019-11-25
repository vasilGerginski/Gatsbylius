import styled from "@emotion/styled"

export default styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 20%;
    padding: 1rem;
    margin: 1rem;
    background-color: #fff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

    a {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      align-items: center;
    }
  }
`
