/*-- TIMER --*/
const countDownDate = new Date("2023-06-23T01:00:00").getTime();
function Z() {
    var timeleft = countDownDate - new Date().getTime();
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("mins").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("secs").innerHTML = seconds < 10 ? "0" + seconds : seconds;
}
Z();
setInterval(Z, 1000);


/*-- ANIME.JS --*/
let wrapperStyle = wrapper.style;
var tl = anime.timeline();

wrapperStyle.display = 'block';
tl.add({
    targets: '.animation-box',
    translateY: {
        value: [100, 0],
        duration: 1000
    },
    opacity: [0, 1],
    delay: 1200,
    easing: 'easeOutElastic'
});
tl.add({
    targets: '.linia',
    scale: {
        value: [0, 1],
        duration: 400
    },
    delay: anime.stagger(200),
    opacity: [0, 1],
    easing: 'easeOutElastic'
});


/*-- PARTICLES --*/
function P() {
    var numberOfEls = 100;
    var duration = 1000;
    var midScreenX = window.innerWidth / 2;
    var midScreenY = window.innerHeight / 2;
    var radius = Math.sqrt(midScreenX * midScreenX + midScreenY * midScreenY);
    var fragment = document.createDocumentFragment();

    document.getElementById("particle-box").innerHTML = "";
    for (var i = 0; i < numberOfEls; i++) {
        var hue = Math.round(360 / numberOfEls * i);
        var angle = Math.random() * Math.PI * 2;
        var el = document.createElement('div');
        el.classList.add('particule');
        el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
        el.style.width = '2px';
        el.style.height = '2px';
        anime({
            targets: el,
            width: ['2px', '10px'],
            height: ['2px', '10px'],
            left: [midScreenX + 'px', Math.cos(angle) * radius + midScreenX + 'px'],
            top: [midScreenY + 'px', Math.sin(angle) * radius + midScreenY + 'px'],
            delay: (duration / numberOfEls) * i,
            duration: duration,
            easing: 'easeInExpo',
            loop: true
        });
        fragment.appendChild(el);
    }
    document.getElementById("particle-box").appendChild(fragment);
}
P();
window.onresize = () => P();