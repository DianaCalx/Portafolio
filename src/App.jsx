import About from './components/About'
import Projects from './components/Projects'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
  @media screen and (min-width:768px){
    flex-direction: row;
  }
`

function App() {

  return (
    <Container>
      <About />
      <Projects />
    </Container>
  )
}

export default App
