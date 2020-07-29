import {LOGIN, LOGOUT} from './ActionTypes'

export const login = (credentials) => (
    {
        type: LOGIN,
        data: credentials
    }
)

export const logout = () => (
    {
        type: LOGOUT,
        data: {}
    }
)