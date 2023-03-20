import PropTypes from 'prop-types';
import { Friend } from "components/friendListItem/FriendListItem";
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={css['friend-list']}>
            {friends.map(friend => ( 
                <li key={friend.id} className={css.item}>
                    <Friend friend={friend}
                        key={friend.id}
                    /> 
                </li>    
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })       
    )   
}