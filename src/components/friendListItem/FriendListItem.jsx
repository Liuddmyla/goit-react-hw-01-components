import PropTypes from 'prop-types';

export const Friend = ({friend:{avatar, name, isOnline}}) => {
    return (
      <>
            <span className="status">{isOnline }</span>
         <img className="avatar" src={avatar} alt="User avatar" width="48" />
         <p className="name">{name}</p>
      </>
    )
}

Friend.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
}