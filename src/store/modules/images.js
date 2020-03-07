import api from '../../api/imgur'
import router from '../../router'
const state = {
    images: Array()
}

const getters = {
    allImages: state => state.images
}

const mutations = {
    setImages(state, images) {
        state.images = images
    }
}

const actions = {
    async fetchImages({rootState, commit}) {
        const {token} = rootState.auth
       
        try {
            const res = await api.fetchImages(token)
            commit('setImages', res.data.data)
        } catch (error) {
            console.log(error)
        }
    },

    async uploadImages({rootState}, images) {
        const {token} = rootState.auth
        try {
            await api.upload(token, images)
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }
}

export default {
    state, getters, mutations, actions
}