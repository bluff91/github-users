import { Info, User, Navbar, Repos, Search } from '../components'
import { useAppContext } from '../context/context'
import loadingImg from '../images/preloader.gif'
const Dashboard = () => {
  const { loading } = useAppContext()

  if (loading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImg} alt="loading" className="loading-img" />
      </main>
    )
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  )
}
export default Dashboard
