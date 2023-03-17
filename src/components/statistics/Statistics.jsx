import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            {title && (<h2 className={css.title}>{title}</h2>)}
            
            <ul className={css['stat-list']}>
                {stats.map(e => (
                    <li className={css.item} key={e.id} style={{ backgroundColor:`${getRandomHexColor()}`}}>
                        <span className={css.label}>{e.label}</span>
                        <span className={css.percentage}>{e.percentage}%</span>
                    </li>
                ))}               
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,    
    stats: PropTypes.arrayOf(
        PropTypes.exact({
          id:  PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired
        })),  
}