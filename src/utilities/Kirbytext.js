var marked = require('markdown-it')()



module.exports = {
	convert: function (text) {
		return marked.render(text)
	}
}