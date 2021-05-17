var faseState4 = { create:criar}

	function criar()
	
	{
		
		game.add.image(0,0,'jogue4','assets/fase4.png' )	
		var texto = game.add.text(670, 540, "Avançar", {font :'20px Arial Black', fill: 'white'});
		texto.inputEnabled = true;
		texto.events.onInputDown.add(fase4, this);
		
	}
	function fase4()
	{
		game.state.start('jogo4');
	}