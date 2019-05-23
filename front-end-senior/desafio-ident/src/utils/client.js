import {
  getToken
} from 'utils'

const CHANNEL_ID = 'UCwJjQBn1dMEWjMUWNcp6Fxw';
const KEY = 'AIzaSyBQb4RN1kCa7dNQjNZz7xxLe922epTYVRM';

class IDentClient {
  onError = error => {}

  async getVideosImplantodontia() {
      return fetch(`https://www.googleapis.com/youtube/v3/playlistItems?channelId=${CHANNEL_ID}&order=date&part=snippet&maxResults=50&playlistId=PL8wbv5bp7V4cMrCznuzWau3tNkbNAwRnP`, {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        })
        .then(response => {
          if (response.status !== 200) {
            throw new Error('Erro ao carregar os videos');
          }
          return response.json();
        })
        .catch(error => {
          throw new Error('Erro ao carregar os videos');
        })
  }
}

export default IDentClient
