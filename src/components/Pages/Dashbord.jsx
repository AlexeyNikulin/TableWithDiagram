import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTableData, setTableSuccess} from '../../redux/actions/table';
import {showModal} from '../../functions/modal';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../Error-Indicator/Error-Indicator';

const Dashbord = () => {
    const dispatch = useDispatch();
    const {items, isLoaded, error} = useSelector((state) => state);

    useEffect(() => {
        const localItems =  localStorage.getItem('TABLE');
        const identical = localItems === JSON.stringify(items) && items.length !== 0;
        if (!identical) {
            dispatch(fetchTableData());
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('TABLE', JSON.stringify(items));
    }, [items]);

    const ChangeCellToTable = (e) => {
        if (e.target && e.target.tagName === 'TD') {
            let input = document.createElement('input');
            input.value = e.target.textContent;
            input.classList.add('add-new-cell');
            e.target.textContent = '';
            e.target.append(input);
            input.focus();
            
            let td = e.target;
            input.addEventListener('blur', () => {
                td.textContent = input.value;
                input.remove();
            });

            document.addEventListener('keydown', function(event) {
                if (event.code === 'Enter') {
                    td.textContent = input.value;
                    input.remove();
                }
            });
        }
    };

    return (
        <div className="dashbord">
            <div className="dashbord-header">
                <h1>Таблица ценных бумаг</h1>
                <button 
                    onClick={showModal}
                    className="waves-effect waves-light btn modal-trigger">
                        Добавить инструмент
                    </button>
            </div>
            { isLoaded && 
                    <Spinner/>
            }
            { error &&
                <ErrorIndicator/>
            }
            {
                !isLoaded && !error && 
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Инструмент (ценная бумага)</th>
                                <th>Стоимость</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td onClick={ChangeCellToTable}>{item.date}</td>
                                        <td onClick={ChangeCellToTable}>{item.tool}</td>
                                        <td onClick={ChangeCellToTable}>{item.price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
            }
        </div>
    )
};

export default Dashbord;
