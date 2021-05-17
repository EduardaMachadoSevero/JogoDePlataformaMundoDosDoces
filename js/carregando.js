
// prepara tudo do loading!


var game = new Phaser.Game(900,600,Phaser.AUTO);
game.state.add('load', loadingState);
    //loadingState é o nome que eu do quando crio ele
game.state.add('inicio', inicioState);
game.state.add('jogo', jogoState);
game.state.add('jogo2', jogoState2);
game.state.add('jogo3', jogoState3);
game.state.add('jogo4', jogoState4);
game.state.add('fim', fimState);
game.state.add('fase2', faseState2);
game.state.add('fase1', faseState1);
game.state.add('fase3', faseState3);
game.state.add('fase4', faseState4);
game.state.add('instru', insState);


//define estado inicial

game.state.start('load');




	

 

