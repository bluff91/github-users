import mockFollowers from './mockData.js/mockFollowers'
import mockRepos from './mockData.js/mockRepos'
import mockUser from './mockData.js/mockUser'
import axios from 'axios'
import { useContext, createContext, useState, useEffect } from 'react'

const rootUrl = 'https://api.github.com'
const AppContext = createContext()

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)
  const [requests, setRequests] = useState(0)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })

  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then((response) => {
        let {
          data: {
            rate: { remaining },
          },
        } = response

        setRequests(remaining)
        if (remaining === 0) {
          toggleError(true, 'Sorry, you have exeeded your hourly rate limit')
        }
      })
      .catch((err) => {
        toggleError({ show: true, msg: err.message })
        console.log(err.message)
      })
  }
  useEffect(checkRequests, [])

  const toggleError = (show = false, msg = '') => {
    setError({ show, msg })
  }

  const serchGithubUser = async (user) => {
    setLoading(true)
    try {
      const response1 = axios.get(`${rootUrl}/users/${user}`)
      const response2 = axios.get(
        `${rootUrl}/users/${user}/followers?per_page=100`
      )
      const response3 = axios.get(`${rootUrl}/users/${user}/repos?per_page=100`)
      await Promise.allSettled([response1, response2, response3])
        .then((data) => {
          const [user, followers, repos] = data
          if (user.status === 'fulfilled') {
            setGithubUser(user.value.data)
          }

          if (followers.status === 'fulfilled') {
            setFollowers(followers.value.data)
          }
          if (repos.status === 'fulfilled') {
            setRepos(repos.value.data)
          }
        })
        .catch((err) => console.log(err))

      checkRequests()
      setLoading(false)
      toggleError()
    } catch (error) {
      setLoading(false)
      setError({ show: true, msg: error.message })
    }
  }

  return (
    <AppContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        serchGithubUser,
        requests,
        error,
        toggleError,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
