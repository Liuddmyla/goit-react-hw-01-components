// import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './FriendListItem.module.css';

export const Friend = ({ friend: { avatar, name, isOnline} }) => {  
    return (
        <>
          <span className={clsx(css.status, isOnline && css['off-status'])}></span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
        </>
  )  
}

// Friend.propTypes = {
//     friend: PropTypes.exact({
//         name: PropTypes.string.isRequired,
//         id: PropTypes.number.isRequired,
//         isOnline: PropTypes.bool.isRequired,
//         avatar: PropTypes.string.isRequired,
//     })   
// }