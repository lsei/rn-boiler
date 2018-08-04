import {
    MY_ACTION,
    SET_TARGET_PACE
} from '../actions/main';

export default function main(state = {
    targetPace: 5
}, {type, payload}) {
    switch (type) {
    	default: 
            return state;
        
        case SET_TARGET_PACE:
            return {
                ...state,
                targetPace: payload,
            }
    }
}
