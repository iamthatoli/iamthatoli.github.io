let player;

let $ = function (id) {
    return document.getElementById(id);
}
let $$ = function (tagname) {
    return document.getElementsByTagName(tagname);
}

function onYouTubeIframeAPIReady() {
    let videos = $$('iframe'), // the iframes elements
        players = [], // an array where we stock each videos youtube instances class
        playingID = null; // stock the current playing video
    for (let i = 0; i < videos.length; i++) // for each iframes
    {
        let currentIframeID = videos[i].id; // we get the iframe ID
        players[currentIframeID] = new YT.Player(currentIframeID); // we stock in the array the instance
        // note, the key of each array element will be the iframe ID

        videos[i].onmouseover = function (e) { // assigning a callback for this event
            let currentHoveredElement = e.target;
            if (playingID) // if a video is currently played
            {
                players[playingID].pauseVideo();
            }
            players[currentHoveredElement.id].playVideo();
            playingID = currentHoveredElement.id;
        };
    }

}
onYouTubeIframeAPIReady();