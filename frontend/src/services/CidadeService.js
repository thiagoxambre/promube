import http from './Http'

export default {
  findAll (nome = '') {
    return http.get(`/api/cidade?nomeCidade=${nome}`).then(({ data }) => data)
  }

}
