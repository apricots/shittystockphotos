

exports.index = function(req, res){
  res.render('index', { title: 'mine' });
};

exports.wow = function(req, res){
  res.render('wow', { title: 'wow'});
};
