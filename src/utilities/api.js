var axios = require('axios')

module.exports = {
  getPage: function(pageSlug) {
    return axios.get('http://localhost:8000/api/' + pageSlug )
  		.then( function(page) {
        console.log(page.data)
  			return page.data
  		})
  },
  getChildren: function(parent) {
    return axios.get('http://localhost:8000/api/' + parent + '/children' )
  		.then( function(response) {
        console.log(response.data)
  			return response.data
  		})  	
  },
  getFiles: function(parent, child) {
    return axios.get('http://localhost:8000/api/' + child + '/files' )
  		.then( function(response) {
        console.log(response.data)
  			return response.data
  		})  	
  },  
}
