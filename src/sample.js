data = [
    {
        "kind": "youtube#searchListResponse",
        "etag": "Nr1nj4Fr7f7OAJXwM6r0O-S9bJI",
        "nextPageToken": "CAEQAA",
        "regionCode": "IN",
        "pageInfo": {
          "totalResults": 1000000,
          "resultsPerPage": 1},
        "items": [
          {
            "kind": "youtube#searchResult",
            "etag": "VeFW0vb64_6NzNXE2gzHNU5zXGM",
            "id": {
              "kind": "youtube#video",
              "videoId": "gSZdOypTDag"},
            "snippet": {
              "publishedAt": "2023-03-04T17:33:10Z",
              "channelId": "UCC3SZUWJH5xKhHUEn7TLWLw",
              "title": "“I don't like crop tops on boys” #shorts | Nicky and Pierre #NiPi",
              "description": "shorts #NiPi.",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/gSZdOypTDag/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/gSZdOypTDag/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/gSZdOypTDag/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "Nicky and Pierre",
              "liveBroadcastContent": "none",
              "publishTime": "2023-03-04T17:33:10Z"
            }
          }
        ]
      }      
]
console.log(data[0].items[0].id.videoId)
//youtube video id 