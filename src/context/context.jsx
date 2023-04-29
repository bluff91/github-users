import mockFollowers from './mockData.js/mockFollowers'
import mockRepos from './mockData.js/mockRepos'
import mockUser from './mockData.js/mockUser'
import axios from 'axios'
import { useContext, createContext, useState } from 'react'

const AppContext = createContext()

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)

  return (
    <AppContext.Provider
      value={{
        githubUser,
        repos,
        followers,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
