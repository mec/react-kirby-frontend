var axios = require('axios')

module.exports = {
  getPage: function(page) {
    return axios.get('http://10.0.81.104:8080/api/' + page )
  		.then( function(page) {
        console.log(page.data)
  			return page.data
  		})
  },
}
