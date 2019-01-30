import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './action'
import mutations from './mutations'
import {Storage} from "../tool"

Vue.use(Vuex)

const userInfo = JSON.parse(Storage.get('userInfo')) || {}
const loginState = Storage.get('loginState') || false

const state = {
    loginState: loginState,
    userInfo: userInfo,
    loginModal: {
        type: 'login',
        status: false
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store
