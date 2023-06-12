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
    <div>
      <img
        id="like"
        src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
        alt="like"
      />
      <button type="button" onClick={onLikeStatus}>
        <label htmlFor="unLike">like</label>
      </button>
    </div>
  ) : (
    <div>
      <img
        id="like"
        src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
        alt="like"
      />
      <button type="button" onClick={onLikeStatus}>
        <label htmlFor="unLike">like</label>
      </button>
    </div>
  )

  return (
    <li>
      <div>
        <p>{name[0]}</p>
        <div>
          <div>
            <h1>{name}</h1>
            <p>{time}</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div>
        {likeIsActive}
        <button data-testid="delete" type="button" onClick={deleteId}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
