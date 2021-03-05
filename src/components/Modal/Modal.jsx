import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {hideModal} from '../../functions/modal';
import {postDataForTable} from '../../service/table';
import {fetchTableData} from '../../redux/actions/table';

import './Modal.css';

const Modal = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        tool: null,
        price: null,
    });

    const onChangeForm = (e) => {
        setForm({
        ...form, 
            [e.target.name]: e.target.value // google
        })
    };

    const onSubmitForm = (e) => {
        if (e.target.tagName === 'FORM') {
            e.preventDefault();
            const message = {
                loading: 'Загрузка...',
                faillure: 'Что-то пошло не так...'
            };
            
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            e.target.append(statusMessage);

            let date = new Date();
            let strDate = `${date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`}.${date.getMonth() >= 10 ? date.getMonth() : `0${date.getMonth()}`}.${date.getFullYear()}`;

            postDataForTable('/table', JSON.stringify({...form, date: strDate}))
                .then(res => {
                    setForm({date: null, tool: null, price: null});
                    dispatch(fetchTableData());
                }).catch(error => {
                    statusMessage.textContent = message.faillure;
                    setForm({date: null, tool: null, price: null});
                }).finally(() => {
                    e.target.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                });
        }
    };

    return (
        <div className="overlay fade">
            <div className="modal-add fade" id="add-item-modal">
                <div onClick={hideModal} className="modal-add__close">&times;</div>
                <div className="modal-add__subtitle">Введите данные для создания новой строки</div>
                <form onSubmit={onSubmitForm} action="#" className="feed-form feed-form_mt-25" id="add-form">
                    <input 
                        onChange={onChangeForm} 
                        required 
                        name="tool" 
                        placeholder="Инструмент (ценная бумага)" 
                        type="text"/>
                    <input 
                        onChange={onChangeForm} 
                        required 
                        name="price" 
                        placeholder="Стоимость" 
                        type="number"/>
                    <button className="waves-effect waves-light btn btn-modal">Создать стоку</button>
                </form>
            </div>
        </div>
    )
};

export default Modal;
