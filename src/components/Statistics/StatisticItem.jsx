import PropTypes from 'prop-types';

const StatisticItem = ({ stat }) => {
    const { label, percentage } = stat

    function randColor() {
        let dig = '0123456789ABCDEF',
        col = '#';
        for(let i=0; i < 6; i++) {
            col += dig.charAt( Math.round( Math.random() * dig.length ) );
        }
        return col;
    }

    return (
        <li className="item-statistic"  style={{backgroundColor:randColor()}}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </li>
    )
};

StatisticItem.propTypes = {
    stat: PropTypes.shape = ({
        label: PropTypes.string,
        percentage: PropTypes.number,
    })
}

export default StatisticItem