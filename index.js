function handleClick() {
    var positionleft = Math.floor(Math.random() * window.innerWidth);
    var positiontop = Math.floor(Math.random() * window.innerHeight);

    var color1 = Math.floor(Math.random() * 255);
    var color2 = Math.floor(Math.random() * 255);
    var color3 = Math.floor(Math.random() * 255);

    var newCircle = document.createElement("div");
    newCircle.classList.add("newCircle");
    document.body.appendChild(newCircle);
    newCircle.style.left = positionleft + 'px';
    newCircle.style.top = positiontop + 'px';
    newCircle.style.background = 'rgba(' + color1 + ', ' + color2 + ',' + color3 + ', 0.7)';
}
document.body.addEventListener('click', handleClick);