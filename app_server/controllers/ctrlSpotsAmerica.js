const spots = function(req, res) {
  res.render('spotsamerica', {
    spots : [
      {name:'Haleiwa', country:'Hiwaii'},
      {name:'Santa Cruz', country:'California'},
      {name:"Pa'ia", country:'Hawaii'},
      {name:'Ocean City', country:'New Jersey'},
      {name:'New Smyrna Beach', country:'Florida'},
      {name:'San Clemente', country:'California'},
      {name:'Encinitas', country:'California'},
      {name:'Ventura', country:'California'},
      {name:'Kill Devil Hill', country:'North Carolina'},
      {name:'Huntington', country:'California'},
    ]
  });
}

module.exports = {
  spots
};
