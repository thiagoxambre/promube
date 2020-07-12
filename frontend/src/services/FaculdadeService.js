import http from './Http'

export default {
  findAll () {
    return http.get('/api/faculdade').then(({ data }) => data )
  }
}
