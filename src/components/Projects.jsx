import styled from 'styled-components'
import MernProject from '../assets/UpTaskMern.jpg'
import DogsGame from '../assets/DogsGame.jpg'
import StarWars from '../assets/StarWars.jpg'
import Marvel from '../assets/Marvel.jpg'

const Container = styled.div`
  flex: 1;
  padding: 2.5rem;
  h2{
    text-align: center;
  }
  @media screen and (min-width:768px){
    overflow-y: auto;
    max-height: 100vh;
  }
`

const Image = styled.img`
  width: 100%;
  margin: 1rem 0;
  transition: all 0.5s;

  :hover{
    box-shadow: rgba(121, 64, 254, 0.9) 0px 3px 10px;
  }
`

const Description = styled.div`
  p{
    font-size: 1.3rem;
    margin: 0.5rem 0;
  }
`

const Repos = styled.div`
  display: flex;
  gap: 2%;
  a{
    text-decoration: none;
    display: block;
    color: #9386dc;
    font-size: 1.3rem;
    font-weight: bold;
  }
`

const TechContainer = styled.div`
  display: flex;
  gap: 2%;
  justify-content: center;
  p{
    background-color: rgba(134, 59, 233, 0.8);
    height: 3rem;
    padding: 1rem;
    font-size: 1.4rem;
    width: fit-content;
    border-radius: 9.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(236, 223, 255, 0.8);
    font-weight: bold;
  }
`

const Projects = () => {
  return (
    <Container>
      <h2>My Projects</h2>

      <div>
        <div>
          <h3>UpTask MERN Project </h3>
          <Description>
            <p>You can login using:</p>
            <p>Mail: <span>test2@test.com</span></p>
            <p>Password: <span>testtwo</span></p>
          </Description>
          <Repos>
            <a href='https://github.com/DianaCalx/UpTask_MERN_frontend' target="_blank">Link Repo FrontEnd</a>
            <a href='https://github.com/DianaCalx/UpTask_MERN_backend' target="_blank">Link Repo Backend</a>
          </Repos>
          <a href='https://startling-kelpie-2d1fb9.netlify.app/' target="_blank">
            <Image src={MernProject} alt='UpTaskMern' />
          </a>
          <TechContainer>
            <p>Node.js</p>
            <p>Express</p>
            <p>Socket.io</p>
            <p>React</p>
            <p>Tailwind</p>
            <p>Axios</p>
          </TechContainer>
        </div>

        <div>
          <h3>Dogs Game Project</h3>
          <Repos>
            <a href='https://github.com/DianaCalx/frontend-dogs-game' target="_blank">Link Repo FrontEnd</a>
            <a href='https://github.com/DianaCalx/backend-dogs-game' target="_blank">Link Repo Backend</a>
          </Repos>
          <a href='https://dogs-game.netlify.app/' target="_blank">
            <Image src={DogsGame} alt='Dogs Game' />
          </a>
          <TechContainer>
            <p>React</p>
            <p>Context</p>
            <p>Php</p>
          </TechContainer>
        </div>
      </div>

      <div>
        <h3>Star Wars Project</h3>
        <Repos>
          <a href='https://github.com/DianaCalx/star-wars-challenge' target="_blank">Link Repo FrontEnd</a>
        </Repos>
        <a href='https://super-pavlova-4919a6.netlify.app/' target="_blank">
          <Image src={StarWars} alt='Star Wars' />
        </a>
        <TechContainer>
          <p>React</p>
          <p>GraphQL</p>
          <p>TypeScript</p>
        </TechContainer>
      </div>


      <div>
        <h3>Marvel Project</h3>
        <Repos>
          <a href='https://github.com/DianaCalx/Marvel' target="_blank">Link Repo FrontEnd</a>
        </Repos>
        <a href='https://6485f80ece3df7340388fe9a--silver-fenglisu-caa710.netlify.app/' target="_blank">
          <Image src={Marvel} alt='Marvel' />
        </a>
        <TechContainer>
          <p>React</p>
          <p>Redux</p>
          <p>Axios</p>
          <p>Sass</p>
        </TechContainer>
      </div>
    </Container>
  )
}

export default Projects