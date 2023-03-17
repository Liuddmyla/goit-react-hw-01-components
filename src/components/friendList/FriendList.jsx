import { Friend } from "components/friendListItem/FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li key={friend.id}>
                    <Friend friend={friend} />
                </li>
            ))}
        </ul>
    )
}