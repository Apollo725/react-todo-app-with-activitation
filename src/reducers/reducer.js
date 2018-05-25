import {
    ADD_ACTIVITY,
    DELETE_ACTIVITY,
    SELECT_ACTIVITY
} from '../constants/ActionTypes'

const initialState = {
    activities: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ACTIVITY:
            return {...state, activities: [ ...state.activities, { name: action.payload, like: false } ] };
        case DELETE_ACTIVITY:
            return {...state, activities: [ ...state.activities.slice(0, action.payload), ...state.activities.slice(action.payload + 1) ]};
        case SELECT_ACTIVITY:
            const selectedItem = state.activities[action.payload];
            const newItem = { name: selectedItem.name, like: !selectedItem.like };
            console.log('selected item: ' + selectedItem.like);
            console.log('new item: ' + newItem.like);
            return {...state,
                 activities: [...state.activities.slice(0, action.payload),
                            newItem,
                            ...state.activities.slice(action.payload + 1)]};
        default:
            return state;
    }
}