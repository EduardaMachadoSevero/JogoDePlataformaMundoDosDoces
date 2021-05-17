//Vou carregar todas as informações do meu jogo!


	var loadingState = { preload: precarregar, create: criar}

        function precarregar()
        {
          
            var texto = game.add.text(350, 250, "Carregando...", {fill: 'white'});
        //jogo1      
            game.load.image("estrela", "assets/cupcake.png");
            game.load.image("bolo", "assets/bolo.png");
            game.load.image("bom", "assets/bomba.png");
            game.load.image("ceu", "assets/fundodoce2.jpg");
            game.load.image("plataforma", "assets/platform.png")
            game.load.image("plataforma2", "assets/doce2.PNG")
            game.load.image("plataforma3", "assets/doce.PNG")
            game.load.spritesheet("personagem", "assets/nene.png",32,48);
            game.load.spritesheet("personagem2", "assets/ver.png",32,48);
            game.load.image("selecionado", "assets/comecar.png");
            //jogo2
            game.load.image("plataformaf1", "assets/be.png")
            game.load.image("plataformaf2", "assets/be.png")
            game.load.image("plataformaf3", "assets/be.png")
            game.load.image("plataformaf4", "assets/be.png")
            game.load.image("estrela2", "assets/1.png");
            game.load.image("ceu2", "assets/fundo2.jpg");
            game.load.image("estrela1", "assets/anel.png");
            game.load.image("migo", "assets/ini.png");
            
            //jogo3

            game.load.image("ceu3", "assets/sorveteria.jpg");
            game.load.image("casa", "assets/casa.png");
            game.load.image("Jogar", "assets/fundobebe.png");
             game.load.image("estrela3", "assets/2.png");
             game.load.image("estrelad3", "assets/sss.png");
            game.load.image("p", "assets/ins.png");
            game.load.image("migo2", "assets/balança.png");
            game.load.image("migo3", "assets/balança.png");
            game.load.image("migo4", "assets/balança.png");
           
            //jogo4
            game.load.image("ceu4", "assets/ceu.png");
            game.load.image("plataforma4", "assets/arco.png")
            game.load.image("plataforma4a", "assets/arco.png")
            game.load.image("plataforma4b", "assets/arco.png")
            game.load.image("plataforma4c", "assets/arco.png")
            game.load.image("plataforma4d", "assets/arco.png")
            game.load.image("migo5", "assets/9.png");
           
            game.load.image("J", "assets/ceu.png");       
            game.load.image("estrela4a", "assets/c.png");
            game.load.image("t", "assets/trofeu.png");
            game.load.image("migo6", "assets/9.png");
            game.load.image("bis", "assets/homem.png");
            
        
            game.load.image("jogue", "assets/fase2.png");
            game.load.image("jogue2", "assets/fase1.png");
            game.load.image("jogue3", "assets/fase3.png");
            game.load.image("jogue4", "assets/fase4.png");
        }
        
        
	function criar()
	
	{
    game.state.start('inicio');
    
		
    }
   
    
	