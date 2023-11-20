import api from "technical/api"

export module UserApi {
    export const getUser = () => {
        return api.get('/user')
    }
}