import styled from 'styled-components'

export const Head = styled.section`
    background-color: ${props => props.theme.backgroundColor};
    height: 100vh;
    background-image: ${props => props.theme.backgroundImage};
    background-size: cover;
    transition: padding 0.2s;
    @media (max-width: 800px) {
          display: flex;
          justify-content: center;
          padding: 8rem 1rem;
      }
      @media (min-width: 800px) {
          padding: 15rem 10%;
      }
      @media (min-width: 1200px) {
          padding: 15rem 20%;
      }
`