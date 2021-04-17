// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  clickLeftArrow = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  clickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsData} = this.props
    if (activeReviewIndex < reviewsData.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-cont">
        <img src={imgUrl} alt={`${username}-avatar`} />
        <p className="username">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsData} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewData = reviewsData[activeReviewIndex]

    return (
      <div className="bg-main">
        <h1 className="heading">Reviews</h1>
        <dv className="carous-cont">
          <button
            type="button"
            testid="leftArrow"
            className="arrow"
            onClick={this.clickLeftArrow}
          >
            <img
              alt="left-arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          {this.renderReview(currentReviewData)}
          <button
            type="button"
            testid="rightArrow"
            className="arrow"
            onClick={this.clickRightArrow}
          >
            <img
              alt="right-arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </dv>
      </div>
    )
  }
}

export default ReviewsCarousel
