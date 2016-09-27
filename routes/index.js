var data = require('../src/projectData.json');

exports.view = function(req, res) {
	console.log(data);
	res.render('index', data);
};
