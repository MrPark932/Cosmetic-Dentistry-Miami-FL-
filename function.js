function getYouTubeThumbnail(videoId) {
    gapi.client.init({
        'apiKey': 'YOUR_API_KEY'
    }).then(function() {
        return gapi.client.request({
            'path': 'https://www.googleapis.com/youtube/v3/videos',
            'params': {
                'part': 'snippet',
                'id': videoId
            }
        });
    }).then(function(response) {
        var thumbnailUrl = response.result.items[0].snippet.thumbnails.default.url;
        console.log('Thumbnail URL:', thumbnailUrl);
        // Use the thumbnail URL as needed
    }, function(error) {
        console.error('Error:', error.result.error.message);
    });
}

// Load the API client library
function handleClientLoad() {
    gapi.load('client', initClient);
}

function initClient() {
    gapi.client.setApiKey('YOUR_API_KEY');
    gapi.client.load('youtube', 'v3', function() {
        // API client loaded and ready
    });
}
// Replace 'VIDEO_ID' with the actual YouTube video ID
getYouTubeThumbnail('VIDEO_ID');
function getYouTubeEmbedUrl(videoId) {
    return "https://youtube.googleapis.com/embed/" + videoId;
  }
  
  // Usage example
  var youtubeVideoId = "VIDEO_ID";
  var embedUrl = getYouTubeEmbedUrl(youtubeVideoId);
  console.log(embedUrl);
  