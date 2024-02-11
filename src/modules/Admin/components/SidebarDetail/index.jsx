import { useEffect } from 'react'
import './style.scss'
import { useSelector } from "react-redux"

export const SidebarDetail = ({ activeMenu, activeMenuTitle }) => {
  const { isSidebarDetailOpen } = useSelector((state) => {
    return state.dashboard
  })

  return (
    <>
      {isSidebarDetailOpen ? (
        <div className="sidebar-detail"> <p className='title'>{activeMenu}</p>
          <div className="content-title">
            <p>{activeMenuTitle ?? activeMenu}</p>
          </div>
        </div>
      ) : (
        <div className='sidebar-detail-empty'>

        </div>
      )}
    </>
  )
}
