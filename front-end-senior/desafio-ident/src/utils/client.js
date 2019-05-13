import {
  getToken
} from 'utils'

class IDentClient {
  onError = error => {}

  async getAlgo(queryString) {
    /*return fetch(`https://api.spotify.com/v1/search?q=${queryString}&type=artist`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Erro ao carregar os artistas');
        }
        return response.json();
      })
      .catch(error => {
        throw new Error('Erro ao carregar os artistas');
      })*/
  }
}

export default IDentClient
