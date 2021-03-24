import styled from 'styled-components'

const me =
  'https://avatars.githubusercontent.com/u/2577611?s=460&u=118117a943294dfb5fb7e4050061133cf7476329&v=4'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  color: var(--black);
  width: 100vw;
  height: 100vh;
  > div:hover {
    background-size: 115%;
  }
`

export const Banks = styled.div`
  height: 30rem;
  width: 30rem;
  background-image: url(${me});
  background-position: center;
  background-size: 100%;
  animation: morph 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  box-shadow: 0 0.188rem 0.375rem var(--shadow);
  transition: all 1s ease-in-out;
  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }
`
