import LargeLogo from "@/modules/Admin/assets/images/large-brand.svg?react"
import HamburgerIcon from "@/modules/Admin/assets/icons/fi_menu.svg?react"
import DownIcon from "@/modules/Admin/assets/icons/down.svg?react"
import './style.scss'
import { useDispatch } from "react-redux"
import { toggleSidebarDetail } from "../../redux/features/dashboard/dashboardSlice"
import { useRef, useState } from "react"
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Navbar() {
  const [openOverlay, setOpenOverlay] = useState(false);
  const target = useRef(null)
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSidebar = () => {
    dispatch(toggleSidebarDetail())
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('accessToken');
    navigate('/admin/login')
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Unis Badri</Popover.Header>
      <Popover.Body>
        <p style={{ cursor: 'pointer' }} onClick={handleLogout}>Logout</p>
      </Popover.Body>
    </Popover>
  );
  return (
    <nav className="main-navbar">
      <div className="left-side">
        <LargeLogo />
        <HamburgerIcon className="hamburger" onClick={handleSidebar} />
      </div>

      <div className="right-side">
        <form className="form-group" action="/admin/cars">
          <input type="search" placeholder="Search" name="car" defaultValue={searchParams.get('car')} />
          <button className="button" type="submit">Search</button>
        </form>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <div className="user">
            <div className="user-thumbnail">
              <p>U</p>
            </div>
            <p style={{ fontSize: '14px' }}>Unis Badri</p>
            <DownIcon />
          </div>
        </OverlayTrigger>
      </div>
    </nav>
  )
}
