import axios from "axios"

let url = import.meta.env.VITE_BE_URL
export let adduserapi = async (userdata) => {
    try {
        let response = await axios.post(`${url}/register`, userdata)
        return response.data
    } catch (err) {
        return err.response.data
    }
}
export let loginuserapi = async (userdata) => {
    try {
        let response = await axios.post(`${url}/login`, userdata)
        return response.data
    } catch (err) {
        throw new Error(err.response.data.msg)
    }
}
export let emailverifyapi = async (useremail) => {
    try {
        let response = await axios.post(`${url}/verify-email`, useremail)
        return response.data
    } catch (err) {
        throw new Error(err.response.data.msg)
    }
}
export let resetpasswordapi = async (token, resetpassword) => {
    try {
        let response = await axios.post(`${url}/reset-password?token=${token}`, resetpassword)
        return response.data
    } catch (err) {
        console.log(err)
        throw new Error(err.response.data.msg)
    }
}