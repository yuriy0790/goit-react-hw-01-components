import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li class="item">
      <span class="status">{isOnline.toString()}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
