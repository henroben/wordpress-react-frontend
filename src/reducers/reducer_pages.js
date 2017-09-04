import * as types from './../actions/types';

const INITIAL_STATE = {
    all: [],
    current: {},
    images: []
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.ALL_PAGES:
            return {
                ...state,
                all: action.payload
            }
        case types.SET_PAGE_IMAGE:
            console.log('set image', action);
            let newImage = {
                page: action.index,
                imageURL: action.payload
            };
            return {
                ...state,
                images: [
                    ...state.images,
                    newImage
                ]
            }
        case types.VIEW_PAGE:
            return {
                ...state,
                current: action.payload
            }
        default:
            return state;
    }
}