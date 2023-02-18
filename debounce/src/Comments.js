export const Comments = ({comments = []}) => {
  return (
    <div>
      {comments.map(comment =>
        <div key={comment.id}>
          <div>
            <h2>
              {comment.name}
            </h2>
          </div>
          <div>
            {comment.body}
          </div>
        </div>
      )}
    </div>
  )
}