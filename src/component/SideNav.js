import PostSection from "./PostSection";
import ProfileCard from "./ProfileCard";
import SortSection from "./SortSection";
import { usePostContext } from "../context/PostContext";
import PostCard from "./PostCard";
import CommentCard from "./CommentCard";
import { NavLink } from "react-router-dom";

export default function SideNav({ notShow, commentPost }) {
  const { data } = usePostContext();
  console.log("commentpost", commentPost);
  return (
    <div>
      <div class="sidebar">
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Bookmarks</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
          <ul>
            <li>
              <ProfileCard {...data} />
            </li>
          </ul>
        </div>
        <div
          className="comment-section"
          style={{
            display: notShow ? "block" : "none",
            backgroundColor: "white",
          }}
        >
          <div>
            <NavLink to="/">
              {" "}
              <i
                class="fa fa-arrow-left"
                style={{ padding: "10px", fontSize: "20px" }}
              ></i>
            </NavLink>

            <span
              style={{ paddingLeft: "20px", padding: "10px", fontSize: "20px" }}
            >
              Post
            </span>
          </div>
          {notShow && <PostCard {...commentPost} />}
          {notShow &&
            commentPost.comments.map((commentObj) => {
              return <CommentCard {...commentObj} />;
            })}
        </div>

        {!notShow && <PostSection />}

        {!notShow && <SortSection />}
      </div>
    </div>
  );
}
