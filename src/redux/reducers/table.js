const initialState = {
    items: [],
    isLoaded: false,
    error: false,
    date: [],
    price: []
};

const tableReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_TABLE_REQUEST':
            return {
                ...state,
                isLoaded: true,
                error: false,
            }
        case 'FETCH_TABLE_FAILURE':
            return {
                ...state,
                isLoaded: false,
                error: true,
            }
        case 'FETCH_TABLE_SUCCESS':
            const items = action.payload;
            const price = items.map(({price}) => +price);
            const date = items.map(({date}) => date);
            for (let i = 0; i < date.length; i++) {
                if (date.indexOf(date[i]) !== i) {
                    date.splice(i, 1);
                    const prevPrice = price[i - 1];
                    const currentPrice = price[i];
                    price.splice(i, 1);
                    price[i - 1] = (prevPrice + currentPrice) / 2;
                    i--;
                } 
            };
            return {
                ...state,
                isLoaded: false,
                items,
                date,
                price,
            }
        default: 
            return state;
    }
};

export default tableReducer;