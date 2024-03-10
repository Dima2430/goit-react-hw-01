import styles from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.item}>
    <img className={avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
    <span className={isOnline ? styles.statusOnline : styles.statusOffline}>
      {isOnline ? "Online" : "Offline"}
    </span>
  </div>
);

export default FriendListItem;
