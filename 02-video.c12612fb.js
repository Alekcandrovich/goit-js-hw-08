!function(){var e=window.Vimeo,t=window.throttle,o=new e.Player("vimeo-player");o.on("timeupdate",t((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));var r=localStorage.getItem("videoplayer-current-time");r&&o.setCurrentTime(r)}();
//# sourceMappingURL=02-video.c12612fb.js.map
