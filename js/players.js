
function setPlayerStyle(player){
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.padding = '10px';
    player.style.margin = '10px';
}

const players = document.getElementsByClassName('player');
for(const player of players){
    setPlayerStyle(player);
    
};

function addPlayer(){
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player - 1</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id odit hic totam quos accusamus rerum, tenetur distinctio magni. Iusto et iure quibusdam illo molestias enim officia. Perspiciatis itaque nam placeat.</p>
    `;
    setPlayerStyle(player);
    playersContainer.appendChild(player);
    
};

document.getElementById('players').addEventListener('click', function(event){
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'yellow';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})