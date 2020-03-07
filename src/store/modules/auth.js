import api from '../../api/imgur'
import qs from 'qs'
import router from '../../router/index'
const state = {
    token : window.localStorage.getItem('imgur_token')
}

const getters = {
    isLoggedIn: state => !!state.token
}

const mutations = {
    setToken(state,token) {
        state.token = token
    }
}

const actions = {
    login() {
        api.login()
    },
    logout({commit}) {
        commit('setToken', null)
        window.localStorage.removeItem('imgur_token')
        router.push('/')
    },
    finalizeLogin({commit}, hash) {
        const query = qs.parse(hash.replace('#',''))
        commit('setToken', query.access_token)
        window.localStorage.setItem('imgur_token', query.access_token)
        router.push('/')
    }
}

export default {
    state, getters, mutations, actions
}