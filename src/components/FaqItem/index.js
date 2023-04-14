// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachItem, getAnswer, isButtonClick} = props
  const {id, questionText, answerText} = eachItem

  const showAnswer = () => {
    getAnswer(id)
  }

  return (
    <li className="list-container">
      <div className="question-button-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="button" onClick={showAnswer}>
          <img
            src={
              isButtonClick
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={isButtonClick ? 'minus' : 'plus'}
          />
        </button>
      </div>
      {isButtonClick && <p className="answer">{answerText}</p>}
    </li>
  )
}
export default FaqItem
