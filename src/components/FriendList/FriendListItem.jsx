export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span class="status">{isOnline.toString()}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </>
  );
}
