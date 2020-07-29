import http from './Http'

export default {
  findAllPorCidade (cidadeId, nome = '') {
    return http.get(`/api/bairro/${cidadeId}/?nomeBairro=${nome}`).then(({ data }) => data)
  }

}
