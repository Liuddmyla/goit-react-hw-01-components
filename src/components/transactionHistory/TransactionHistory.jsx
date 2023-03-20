import PropTypes from 'prop-types';
import { Transaction } from "components/transactionItem/TransactionItem";
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
        <table className={css['transaction-history']}>
            <thead>
                <tr>
                   <th>Type</th>
                   <th>Amount</th>
                   <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (  
                    <tr key={item.id}>
                        <Transaction item={item}
                            key={item.id} />    
                    </tr>    
                ))}                    
            </tbody>
        </table>           
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })       
    )   
}