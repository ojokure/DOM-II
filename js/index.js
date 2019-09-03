// Your code goes here

const navEvent = document.querySelectorAll('.nav-link');


navEvent.forEach((el) => el.addEventListener('mouseover', function (e) {
    e.target.style.color = 'pink'
}));

navEvent.forEach((el) => el.addEventListener('mouseout', function (e) {
    e.target.style.color = 'initial'
}));

navEvent.forEach((el) => el.addEventListener('click', function (e) {
    e.preventDefault()

}));

const buttonEffect = document.querySelectorAll('.btn');

buttonEffect.forEach((el) => el.addEventListener('dblclick', function (e) {
    e.target.style.display = 'none'
}
));
buttonEffect.forEach((el) => el.addEventListener('resize', function (e) {
    e.target.style.display = 'initial'
}));
