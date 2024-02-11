import './style.scss'
import { formatToIdr, formatUpdatedAt } from "../../../../utils/";
import UsersSVG from '../../assets/icons/users.svg?react'
import ClockSVG from '../../assets/icons/clock.svg?react'
import TrashSVG from '../../assets/icons/trash.svg?react'
import PencilSVG from '../../assets/icons/pencil.svg?react'
import { Link } from 'react-router-dom';

export const Car = ({ car, onDeleteClick }) => {
  const renderCategoryTag = (category) => {
    switch (category) {
      case "small":
        return "2 - 4 People";
      case "medium":
        return "4 - 6 People";
      default:
        return "6 - 8 People";
    }
  }

  return (
    <div className="car-card">
      <div className="thumbnail">
        <img
          src={car.image || 'https://placeholder.com/280x200 '}
          onError={(e) => {
            e.target.src = 'https://placeholder.com/280x200 ';
          }}
        />
      </div>
      <div className="description ">
        <p>{car.name}</p>
        <p className="price normal">{formatToIdr(car.price)} / Hari</p>
        <p className="normal"><span><UsersSVG /></span>{renderCategoryTag(car.category)}</p>
        <p className="normal"><span><ClockSVG /></span>{formatUpdatedAt(car.updatedAt)}</p>
      </div>
      <div className="buttons">
        <Link onClick={() => onDeleteClick(car.id)} className="delete"><span><TrashSVG /></span>Delete</Link>
        <Link to={"/admin/cars/edit/" + car.id} className="edit"><span><PencilSVG /> </span>Edit</Link>
      </div>
    </div>
  )

}
