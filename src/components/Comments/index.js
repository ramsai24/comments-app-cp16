import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  addCommentbtn = event => {
    event.preventDefault()
    const {name, comment} = this.state
    console.log(name, comment)
    const newCommment = {
      id: uuidv4(),
      name,
      comment,
      isActive: false,
      time: formatDistanceToNow(new Date()),
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newCommment],
      name: '',
      comment: '',
    }))
  }

  isActiveLiked = id => {
    console.log(id)
    this.setState(prev => ({
      commentsList: prev.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isActive: !each.isActive}
        }
        return each
      }),
    }))
  }

  onDeleteItem = id => {
    const {commentsList} = this.state
    console.log(id)
    const newCommentsList = commentsList.filter(each => id !== each.id)
    this.setState({commentsList: newCommentsList})
  }

  inputElData = event => {
    this.setState({name: event.target.value})
  }

  textAreaEl = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentsList} = this.state
    console.log(commentsList)

    return (
      <div className="app-container">
        <div className="bg-container">
          <form className="top-section">
            <h1>Comments</h1>
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              className="inputEl"
              placeholder="Your Name"
              type="text"
              value={name}
              onChange={this.inputElData}
            />
            <br />
            <textarea
              className="textareaEl"
              type="text"
              value={comment}
              cols="10"
              rows="7"
              onChange={this.textAreaEl}
              placeholder="Your Comment"
            >
              {' '}
            </textarea>
            <button
              className="add-comment-btn"
              type="submit"
              onClick={this.addCommentbtn}
            >
              Add Comment
            </button>
          </form>
          <img
            className="commentImg"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>

        <div className="bottom-section">
          <div>
            <span id="commentsCount">{commentsList.length}</span>
            <label htmlFor="commentsCount">Comments</label>
          </div>
          <ul className="comments-container">
            {commentsList.map(each => (
              <CommentItem
                key={each.id}
                commentItem={each}
                deleteItem={this.onDeleteItem}
                isActiveLike={this.isActiveLiked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
