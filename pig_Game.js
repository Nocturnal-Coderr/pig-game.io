const winscore = prompt('Please Enter The Winning Score');

var activeplayer, currentscore, globalscore, gameplaying= true;
activeplayer= 0;
currentscore= 0;
globalscore= [0,0];


document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn--roll').addEventListener('click', function(){

if (gameplaying) {
    let dice = Math.floor(Math.random()*6+1);
console.log(dice);

document.querySelector('.dice').style.display = 'block';
document.querySelector('.dice').src = 'dice-'+ dice +'.png'

if (dice!== 1) {
    currentscore+= dice;
    document.querySelector('#current--'+activeplayer).textContent = currentscore;

} else {
   nextPlayer();
}
}
})

document.querySelector('.btn--hold').addEventListener('click', function(){

    if (gameplaying) {
        globalscore[activeplayer]+= currentscore;
    document.getElementById('score--'+activeplayer).textContent = globalscore[activeplayer];

    if (globalscore[activeplayer] >= winscore) {
        document.querySelector('#name--'+activeplayer).textContent= ' WINNER !'
        gameplaying = false;
        document.querySelector('.dice').style.display= 'none';
    }else{
        nextPlayer();
    }
    }
    
})

function nextPlayer() {
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    currentscore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', function(){

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    activeplayer = 0;
    currentscore= 0;
    globalscore= [0,0];
    document.querySelector('#name--0').textContent= 'Player-1';
    document.querySelector('#name--1').textContent= 'Player-2';
    document.querySelector('.dice').style.display= 'none';

    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    
    
})