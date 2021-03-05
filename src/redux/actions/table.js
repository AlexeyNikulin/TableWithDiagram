import {getDataForTable, postDataForTable} from '../../service/table';

export const setTableLoaded = () => ({
    type: 'FETCH_TABLE_REQUEST'
})

export const setTableSuccess = (items) => ({
    type: 'FETCH_TABLE_SUCCESS',
    payload: items
});

export const setTableFailure = () => ({
    type: 'FETCH_TABLE_FAILURE'
});

export const fetchTableData = () => (dispatch) => {
    dispatch(setTableLoaded());
    getDataForTable('/table')
        .then((table) => {
            dispatch(setTableSuccess(table));
        })
        .catch(() => {
            dispatch(setTableFailure());
        });
};
