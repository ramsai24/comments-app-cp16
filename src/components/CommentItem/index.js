// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentItem, deleteItem, isActiveLike} = props
  const {id, name, comment, time, isActive} = commentItem

  const deleteId = () => {
    deleteItem(id)
  }

  const onLikeStatus = () => {
    isActiveLike(id)
  }

  const likeIsActive = isActive ? (
    <div className="like-container">
      <img
        className="like-img"
        id="like"
        src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
        alt="like"
      />
      <button className="liked" type="button" onClick={onLikeStatus}>
        <label htmlFor="unLike">like</label>
      </button>
    </div>
  ) : (
    <div className="like-container">
      <img
        className="like-img"
        id="like"
        src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
        alt="like"
      />
      <button className="like" type="button" onClick={onLikeStatus}>
        <label htmlFor="unLike">Like</label>
      </button>
    </div>
  )

  return (
    <li className="list-item">
      <div className="comment-box">
        <p className="initialName">{name[0].toUpperCase()}</p>
        <div className="each-comment-container">
          <div className="time-container">
            <h1 className="name">{name}</h1>
            <p>{time}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        {likeIsActive}
        <button data-testid="delete" type="button" onClick={deleteId}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
