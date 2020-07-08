import http from './Http'
import router from '../router'

export default {
  login (login) {
    console.log(login)
    http.post('/login', login)
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('token', JSON.stringify(response.data.token))
        router.push('/')
      })
  }
}
