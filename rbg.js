$(document).ready(function() {
    var images = [
        'https://static.vecteezy.com/system/resources/previews/005/176/183/mp4/traffic-and-pedestrians-on-london-bridge-in-london-time-lapse-free-video.mp4',
        'https://static.vecteezy.com/system/resources/previews/003/340/895/mp4/3d-rendering-loop-of-neon-sci-fi-corridor-free-video.mp4',
        'https://static.vecteezy.com/system/resources/previews/003/465/296/mp4/time-lapse-driving-light-on-road-free-video.mp4',
        'https://static.vecteezy.com/system/resources/previews/003/465/293/mp4/time-lapse-driving-light-on-road-free-video.mp4',
        'https://static.vecteezy.com/system/resources/previews/002/163/052/mp4/traffic-bokeh-at-night-in-the-street-free-video.mp4',
        'https://static.vecteezy.com/system/resources/previews/005/176/649/mp4/traffic-and-pedestrians-on-london-bridge-in-london-time-lapse-free-video.mp4',
    ];

    var randomNumber = Math.floor(Math.random() * images.length);
    var bgImg = 'url(' + images[randomNumber] + ')';

    $('body').css({ 'background': bgImg, 'background-size': 'cover', });
});