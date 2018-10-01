db.dropDatabase();

db.surfspot.save(
  [
    {name:'Peniche', country:'Portugal', region:'Europe'},
    {name:'San Sebastian', country:'Spain', region:'Europe'},
    {name:'Mundaka', country:'Spain', region:'Europe'},
    {name:'The Bubble', country:'Canary Islands, Spain', region:'Europe'},
    {name:'Biarritz', country:'France', region:'Europe'},
    {name:'Hossegor', country:'France', region:'Europe'},
    {name:'Lacanau', country:'France', region:'Europe'},
    {name:'Sennen Cove', country:'Cornwall, England', region:'Europe'},
    {name:'Watergate Bay', country:'Cornwall, England', region:'Europe'},
    {name:'Bundoran beach', country:'Ireland', region:'Europe'},
    {name:'Haleiwa', country:'Hiwaii', region:'USA'},
    {name:'Santa Cruz', country:'California', region:'USA'},
    {name:"Pa'ia", country:'Hawaii', region:'USA'},
    {name:'Ocean City', country:'New Jersey', region:'USA'},
    {name:'New Smyrna Beach', country:'Florida', region:'USA'},
    {name:'San Clemente', country:'California', region:'USA'},
    {name:'Encinitas', country:'California', region:'USA'},
    {name:'Ventura', country:'California', region:'USA'},
    {name:'Kill Devil Hill', country:'North Carolina', region:'USA'},
    {name:'Huntington', country:'California', region:'USA'}
  ]
);
db.sport.save(
  [
    {name:'Stand Up Paddle'},
    {name:'Shortboard Surf'},
    {name:'Longboard Surf'},
    {name:'Bodyboard'},
    {name:'WaveSki'},
  ]
);
