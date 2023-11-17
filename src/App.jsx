import { useLocation } from 'react-router-dom'
import Routess from './components/Routess'
import CopyRight from './components/global/CopyRight'
import NavBar from './components/navbar/NavBar'
import SideBar from './components/sideBar/SideBar'

function App() {
  const currentPath = useLocation().pathname
  const cc = currentPath.includes('dashboard')
  return (
    <div className={'mx-auto overflow-hidden min-h-screen ' + (!cc && 'max-w-5xl')}>
      {cc ?  <SideBar /> : 
      <NavBar />}
      <div className={!cc ? 'w-full' : 'sm:ml-64 '}>
        <Routess />
      </div>
      {!cc && <CopyRight />}
    </div>
  )
}

export default App
