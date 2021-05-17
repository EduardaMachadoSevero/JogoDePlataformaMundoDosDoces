	var inicioState = { create:criar}

	function criar()
	
	{
		
		game.add.image(0,0,'Jogar','assets/fundobebe.png' )
		var texto = game.add.image(340, 330,'selecionado' );
		var texto2 = game.add.text(310, 380, "INSTRUÇÕES ",{font :'20px Arial Black', fill: '#ff1a75'} );
		texto.inputEnabled = true;
		texto.events.onInputDown.add(fase1, this);
		texto2.inputEnabled = true;
		texto2.events.onInputDown.add(instrucoes, this);
		
	}
		
	
	function fase1()
	{
		game.state.start('fase1');
	}
	function instrucoes()
	{
		game.state.start('instru');
	}