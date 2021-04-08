import defaultImage from '../../image/no-picture.png'
import PropTypes from 'prop-types';

const Profile = ({ avatar, name, tag, location, stats }) => {
    const {followers, views, likes} = stats

    return (
        <div className="profile">
            <div className="description">
                <img
                src={avatar}
                alt="Аватар пользователя"
                className="avatar-profile"
                width='140'
                />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li className="item-profile">
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
                </li>
                <li className="item-profile">
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
                </li>
                <li className="item-profile">
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    )
};

Profile.defaultProps = {
    avatar: defaultImage
}

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}


export default Profile