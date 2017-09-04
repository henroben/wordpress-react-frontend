import * as types from './../actions/types';

const INITIAL_STATE = {
    site: {}
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.SITE_SETTINGS:
            return {
                ...state,
                site: action.payload
            }
        default:
            return state;
    }
}