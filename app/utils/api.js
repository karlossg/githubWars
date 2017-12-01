const axios = require('axios');

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const params = "?client_id=" + id + "&client_secret=" + secret;

function getProfile(username) {
  return axios.get('https://api.github.com/users/' + username + params)
    .then(function(user) {
      return user.data;
    });
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + params)
}


module.exports = {
  battle: function (players) {
    
  },
  fetchPopularRepos: function (language) {
    const encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      });
  }
};
