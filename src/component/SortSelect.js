export default function SortSelect() {
  const handleInput = () => {};
  return (
    <div>
      <select class="custom-select" onChange={(e) => handleInput(e)}>
        <option selected disabled>
          choose
        </option>
        <option value="option1">Latest Posts</option>
        <option value="option2">Most Upvoted Posts</option>
      </select>
    </div>
  );
}
