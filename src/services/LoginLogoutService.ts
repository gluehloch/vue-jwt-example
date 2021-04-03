import Http from './HttpService'

class PingService {

  ping(): void {
    Http.get('/registrationservice/ping')
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
      .then(function() {
        console.log('finished')
      })
  }

}

export default new PingService()
