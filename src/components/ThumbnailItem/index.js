/* eslint-disable react/button-has-type */
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeState} = props
  const {thumbnailUrl, thumbnailAltText, id, isActive} = imageDetails
  const thumbNill = isActive ? `` : `blurr`

  const ChangeImage = () => {
    changeState(id)
  }
  return (
    <li>
      <button className="button">
        <img
          className={`thumbNail ${thumbNill}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={ChangeImage}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
