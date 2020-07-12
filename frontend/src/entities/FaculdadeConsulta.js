export default class FaculdadeConsulta {
  constructor (data = {}) {
    this.id = data.id || null
    this.razaoSocial = data.razaoSocial || ''
    this.nomeFantasia = data.nomeFantasia || ''
    this.cnpj = data.cnpj || null
    this.logradouro = data.logradouro || ''
    this.numero = data.numero || ''
    this.complemento = data.complemento || ''
    this.bairro = data.bairro || ''
    this.cep = data.cep || ''
    this.cidade = data.cidade || ''
    this.uf = data.uf || ''
    this.createdAt = data.createdAt || ''
    this.updatedAt = data.updatedAt || ''
  }
}
