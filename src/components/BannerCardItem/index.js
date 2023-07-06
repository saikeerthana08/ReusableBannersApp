// Write your code here.
import './index.css'

const CardList = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="text">{description}</p>
        <button className="show-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default CardList
