import { useState, useEffect } from 'react'
import * as S from './styled'

const STRAVA_ID = process.env.NEXT_PUBLIC_CLIENT_ID
const STRAVA_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
const STRAVA_REFRESH_TOKEN = process.env.NEXT_PUBLIC_REFRESH_TOKEN

const Activities = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [activity, setActivities] = useState({})
  const listActivities = Object.keys(activity).map((i) => activity[i])

  const callRefresh = `https://www.strava.com/oauth/token?client_id=${STRAVA_ID}&client_secret=${STRAVA_SECRET}&refresh_token=${STRAVA_REFRESH_TOKEN}&grant_type=refresh_token`
  const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`

  useEffect(() => {
    fetch(callRefresh, {
      method: 'POST'
    })
      .then((res) => res.json())
      .then((result) => getActivities(result.access_token))
  }, [callRefresh])

  function getActivities(access) {
    fetch(callActivities + access)
      .then((res) => res.json())
      .then(
        (data) => setActivities(data),
        setIsLoading((prev) => !prev)
      )
      .catch((e) => e)
  }

  return (
    <S.ActivitiesWrapper>
      {isLoading ? (
        <>LOADING</>
      ) : (
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
                <S.Title>{name}</S.Title>
                <S.Details>
                  <span>{type}</span>
                  <span>Distância: {distance}</span>
                  <span>Tempo:{moving_time}</span>
                  <span>Ganho de elev.{total_elevation_gain}</span>
                  <span>Kudos: {kudos_count}</span>
                  <span>Esforço relativo: {suffer_score}</span>
                  <span>Ritmo: {average_speed}</span>
                </S.Details>
              </li>
            )
          })}
        </S.ListActivities>
      )}
    </S.ActivitiesWrapper>
  )
}

export default Activities
