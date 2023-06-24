import { NavLink } from "react-router-dom";
import { usePostContext } from "../context/PostContext";
import TagPills from "./TagPills";
export default function PostCard(postItem) {
  const {
    upvotes,
    downvotes,
    tags,
    post,
    postDescription,

    username,

    isBookmarked,
    picUrl,
    postId,
  } = postItem;
  const votes = upvotes - downvotes;
  const { data, setData } = usePostContext();

  const handleUpvote = () => {
    let upvotedData = data.posts.slice();
    upvotedData = upvotedData.map((post) => {
      if (post.postId === postId) {
        return { ...post, upvotes: post.upvotes + 1 };
      } else {
        return post;
      }
    });
    setData((prevData) => ({ ...prevData, posts: upvotedData }));
  };

  const handleDownvote = () => {
    let downvotesData = data.posts.slice();
    downvotesData = downvotesData.map((post) => {
      if (post.postId === postId) {
        return { ...post, downvotes: post.downvotes + 1 };
      } else {
        return post;
      }
    });
    setData((prevData) => ({ ...prevData, posts: downvotesData }));
  };

  const handleBookmark = () => {
    let allPost = data.posts.slice();
    allPost = allPost.map((post) => {
      if (post.postId === postId) {
        return { ...post, isBookmarked: !post.isBookmarked };
      } else {
        return post;
      }
    });
    setData((prevData) => ({ ...prevData, posts: allPost }));
  };

  return (
    <div class="post-card">
      <div className="votes">
        <div className="upward" onClick={handleUpvote}>
          <i
            class="fa fa-chevron-up"
            style={{ color: votes >= 0 ? "green" : "black" }}
          ></i>
        </div>

        <span>{votes}</span>
        <div className="downward" onClick={handleDownvote}>
          <i
            class="fa fa-chevron-down"
            style={{ color: votes < 0 ? "red" : "black" }}
          ></i>
        </div>
      </div>
      <div className="content">
        <div className="user">
          <div className="user-img">
            <img src={picUrl} alt="user" height="25px" width="25px" />
          </div>
          <div className="user-name">
            <span>
              posted by @<span>{username}</span>
            </span>
          </div>
        </div>
        <div className="post-title">
          <span>{post}</span>
        </div>
        <div className="tag-section">
          {tags.map((tag) => {
            return <TagPills tag={tag} />;
          })}
        </div>

        <div className="post-desc">
          <span>{postDescription}</span>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="post-footer">
          <div className="comment">
            <NavLink to={`/comments/${postId}`}>
              <i class="fa fa-comments-o"></i>
            </NavLink>
          </div>
          <div className="share">
            <i class="fa fa-share-alt"></i>
          </div>
          <div className="bookmark" onClick={handleBookmark}>
            <i
              class="fa fa-bookmark-o"
              style={{ color: isBookmarked ? "blue" : "black" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
