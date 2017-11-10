var projects = require('../src/projects.json')['projects'];

/* renders page */
exports.view = function(req, res) {
  console.log(projects);
  var bkgClass = req.params.bkgClass;
  var projectObj = getProject(bkgClass);

  res.render('project', projectObj);
}

/* get project object */
function getProject(bkgClass) {

  for (var key in projects) {
    if(projects[key].hasOwnProperty('bkgClass') && (projects[key].bkgClass === bkgClass)) {
      var projectObj = projects[key];
      return projectObj;
    }
  }

  return 0; /* change */
}