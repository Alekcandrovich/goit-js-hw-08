const e=window.Vimeo,t=window.throttle,o=new e.Player("vimeo-player");o.on("timeupdate",t((e=>{localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));const r=localStorage.getItem("videoplayer-current-time");r&&o.setCurrentTime(r);
//# sourceMappingURL=02-video.8c781c5f.js.map
