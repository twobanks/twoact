import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  color: var(--black);
  height: auto;
`

export const ListActivities = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 5px 0 5px 20px;
    strong {
      font-weight: 700;
      margin-bottom: 20px;
    }
  }
`
