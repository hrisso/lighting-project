import axios from "axios";

const getToken = () => {
  return new Promise(resolve => {
    resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })

}

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? 'https://linterna-project.herokuapp.com/api'
    : 'http://localhost:3006/api'
})

api.interceptors.request.use(async function(options) {
  options.headers['Authorization'] = await getToken()
  return options 
}, function (error) {
    console.log('Request error: ', error)
    return Promise.reject(error)
}) 
export default api; 