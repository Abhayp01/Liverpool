import { Outlet } from 'react-router-dom'
import Header from './components/head/Header'

function Root() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Root