export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li class="item" key={id}>
      <span class="status">{isOnline.toString()}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}
