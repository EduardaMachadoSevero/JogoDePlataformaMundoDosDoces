var insState = { create:criar}

	function criar()
	
	{
		
		game.add.image(0,0,'p','assets/ins.png' )
		var texto = game.add.text(670, 540, "Avançar", {font :'20px Arial Black', fill: 'white'});
		texto.inputEnabled = true;
		texto.events.onInputDown.add(fase1, this);
		
	}
	function fase1()
	{
		game.state.start('fase1');
	}
		
		
	
		
	
	