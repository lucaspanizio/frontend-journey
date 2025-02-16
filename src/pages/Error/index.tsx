import { useEffect } from 'react'

export const ErrorPage = () => {
  useEffect(() => {
    throw new Error('Ain! deu ruim.')
  }, [])

  return <></>
}
