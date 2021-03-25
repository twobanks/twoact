import styled from 'styled-components'

export const ActivitiesWrapper = styled.section`
  display: flex;
  width: 50vw;
`
export const ListActivities = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 10px 0;
    width: 100%;
  }
`

export const Title = styled.strong`
  margin-bottom: 1.25rem;
  font-size: 1.5rem;
`
export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    display: flex;
    padding-right: 1.25rem;
    font-size: 1.25rem;
  }
`
