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