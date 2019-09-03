// Your code goes here



const holdHeader = document.querySelector('header').addEventListener('keydown', onKeyDown);

function onKeyDown(e) {e.target.style.backgroundColor = 'lemon'};

const navEvent = document.querySelectorAll('.nav-link');


navEvent.forEach((el) => el.addEventListener('mouseover', e =>
    e.target.style.color = 'pink'
));

navEvent.forEach((el) => el.addEventListener('mouseout', e =>
    e.target.style.color = 'initial'
));

navEvent.forEach((el) => el.addEventListener('click', e => {
    e.preventDefault();

}));

const buttonEffect = document.querySelectorAll('.btn');

buttonEffect.forEach((el) => el.addEventListener('dblclick', e => 
    e.target.style.display = 'none'
));
buttonEffect.forEach((el) => el.addEventListener('resize', e => 
    e.target.style.display = 'initial'
));

const onSelect = document.querySelectorAll('.destination');

onSelect.forEach((el) => el.addEventListener('select', function(e){
       return alert('SELECTED !');
}) )