const vibes = [
    "You are great!",
    "You are alright I suppose",
    "You are a piece of garbage",
    "You are a foolish person!"
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);