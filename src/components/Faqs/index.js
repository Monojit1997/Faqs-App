// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {isButtonClick: false}

  getAnswer = id => {
    const {isButtonClick} = this.state
    this.setState(prevState => ({isButtonClick: !prevState.isButtonClick}))
  }

  render() {
    const {faqsList} = this.props
    const {isButtonClick} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">FAQs</h1>
          <ul>
            {faqsList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                eachItem={eachItem}
                getAnswer={this.getAnswer}
                isButtonClick={isButtonClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
