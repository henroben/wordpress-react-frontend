import * as types from './../actions/types';

const INITIAL_STATE = {
    all: [],
    images: []
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.All_POSTS:
            return {
                ...state,
                all: action.payload
            }
        case types.SET_IMAGE:
            console.log('set image', action);
            let newImage = {
                post: action.index,
                imageURL: action.payload
            };
            return {
                ...state,
                images: [
                    ...state.images,
                    newImage
                ]
            }
        default:
            return state;
    }
}