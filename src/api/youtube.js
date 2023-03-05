import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
    //params: {
    //    part: 'snippet',
    //    maxResults: 5,
    //    key : 'API KEY'
    
})


/*curl \
'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&q=virtual%20honeypots&key=[YOUR_API_KEY]' \
--header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
--header 'Accept: application/json' \
--compressed
*/

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=boys&key=AIzaSyCKN1xJqOAamqQjo4WKrav0M2f4vy_8dHw


//https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=boys&maxResults=1&key=AIzaSyCKN1xJqOAamqQjo4WKrav0M2f4vy_8dHw          


