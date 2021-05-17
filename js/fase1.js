var faseState1 = { create:criar1}

	function criar1()
	
	{
		
		game.add.image(0,0,'jogue2','assets/fase1.png' )	
		var texto = game.add.text(670, 540, "Avançar", {font :'20px Arial Black', fill: 'white'});
		texto.inputEnabled = true;
		texto.events.onInputDown.add(vaiJogar, this);
		
	}
	function vaiJogar()
	{
		game.state.start('jogo');
	}
