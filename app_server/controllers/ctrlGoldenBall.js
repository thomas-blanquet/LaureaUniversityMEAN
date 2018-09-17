const winners = function(req, res) {
  res.render('goldenball', {
    winners : [
      {year:'1990', team:'Salvatore Schillaci (Italy)'},
      {year:'1994', team:'Romarío (Brazil)'},
      {year:'1998', team:'Ronaldo (Brazil)'},
      {year:'2002', team:'Oliver Khan (Germany)'},
      {year:'2006', team:'Zinedine Zidane (France)'},
      {year:'2010', team:'Diego Forlàn (Uruguay)'},
      {year:'2014', team:'Lionel Messi (Argentiba)'},
      {year:'2018', team:'Luka Modric (Croatia)'},
    ]
  });
}

module.exports = {
  winners
};
