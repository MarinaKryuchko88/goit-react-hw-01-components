import FriendItem from '../FriendItem/FriendItem'
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    
    return (
        <ul className="friend-list">
            {friends.map((friend) => (
               <FriendItem friend={friend} key={friend.id}/> ))
            }
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FriendList;
