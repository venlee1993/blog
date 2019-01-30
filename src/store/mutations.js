import {Storage} from "../tool";

import {
    LOGIN, LOGOUT, SET_MODAL
} from "./mutation-types";

export default {

    ['LOGIN'](state, data) {
        state.loginState = true;
        state.userInfo = data.user;
        Storage.set('loginState', true).set('token', data.token).set('userInfo', JSON.stringify(data.user))
    },

    ['LOGOUT'](state) {
        state.loginState = false;
        state.userInfo = {};
        Storage.clear(['loginState', 'userInfo', 'token'])
    },

    ['SET_MODAL'](state, data) {
        state.loginModal = data
    }

}
