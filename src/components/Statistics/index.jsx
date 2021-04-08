import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem'

const Statistics = ({ title, stats }) => {
    
    return (
        <section className="statistics">
            {title ? <h2 className="title">{title}</h2> : null}

            <ul className="stat-list" >
                {stats.map((stat) => (
                    <StatisticItem stat={stat} key={stat.id}/>
                ))}
            </ul>
        </section>
    )
};


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Statistics