import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";
const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map((friend) => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

export default FriendList;
