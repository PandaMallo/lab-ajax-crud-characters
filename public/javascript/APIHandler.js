class APIHandler {
  constructor (baseUrl) {

    this.BASE_URL = baseUrl;
    this.app = axios.create({
      baseURL: 'https://minions-api.herokuapp.com/'
  })
  }

  getFullList = () => this.app.get('/characters')

  getOneRegister = id => this.app.get(`/characters/${id}`)

  createOneRegister = info => this.app.post('/characters', info)

  updateOneRegister = (id, info) => this.app.put(`/characters/${id}`, info)

  deleteOneRegister = (id) => this.app.delete(`/characters/${id}`)
}
