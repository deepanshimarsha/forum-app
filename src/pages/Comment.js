import SideNav from "../component/SideNav";
import TopNav from "../component/TopNav";
import { useParams } from "react-router-dom";
import { usePostContext } from "../context/PostContext";
export default function Comment() {
  const { data } = usePostContext();
  const { postId } = useParams();
  console.log("postid", postId.type);
  console.log("data", data);
  console.log(String("36635-787-65778") === String(postId));
  const commentPost = data.posts.find(
    (post) => String(post.postId) === String(postId)
  );
  console.log("comment", commentPost);
  return (
    <div>
      <TopNav />
      <SideNav notShow={true} commentPost={commentPost} />
    </div>
  );
}
