var faseState2 = { create:criar}

	function criar()
	
	{
		
		game.add.image(0,0,'jogue','assets/fase2.png' )	
		var texto = game.add.text(670, 540, "Avançar", {font :'20px Arial Black', fill: 'white'});
		texto.inputEnabled = true;
		texto.events.onInputDown.add(fase2, this);
		
	}
	function fase2()
	{
		game.state.start('jogo2');
	}
