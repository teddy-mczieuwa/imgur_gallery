import qs from 'qs'
import axios from 'axios'

const CLIENT_ID = '1d82323b7ea1967'
const ROOT_URL = ' https://api.imgur.com'
export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    },

    async fetchImages(token) {
        try {
            const res = await axios.get(`${ROOT_URL}/3/account/me/images`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return res
        } catch (error) {
            console.log(error)
        }
    },

    upload(token, images) {
        const promises = Array.from(images).map(image => {
            const formData = new FormData()
            formData.append('image', image)

            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })
        
        return Promise.all(promises)
    }
}