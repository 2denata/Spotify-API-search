/*
Script API for html files
*/

// Function to get Bearer token
function getSpotifyToken(callback) {
  $.ajax({
    url: 'https://accounts.spotify.com/api/token',
    type: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      grant_type: 'client_credentials',
      client_id: 'CLIENT_ID', // Replace with your actual client_id
      client_secret: 'CLIENT_SECRET' // Replace with your actual client_secret
    },
    success: function (response) {
      callback(response.access_token);
    },
    error: function (xhr, status, error) {
      console.error('Error getting token:', error);
    }
  });
}

// Function to search Spotify
function searchSpotify(query, token) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    type: 'GET',
    data: {
      q: query,
      type: 'track'
    },
    headers: {
      'Authorization': 'Bearer ' + token
    },
    success: function (response) {
      $('#results').empty(); // Clear previous results
      const tracks = response.tracks.items;
      tracks.forEach(function (track) {
        $('#results').append(`

                    <div class="col-md-4 d-flex align-items-stretch">
                        <div class="card my-2">
                        <img class="card-img-top" src="${track.album.images[0].url}">
                        <div class="card-body">
                            <h5 class="card-title">${track.name}</h5>
                            <p class="card-text">${track.album.name}</p>
                            <audio controls src="${track.preview_url}">Preview not available</audio>
                        </div>
                        </div>
                    </div>
                `);
      });
    },
    error: function (xhr, status, error) {
      console.error('Error searching Spotify:', error);
    }
  });
}

// Event handler for the search button
$('#searchButton').click(function () {
  const query = $('#searchQuery').val();
  if (query) {
    getSpotifyToken(function (token) {
      searchSpotify(query, token);
    });
  } else {
    alert('Please enter a search query.');
  }
});
