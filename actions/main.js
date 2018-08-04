export const MY_ACTION = 'MY_ACTION';
export const SET_TARGET_PACE = 'SET_TARGET_PACE';

export function myAction() {
	return { type: MY_ACTION }
}

// used to  test if reducer is working
export function setTargetPace(value) {
    return {
        type: SET_TARGET_PACE,
        payload: value,
    }
}
