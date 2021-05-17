var faseState3 = { create:criar}

	function criar()
	
	{
		
		game.add.image(0,0,'jogue3','assets/fase3.png' )	
		var texto = game.add.text(670, 540, "Avançar", {font :'20px Arial Black', fill: 'white'});
		texto.inputEnabled = true;
		texto.events.onInputDown.add(fase3, this);
		
	}
	function fase3()
	{
		game.state.start('jogo3');
	}