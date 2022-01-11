import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(function (e) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(e));

}, 1000));

if (localStorage.getItem(LOCALSTORAGE_KEY) !== null) {
  player
    .setCurrentTime(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).seconds)
}
