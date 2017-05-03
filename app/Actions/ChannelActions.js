export const ADD_CHANNEL = 'ADD_CHANNEL';
export const EDIT_CHANNEL = 'EDIT_CHANNEL';
export const DELETE_CHANNEL = 'DELETE_CHANNEL';
let ids =0;

export function addChannel(text) {
    return { type: ADD_CHANNEL, id: ids++ , text:text }
}



