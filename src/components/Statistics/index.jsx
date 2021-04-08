const Statistics = ({title, stats }) => {
    function randColor() {
        let dig = '0123456789ABCDEF',
        col = '#';
        for(let i=0; i < 6; i++) {
            col += dig.charAt( Math.round( Math.random() * dig.length ) );
        }
        return col;
    }
    return (
        <section className="statistics">
            {title ? <h2 className="title">{title}</h2> : null}

            <ul className="stat-list" >
                {stats.map((stat) => (
                    <li className="item" key={stat.id} style={{backgroundColor:randColor()}}>
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
};


export default Statistics