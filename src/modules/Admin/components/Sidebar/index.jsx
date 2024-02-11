import { Link } from "react-router-dom"
import HomeIcon from "@/modules/Admin/assets/icons/home.png"
import CarIcon from "@/modules/Admin/assets/icons/cars.png"
import SmallLogo from "@/modules/Admin/assets/images/small-brand.svg?react"
import './style.scss'

export default function Sidebar({ activeMenu }) {
  const menus = [
    { icon: HomeIcon, name: "Dashboard", link: "/admin" },
    { icon: CarIcon, name: "Mobil", link: "/admin/cars" },
  ]
  return (
    <div className="main-sidebar">
      <aside className="sidebar-wrapper">
        <div className="sidebar-brand">
          <SmallLogo />
        </div>
        <ul className="sidebar-menu">
          {menus.map((menu, index) => {
            return (
              <li className={`sidebar-item ${activeMenu === menu.name && "active"}`} key={index}>
                <Link to={menu.link}>
                  <img src={menu.icon} alt="home" />
                  <p>{menu.name}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </div>
  )
}
