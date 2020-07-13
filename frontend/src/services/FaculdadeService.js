import http from './Http'

export default {
  findAll () {
    return http.get('/api/faculdade').then(({ data }) => data)
  },

  create (faculdade) {
    return http.post('/api/faculdade', faculdade)
  },

  update (faculdade) {
    return http.put('/api/faculdade', faculdade)
  },

  delete (id) {
    return http.delete(`/api/faculdade/${id}`)
  }
}
