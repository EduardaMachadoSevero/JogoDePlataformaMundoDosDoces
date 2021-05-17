	var fimState = { create:criar}

	function criar()
	
	{
		//quemganhou
		game.add.image(0,0,'J','assets/ceu.png' )
		  game.add.text(177, 390, " "+quemganhou,{font :'15px Arial Black', fill: '#ff1a75'} );
		var texto = game.add.text(180, 330, "PONTOS JOGADOR 1: "+pontos,{font :'15px Arial Black', fill: '#ff1a75'} );
				var texto = game.add.text(180, 360, "PONTOS JOGADOR 2: "+pontos2,{font :'15px Arial Black', fill: '#ff1a75'} );
		var texto = game.add.text(180, 250, "JOGAR NOVAMENTE", {font :'40px Jokerman', fill: '#ff1a75'});
		texto.inputEnabled = true;
		texto.events.onInputDown.add(inicio, this);
		
	}
	function inicio()
	{
		game.state.start('inicio');
	}
