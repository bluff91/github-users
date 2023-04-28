import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>Cannot access the resource</h3>
        <NavLink className="btn">Back Home</NavLink>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`

export default Error
