exports.view = function(req, res) {
  res.render('404', { url: req.url });
};
