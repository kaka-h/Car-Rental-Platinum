import RightIcon from "@/modules/Admin/assets/icons/right.svg?react"
import './sytle.scss'
import { Fragment } from "react"

export const Breadcrumb = ({ currentLink, previousLink }) => {
  const renderIfArray = (array) => {
    return array.map((item, i) => (
      <Fragment key={i}>
        <p className="prev-link">{item}</p>
        <RightIcon />
      </Fragment>
    ))
  }
  return (
    <div className="breadcrumb">
      {Array.isArray(previousLink) ? renderIfArray(previousLink) : (
        <>
          <p className="prev-link">{previousLink}</p>
          <RightIcon />
        </>
      )}
      <p className="active-link">{currentLink}</p>
    </div>

  )
}
