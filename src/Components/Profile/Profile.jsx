import PropTypes from 'prop-types';
 import './Profile.css'
const Profile = ({ name, tag, location, avatar, stats }) => {
     return (
        <div className="profile">
  <div>
    <img
      src={avatar}
      alt="User avatar"
    />
                <p>{ name}</p>
                <p>@{ tag}</p>
                <p>{ location}</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
                    <span>{ stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;