import PropTypes from 'prop-types';


export const Transaction = ({item:{type, amount, currency}}) => {
     return (
      <>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </>
    )
}

Transaction.propTypes = {
  item: PropTypes.exact({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
  })     
}