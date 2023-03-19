import PropTypes from 'prop-types';
import { Friend } from "components/friendListItem/FriendListItem";
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={css['friend-list']}>
            {friends.map(friend => ( 
                <li key={friend.id} className={css.item}>
                    <Friend friend={friend} /> 
                </li>    
            ))}
        </ul>
    )
}

Friend.propTypes = {
    friend: PropTypes.exact({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
    })   
}