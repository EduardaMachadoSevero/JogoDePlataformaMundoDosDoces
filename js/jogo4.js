var jogoState4 = { create:criar4,update:atualizar4}

var personagem,inim;
var plataformas;
var cursors;
var estrela4;
var pontos;
var pontos2;
var texto;
var texto2;
var personagem2;
var A;
var W;
var D;
var textofim;
var  textofim2;
var textoEmpate;
var bolos1;

var timerr;
var cont = 0;

function precarregar4()
{



}

function criar4()
{
pontos ;
pontos2 ;
//define o cursor (setas)
cursors = game.input.keyboard.createCursorKeys();
//definindo o "sistema de física do jogo"
game.physics.startSystem(Phaser.Physics.ARCADE);
game.add.sprite(0,0, "ceu4");
game.add.sprite(320,8, "estrela2"); 
game.add.sprite(460,8, "estrela3");   
plataformas = game.add.group();

//habilitar o corpo para minhas plataformas
plataformas.enableBody = true;
var chao = plataformas.create(0, game.world.height-43, "plataforma");
chao.scale.setTo(2,2);
chao.body.immovable = true; 
var bloco = plataformas.create(100, 420, "plataforma4");
bloco.body.immovable = true;
bloco = plataformas.create(20,170,"plataforma4a");
bloco.body.immovable = true;
bloco = plataformas.create(400,350,"plataforma4b");
bloco.body.immovable = true;
bloco = plataformas.create(700,180,"plataforma4c");
bloco.body.immovable = true;
bloco = plataformas.create(350,120,"plataforma4d");
bloco.body.immovable = true;


    // Adicionamos o player ao nosso jogo
    personagem = game.add.sprite(32, game.world.height - 150, 'personagem');
    personagem2 = game.add.sprite(62, game.world.height - 150, 'personagem2');
    inim = game.add.sprite(600, game.world.height - 150, 'migo5');
   
    // Habilitamos a física ao jogador'
    game.physics.arcade.enable(personagem);
    game.physics.arcade.enable(personagem2);
    game.physics.arcade.enable(inim);
    inim.body.collideWorldBounds = true;  
   
    // Propriedades físicas do jogador'
    personagem.body.bounce.y = 0.2; //salto
    personagem.body.gravity.y = 300; //gravidade
    personagem.body.collideWorldBounds = true; //habilita a colisão
    // duas animações do jogador, para esquerda e direita'

    personagem.animations.add('left', [0, 1, 2, 3], 10, true);
    personagem.animations.add('right', [5, 6, 7, 8], 10, true);
    
    personagem2.body.bounce.y = 0.2; //salto
    personagem2.body.gravity.y = 300; //gravidade
    personagem2.body.collideWorldBounds = true; //habilita a colisão
    // duas animações do jogador, para esquerda e direita'
    personagem2.animations.add('left', [0, 1, 2, 3], 10, true);
    personagem2.animations.add('right', [5, 6, 7, 8], 10, true);
    
    carregarEstrelas4();
    
    
    texto = game.add.text(352,15,+pontos,
    {font:"25px Arial", fill:"#C43563"});
    
    //carregarEstrelas();
    texto2 = game.add.text(440,15,+pontos2,
    {font:"25px Arial", fill:"#C43563"});

   
   
    A = game.input.keyboard.addKey(Phaser.Keyboard.A);
    W = game.input.keyboard.addKey(Phaser.Keyboard.W);
    D = game.input.keyboard.addKey(Phaser.Keyboard.D);

    timerr = game.time.create(false);
    timerr.loop(1500, moveini4, this);
    timerr.start();
   
    bolos1 = game.add.group();
    bolos1.enableBody = true;

}

function atualizar4()
{
//colisões
    var cpp = game.physics.arcade.collide(personagem,plataformas);
    var cpp = game.physics.arcade.collide(personagem2,plataformas);
    game.physics.arcade.collide(estrela4,plataformas);
    game.physics.arcade.collide(bolos1,plataformas);
    game.physics.arcade.collide(personagem,estrela4, pegarEstrela4);
    game.physics.arcade.collide(personagem2,estrela4, pegarEstrela4);
    game.physics.arcade.collide(personagem,bolos1, pegarDiamantes4);
    game.physics.arcade.collide(personagem2,bolos1, pegarDiamantes4);
    
    game.physics.arcade.collide(inim,plataformas);
    game.physics.arcade.collide(personagem,inim, pegarInimigo4);
    game.physics.arcade.collide(personagem2,inim, pegarInimigo4);
   
  
    
//////////


    if(cursors.left.isDown){
        personagem.body.velocity.x = -150;
        personagem.animations.play("left");
    }
    else if(cursors.right.isDown){
        personagem.body.velocity.x = +150;
        personagem.animations.play("right");
    }
   
    //apertar pra cima - tocando no chão - colidindo plataforma
    else if(cursors.up.isDown && cpp && personagem.body.touching.down){
        personagem.body.velocity.y = -350;
       
    }
    
    console.log(cpp);
    if(A.isDown){
        personagem2.body.velocity.x = -150;
        personagem2.animations.play("left");

    }
    else if(D.isDown){
        personagem2.body.velocity.x = +150;
        personagem2.animations.play("right");
    }
   
    //apertar pra cima - tocando no chão - colidindo plataforma
    else if(W.isDown && cpp && personagem2.body.touching.down){
        personagem2.body.velocity.y = -350;   
    } 
}

function carregarEstrelas4(){

    estrela4 = game.add.group();
    estrela4.enableBody = true;

    for(var i = 0; i<1; i++){
    var estrela4a = estrela4.create(i*75, Math.random()*300*-1, 'estrela4a');
    estrela4a.body.gravity.y = y=200;
    estrela4a.body.bounce.y = 0.1;
        
    }

}


  
function carregarDiamantes4(){

    for(var i = 0; i<1; i++){
    var t = bolos1.create(Math.random()*800, Math.random()*600*-1, 't');
    t.body.gravity.y = y=100;
    t.body.bounce.y = 0.1;

    }

}

      

 function pegarInimigo4(personagem,w){
    w.kill();
    if(personagem.key=="personagem"){

    pontos-=2;
    if(pontos<0){
        pontos=0;
    }
    
    texto.text = pontos;   
}else{ 
        pontos2-=2;
        if(pontos2<0){
            pontos2=0;
        }
        
        texto2.text = pontos2;   
    
}
 }
 
 function pegarEstrela4(personagem,estr){
 estr.kill();
 if(personagem.key=="personagem"){

 pontos++;
 texto.text = pontos;
}else{
 pontos2++;
texto2.text = pontos2;
}
//escrever no text a pontuação atualizada
 if(estrelas.countLiving()==0){
        
    carregarDiamantes4();
}
    }

 function pegarDiamantes4(personagem,di){

    di.kill();
    if(personagem.key=="personagem"){

    pontos+=3;
    texto.text = pontos;
    }else{
        pontos2+=3;
        texto2.text = pontos2;
    }

if(bolos.countLiving()==0){
   

    if(pontos>pontos2){
        textofim = game.add.text(98,250,"0",
        {font:"35px Ravie", fill:"#ECE80C"});
        textofim.text = "O Personagem 1 venceu!";
        quemganhou="O JOGADOR 1 VENCEU!";

        }else if(pontos<pontos2){
        textofim2 = game.add.text(98,250,"0",
        {font:"35px Ravie", fill:"#ECE80C"});
        textofim2.text = "O Personagem 2 venceu!";
        quemganhou="O JOGADOR 2 VENCEU!";

        }else if(pontos==pontos2){
        textoEmpate = game.add.text(98,250,"0",
        {font:"35px Ravie", fill:"#ECE80C"});
        textoEmpate.text = "Empatou!!";
        quemganhou="EMPATOU!";
        }
  game.state.start("fim")
  
 
    }
}
function moveini4() {
    cont++;
    if(cont%2 == 0){
        inim.body.velocity.y = -300;
    }else{
        inim.body.velocity.y = 300;
    }
}
