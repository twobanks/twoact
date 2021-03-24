import React, { useState, useEffect } from 'react'
import * as S from './styled'

const Main = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [activity, setActivities] = useState({})

  //Strava Credentials
  const STRAVA_ID = process.env.NEXT_PUBLIC_CLIENT_ID
  const STRAVA_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
  const STRAVA_REFRESH_TOKEN = process.env.NEXT_PUBLIC_REFRESH_TOKEN

  const callRefresh = `https://www.strava.com/oauth/token?client_id=${STRAVA_ID}&client_secret=${STRAVA_SECRET}&refresh_token=${STRAVA_REFRESH_TOKEN}&grant_type=refresh_token`

  // endpoint for read-all activities. temporary token is added in getActivities()
  const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`

  // Use refresh token to get current access token
  useEffect(() => {
    fetch(callRefresh, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then((result) => getActivities(result.access_token))
  }, [callRefresh])

  // use current access token to call all activities
  function getActivities(access) {
    fetch(callActivities + access)
      .then((res) => res.json())
      .then(
        (data) => setActivities(data),
        setIsLoading((prev) => !prev)
      )
      .catch((e) => console.log(e))
  }

  function showActivities() {
    if (isLoading) return <>LOADING</>
    if (!isLoading) {
      const listActivities = Object.keys(activity).map((i) => activity[i])
      return (
        <S.ListActivities>
          {listActivities.map((item, index) => {
            const {
              name,
              distance,
              moving_time,
              type,
              total_elevation_gain,
              kudos_count,
              suffer_score,
              average_speed
            } = item
            return (
              <li key={`activity-${index}`}>
                <strong>{name}</strong>
                <span>{type}</span>
                <span>Distância: {distance}</span>
                <span>Tempo:{moving_time}</span>
                <span>Ganho de elev.{total_elevation_gain}</span>
                <span>Kudos: {kudos_count}</span>
                <span>Esforço relativo: {suffer_score}</span>
                <span>Ritmo: {average_speed}</span>
              </li>
            )
          })}
        </S.ListActivities>
      )
    }
  }
  return <S.Wrapper>{showActivities()}</S.Wrapper>
}
export default Main
