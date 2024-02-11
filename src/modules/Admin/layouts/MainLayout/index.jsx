import Sidebar from "../../components/Sidebar"
import Navbar from '../../components/Navbar'
import './style.scss'
import { SidebarDetail } from "../../components/SidebarDetail"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function MainLayout({ menu, children, menuTitle }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token') === null && localStorage.getItem('accessToken') === null) {
      navigate('/admin/login')
    }
  }, [navigate])
  return (
    <div id="app">
      <Navbar />
      <Sidebar activeMenu={menu} />
      <div className="main-content">
        <SidebarDetail activeMenu={menu} activeMenuTitle={menuTitle} />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  )

}
