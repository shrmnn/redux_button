import {ERROR, MESSAGE} from '../Actions/constants';

const initialState = {
    active: {toggled_state: 'false'}
}

const buttonReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE:
            return {...state, active: action.payload.toggled_state}
        case ERROR:
            return {...state, active: 'error'}
        default:
            return state;
    }
};

export default buttonReducer;