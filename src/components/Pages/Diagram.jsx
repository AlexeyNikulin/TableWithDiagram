import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchTableData} from '../../redux/actions/table';
import Chart from 'chart.js';

const Diagram = () => {
    const dispatch = useDispatch();
    const {price, date} = useSelector((state) => state);

    useEffect(() => {
        if (!price.length || !date.length) {
            dispatch(fetchTableData());
        }
        if (document.getElementById('myChart')) {
            let ctx = document.getElementById('myChart').getContext('2d');
            let chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: date,
                    datasets: [{
                        label: 'График зависимости стоимости инструментов по датам',
                        backgroundColor: 'rgba(255, 99, 132, 0)',
                        borderColor: '#4cc0c0',
                        data: price
                    }]
                },
            });
        }
    }, [price, date]);

    return (
        <div className="diagram">
            <canvas id="myChart"></canvas>
        </div>
    )
}

export default Diagram;
