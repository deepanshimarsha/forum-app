export default function ProfileCard(data) {
  const { username, picUrl, name } = data;
  return (
    <div class="user-card">
      <div className="user-img">
        <img src={picUrl} alt="user" />
      </div>
      <div className="user-desc">
        <div class="user-name">{name}</div>
        <div class="user-description">@{username}</div>
      </div>
    </div>
  );
}
