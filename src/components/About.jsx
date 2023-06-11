import styled from 'styled-components'
import { ReactComponent as EmailLogo } from '../assets/gmail.svg'
import { ReactComponent as GithubLogo } from '../assets/github.svg'
import { ReactComponent as LinkedinLogo } from '../assets/linkedin.svg'

const AboutDetail = styled.div`
  width: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:5rem;
  @media screen and (min-width:768px){
    width: 35%;
    height: 100vh;
  }
`

const AboutName = styled.p`
 font-size: 3rem;
 font-weight: bold;
 border-bottom: 1px solid white;
 width: fit-content;
 margin: 0;
 color: #644edf;

 span{
  font-size: 4rem;
  display: block;
  color: white;
 }
`

const AboutDescription = styled.div`
  font-size: 2rem;
`

const AboutImagesContainer = styled.div`
  display: flex;
  gap: 2rem;

  a{
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    background-color: #644edf;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s;

    :hover{
      background: transparent;
    }
  }
`

const CustomSVG = ({ svg, alt }) => {
  const ImageContainer = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  `
  const SVG = styled(svg)`
    fill: #fff;
    transition: all .5s;

    :hover{
      fill: #644edf;     
      transform: scale(1.3);
    }
  `
  return (
    <ImageContainer>
      <SVG alt={alt} />
    </ImageContainer>
  )
}

const About = () => {
  return (
    <AboutDetail>
      <AboutName>Hello I'm <span>Diana Calderón</span></AboutName>
      <AboutDescription>
        I'm a Computer Science Engineer, I specialized in the area of computer networks but I have always been passionate about programming, which is why I currently work as a FrontEnd Programmer, and I have had the opportunity to develop many projects with differents technologies that I will show you below, I hope you like them as much as I do.
      </AboutDescription>
      <AboutImagesContainer>
        <a href="mailto:calderon.calx@gmail.com" target="_blank"><CustomSVG svg={EmailLogo} alt="Email Logo" /></a>
        <a href='https://github.com/DianaCalx' target="_blank"><CustomSVG svg={GithubLogo} alt="GitHub Logo" /></a>
        <a href='https://www.linkedin.com/in/diana-calder%C3%B3n-4917b3171/' target="_blank"><CustomSVG svg={LinkedinLogo} alt="GitHub Logo" /></a>
      </AboutImagesContainer>
    </AboutDetail>
  )
}

export default About