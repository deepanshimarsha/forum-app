import PostCard from "./PostCard";
import { usePostContext } from "../context/PostContext";
export default function PostSection() {
  const { data } = usePostContext();
  console.log(data);
  return (
    <div className="main">
      <h5>Posts</h5>
      {data.posts.map((postItem) => {
        return <PostCard {...postItem} />;
      })}
    </div>
  );
}
