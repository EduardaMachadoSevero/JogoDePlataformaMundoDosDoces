var jogoState3 = { create:criar3,update:atualizar3}

var personagem,inimigo2,inimigo3,inimigo4;
var plataformas;
var cursors;
var estrelasa;
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
var bolos;

var timer;
var ct = 0;
var timer2;
var ct2 = 0;
var timer3;
var ct3 = 0;

function precarregar3()
{



}

function criar3()
{
pontos ;
pontos2 ;
//define o cursor (setas)
cursors = game.input.keyboard.createCursorKeys();
//definindo o "sistema de física do jogo"
game.physics.startSystem(Phaser.Physics.ARCADE);
game.add.sprite(0,0, "ceu3");
game.add.sprite(320,8, "estrela2"); 
game.add.sprite(460,8, "estrela3");   
plataformas = game.add.group();

//habilitar o corpo para minhas plataformas
plataformas.enableBody = true;
var chao = plataformas.create(0, game.world.height-43, "plataforma");
chao.scale.setTo(2,2);
chao.body.immovable = true; 

    // Adicionamos o player ao nosso jogo
    personagem = game.add.sprite(32, game.world.height - 150, 'personagem');
    personagem2 = game.add.sprite(62, game.world.height - 150, 'personagem2');
    inimigo2 = game.add.sprite(400, game.world.height - 200, 'migo2');
    inimigo3 = game.add.sprite(190, game.world.height - 200, 'migo3');
    inimigo4 = game.add.sprite(600, game.world.height - 200, 'migo4');
    // Habilitamos a física ao jogador'
    game.physics.arcade.enable(personagem);
    game.physics.arcade.enable(personagem2);
    game.physics.arcade.enable(inimigo2);
    game.physics.arcade.enable(inimigo3);
    game.physics.arcade.enable(inimigo4);
   
    // Propriedades físicas do jogador'
    personagem.body.bounce.y = 0.2; //salto
    personagem.body.gravity.y = 300; //gravidade
    personagem.body.collideWorldBounds = true;
    inimigo2.body.collideWorldBounds = true;  
    inimigo3.body.collideWorldBounds = true;  
    inimigo4.body.collideWorldBounds = true;  
 
   
   
    //habilita a colisão
    // duas animações do jogador, para esquerda e direita'

    personagem.animations.add('left', [0, 1, 2, 3], 10, true);
    personagem.animations.add('right', [5, 6, 7, 8], 10, true);
    
    personagem2.body.bounce.y = 0.2; //salto
    personagem2.body.gravity.y = 300; //gravidade
    personagem2.body.collideWorldBounds = true; //habilita a colisão
    // duas animações do jogador, para esquerda e direita'
    personagem2.animations.add('left', [0, 1, 2, 3], 10, true);
    personagem2.animations.add('right', [5, 6, 7, 8], 10, true);
    
    carregarEstrelas3();
    
    
    texto = game.add.text(352,15,+pontos,
    {font:"25px Arial", fill:"#FFFEEF"});
    
    //carregarEstrelas();
    texto2 = game.add.text(440,15,+pontos2,
    {font:"25px Arial", fill:"#FFFEEF"});

   
   
    A = game.input.keyboard.addKey(Phaser.Keyboard.A);
    W = game.input.keyboard.addKey(Phaser.Keyboard.W);
    D = game.input.keyboard.addKey(Phaser.Keyboard.D);
   
    bolos = game.add.group();
    bolos.enableBody = true;
    timer = game.time.create(false);
    timer.loop(1500, moveini1, this);
    timer.start();
    timer2 = game.time.create(false);
    timer2.loop(1500, moveini2, this);
    timer2.start();
    timer3 = game.time.create(false);
    timer3.loop(1500, moveini3, this);
    timer3.start();

}

function atualizar3()
{
//colisões
    var cpp = game.physics.arcade.collide(personagem,plataformas);
    var cpp = game.physics.arcade.collide(personagem2,plataformas);
    game.physics.arcade.collide(estrelasa,plataformas);
    game.physics.arcade.collide(inimigo2,plataformas);
   
    game.physics.arcade.collide(inimigo3,plataformas);
    game.physics.arcade.collide(inimigo4,plataformas);
    game.physics.arcade.collide(personagem,estrelasa, pegarEstrela3);
    game.physics.arcade.collide(personagem2,estrelasa, pegarEstrela3);
   
   
   
    game.physics.arcade.collide(personagem,inimigo2, pegarInimigo3);
    game.physics.arcade.collide(personagem2,inimigo2, pegarInimigo3);
    game.physics.arcade.collide(personagem,inimigo3, pegarInimigo3);
    game.physics.arcade.collide(personagem2,inimigo3, pegarInimigo3);
    game.physics.arcade.collide(personagem,inimigo4, pegarInimigo3);
    game.physics.arcade.collide(personagem2,inimigo4, pegarInimigo3);
    
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
        personagem.body.velocity.y = -355;
       
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

function carregarEstrelas3(){

    estrelasa = game.add.group();
    estrelasa.enableBody = true;

    for(var i = 0; i<8; i++){
    var estrela1 = estrelasa.create(i*100, Math.random()*300*-1, 'estrelad3');
    estrela1.body.gravity.y = y=200;
    estrela1.body.bounce.y = 0.1;
        
    }

}


  
function carregarDiamantes3(){

    for(var i = 0; i<1; i++){
    var bolo = bolos.create(Math.random()*800, Math.random()*600*-1, 'bolo');
    bolo.body.gravity.y = y=100;
    bolo.body.bounce.y = 0.1;

    }

}
function pegarInimigo3(personagem,o){
    o.kill();
    if(personagem.key=="personagem"){

    pontos-=3;
    if(pontos<0){
        pontos=0;
    }
    
    texto.text = pontos;   
}else{ 
        pontos2-=3;
        if(pontos2<0){
            pontos2=0;
        }
        
        texto2.text = pontos2;   
    
}
 }


 function pegarEstrela3(personagem,estr){
 estr.kill();
 if(personagem.key=="personagem"){

 pontos++;
 texto.text = pontos;
}else{
 pontos2++;
texto2.text = pontos2;
}
//escrever no text a pontuação atualizada


 
if(estrelasa.countLiving()==0){
    game.state.start("fase4")

}
  
    
}
function moveini1() {
    ct++;
    if(ct%2 == 0){
        inimigo2.body.velocity.y = -300;
    }else{
        inimigo2.body.velocity.y = 300;
    }
}
function moveini2() {
    ct2++;
    if(ct2%2 == 0){
        inimigo3.body.velocity.y = -130
    }else{
        inimigo3.body.velocity.y = 180
    }
}
function moveini3() {
    ct3++;
    if(ct3%2 == 0){
        inimigo4.body.velocity.y = -180
    }else{
        inimigo4.body.velocity.y = 180
    }
}

 
 
 
 
