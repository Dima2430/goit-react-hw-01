import PropTypes from 'prop-types';
import './Friends.css'; 


const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className="item">
    <span className={isOnline ? "status online" : "status offline"}>{isOnline ? "Online" : "Offline"}</span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </div>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};




const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
        <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};


export default FriendList;