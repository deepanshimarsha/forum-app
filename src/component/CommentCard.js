export default function CommentCard(commentObj) {
  const { username, picUrl, likes, comment } = commentObj;
  return (
    <div className="comment-card" style={{ padding: "20px" }}>
      <div className="user-img">
        <img src={picUrl} alt="pic" height="30px" width="30px" />
      </div>
      <div className="content" style={{ width: "100%" }}>
        <div className="user">
          <span>
            <b>user name</b>@{username}
          </span>
        </div>
        <div className="user">
          <span>
            Replying to <span>@username</span>
          </span>
        </div>
        <div className="post-desc">
          <span>{comment}</span>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="post-footer">
          <div>like</div>
          <div>comment</div>
          <div>share</div>
        </div>
      </div>
    </div>
  );
}
