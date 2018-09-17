const spots = function(req, res) {
  res.render('spotseurope', {
    spots : [
      {name:'Peniche', country:'Portugal'},
      {name:'San Sebastian', country:'Spain'},
      {name:'Mundaka', country:'Spain'},
      {name:'The Bubble', country:'Canary Islands, Spain'},
      {name:'Biarritz', country:'France'},
      {name:'Hossegor', country:'France'},
      {name:'Lacanau', country:'France'},
      {name:'Sennen Cove', country:'Cornwall, England'},
      {name:'Watergate Bay', country:'Cornwall, England'},
      {name:'Bundoran beach', country:'Ireland'},
    ]
  });
}

module.exports = {
  spots
};
