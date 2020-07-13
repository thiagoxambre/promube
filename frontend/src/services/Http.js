import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/'
})

http.interceptors.request.use((requestConfig) => new Promise((resolve) => {
  if (localStorage.token) {
    const config = requestConfig
    config.headers.common.secret_token = JSON.parse(localStorage.token)
    resolve(config)
    return
  }
  resolve(requestConfig)
}))

export default http
