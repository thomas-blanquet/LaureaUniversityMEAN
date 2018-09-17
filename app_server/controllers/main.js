const index = function(req,res) {
  res.render('index', {title : "Surfing World"});
}

module.exports = {
  index
};
