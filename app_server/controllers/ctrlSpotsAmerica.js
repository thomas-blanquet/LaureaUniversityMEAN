const request = require('request');
const apiURL = require('./apiURLs.js')

const spots = function(req, res) {
  const path = '/api/surfspot';
  const requestOptions = {
    url: apiURL.server + path,
    method: 'GET',
    json : {},
    qs : {}
  };

  request(
    requestOptions,
    function (err, response, body) {
      if (err) {
        res.render('error', {message: err.message});
      } else if (response.statusCode !== 200) {
        res.render('error', {message: 'Error accessing API: ' + response.statusMessage + ' (' + response.statusCode + ')'});
      } else if (!(body instanceof Array)) {
        res.render('error', {message: 'Unexpected response data'});
      } else if (!body.lenght) {
        res.render('error', {message: 'No documents in collection'});
      } else {
        var spotsList = [];
        body.forEach(function (element) {
          if (element.region === 'USA') {
            spotsList.push(element);
          }
        })
        res.render('spotsamerica', {spots : spotsList});
      }
    }
  );
}

module.exports = {
  spots
};
