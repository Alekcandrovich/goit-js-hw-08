const Vimeo = window.Vimeo;
const throttle = window.throttle;

const player = new Vimeo.Player('vimeo-player');

player.on('timeupdate', throttle((e) => {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}, 1000));

const saveTime = localStorage.getItem('videoplayer-current-time');
if (saveTime) {
  player.setCurrentTime(saveTime);
}
