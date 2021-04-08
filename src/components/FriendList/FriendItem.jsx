import defaultImage from '../../image/no-picture.png'
import PropTypes from 'prop-types';

const FriendItem = ({ friend }) => {
    const { isOnline, avatar, name } = friend

    return (
        <li className="item-friend" >
            {isOnline ?
                <span className="status" style={{ backgroundColor: 'green' }}></span> :
                <span className="status" style={{ backgroundColor: 'red' }}></span>}
            <img className="avatar-friend" src={avatar} alt={name} width="48" />
            <p className="name">{name }</p>
        </li>
    )
}

FriendItem.defaultProps = {
     avatar: defaultImage
}

FriendItem.propTypes = {
    friend: PropTypes.shape = ({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
    })
}

export default FriendItem