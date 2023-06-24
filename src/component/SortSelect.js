import { forumData } from "../db/posts";
import { usePostContext } from "../context/PostContext";
export default function SortSelect() {
  const { setData } = usePostContext();
  const handleInput = (e) => {
    let sortedPosts = forumData.posts.slice();
    if (e.target.value === "time") {
      sortedPosts = [...sortedPosts].sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      return setData((prevData) => ({ ...prevData, posts: sortedPosts }));
    }
    if (e.target.value === "votes") {
      sortedPosts = [...sortedPosts].sort(
        (a, b) => b.upvotes - b.downvotes - (a.upvotes - b.downvotes)
      );
      return setData((prevData) => ({ ...prevData, posts: sortedPosts }));
    }
  };
  return (
    <div>
      <select class="custom-select" onChange={(e) => handleInput(e)}>
        <option selected disabled>
          choose
        </option>
        <option value="time">Latest Posts</option>
        <option value="votes">Most Upvoted Posts</option>
      </select>
    </div>
  );
}
