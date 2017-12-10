import 'whatwg-fetch';
import {
    LOG_IN
} from '../../app/actionTypes';
import { checkStatus, parseJSON } from '../../app/utils';

export function setLogin(payload) {
    return {
        type: LOG_IN,
        payload: payload
    };
}

export function performLogin(login) {
    return (dispatch) => {
        dispatch(setLogin(login));
    };
    // // const url = `${ipAddress}/api/login`;
    //
    // return (dispatch) => {
    //     return fetch(url)
    //         .then(checkStatus)
    //         .then(parseJSON)
    //         .then((res) => {
    //             dispatch(setLogin(res));
    //         })
    //         .catch((err) => {
    //
    //         })
    // };
}