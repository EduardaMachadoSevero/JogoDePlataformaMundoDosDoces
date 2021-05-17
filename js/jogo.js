var jogoState = { create:criar,update:atualizar}

var personagem,biscoitao;
var plataformas;
var cursors;
var estrelas;
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
var bombas;
var timerr5;
var cont5 = 0;

function precarregar()
{



}

function criar()
{
pontos = 0;
pontos2 = 0;
//define o cursor (setas)
cursors = game.input.keyboard.createCursorKeys();
//definindo o "sistema de física do jogo"
game.physics.startSystem(Phaser.Physics.ARCADE);
game.add.sprite(0,0, "ceu");
game.add.sprite(320,8, "estrela2"); 
game.add.sprite(460,8, "estrela3");   
plataformas = game.add.group();

//habilitar o corpo para minhas plataformas
plataformas.enableBody = true;
var chao = plataformas.create(0, game.world.height-43, "plataforma");
chao.scale.setTo(2,2);
chao.body.immovable = true; 
var bloco = plataformas.create(440, 380, "plataforma2");
bloco.body.immovable = true;
bloco = plataformas.create(-160,300,"plataforma2");
bloco.body.immovable = true;
bloco = plataformas.create(380,200,"plataforma3");
bloco.body.immovable = true;

    // Adicionamos o player ao nosso jogo
    personagem = game.add.sprite(32, game.world.height - 150, 'personagem');
    personagem2 = game.add.sprite(62, game.world.height - 150, 'personagem2');
    biscoitao= game.add.sprite(700, game.world.height - 140, 'bis');
    // Habilitamos a física ao jogador'
    game.physics.arcade.enable(personagem);
    game.physics.arcade.enable(personagem2);
    game.physics.arcade.enable(biscoitao);
    
   
    // Propriedades físicas do jogador'
    personagem.body.bounce.y = 0.2; //salto
    personagem.body.gravity.y = 300; //gravidade
    personagem.body.collideWorldBounds = true;
    biscoitao.body.collideWorldBounds = true;  
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
    
    carregarEstrelas();
    carregarBombas();
  
    
    texto = game.add.text(352,15,"0",
    {font:"25px Arial", fill:"#FFFEEF"});
    
    //carregarEstrelas();
    texto2 = game.add.text(440,15,"0",
    {font:"25px Arial", fill:"#FFFEEF"});

   
   
    A = game.input.keyboard.addKey(Phaser.Keyboard.A);
    W = game.input.keyboard.addKey(Phaser.Keyboard.W);
    D = game.input.keyboard.addKey(Phaser.Keyboard.D);

    timerr5 = game.time.create(false);
    timerr5.loop(1500, moveiniss, this);
    timerr5.start();
   
    bolos = game.add.group();
    bolos.enableBody = true;

}

function atualizar()
{
//colisões
    var cpp = game.physics.arcade.collide(personagem,plataformas);
    var cpp = game.physics.arcade.collide(personagem2,plataformas);
    game.physics.arcade.collide(estrelas,plataformas);
    game.physics.arcade.collide(bolos,plataformas);
    game.physics.arcade.collide(personagem,estrelas, pegarEstrela);
    game.physics.arcade.collide(personagem2,estrelas, pegarEstrela);
    game.physics.arcade.collide(personagem,bolos, pegarDiamantes);
    game.physics.arcade.collide(personagem2,bolos, pegarDiamantes);
    game.physics.arcade.collide(bombas,plataformas);
    game.physics.arcade.collide(personagem,bombas, pegarbombas);
    game.physics.arcade.collide(personagem2,bombas, pegarbombas);
    game.physics.arcade.collide(biscoitao,plataformas);
    
    
    game.physics.arcade.collide(personagem,biscoitao, pegarbombas);
    game.physics.arcade.collide(personagem2,biscoitao, pegarbombas);
    
   
  
    
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

function carregarEstrelas(){

    estrelas = game.add.group();
    estrelas.enableBody = true;

    for(var i = 0; i<9; i++){
    var estrela = estrelas.create(i*75, Math.random()*300*-1, 'estrela');
    estrela.body.gravity.y = y=200;
    estrela.body.bounce.y = 0.1;
        
    }

}

function carregarBombas(){
    
    bombas = game.add.group();
    bombas.enableBody = true;
    
    for(var i = 0; i<5; i++){
        
    var bom = bombas.create(i*100, Math.random()*300*-5, 'bom');
    bom.body.gravity.y = y=90;
    bom.body.bounce.y = 0.9;
}
  }
  
function carregarDiamantes(){

    for(var i = 0; i<1; i++){
    var bolo = bolos.create(Math.random()*800, Math.random()*600*-1, 'bolo');
    bolo.body.gravity.y = y=100;
    bolo.body.bounce.y = 0.1;

    }

}

      
function pegarbombas(personagem,b){
    b.kill();
    if(personagem.key=="personagem"){

    pontos-=1;
    if(pontos<0){
        pontos=0;
    }
    texto.text = pontos;
}else{ 
        pontos2-=1;
        if(pontos2<0){
            pontos2=0;
        }
        texto2.text = pontos2;   
    
}
 }
 
 function pegarEstrela(personagem,estr){
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
        
    carregarDiamantes();
}
    }

 function pegarDiamantes(personagem,di){

    di.kill();
    if(personagem.key=="personagem"){

    pontos+=2;
    texto.text = pontos;
    }else{
        pontos2+=2;
        texto2.text = pontos2;
    }

if(bolos.countLiving()==0){
   
  game.state.start("fase2")
  
 
    }
}
 
function moveiniss() {
    cont5++;
    if(cont5%2 == 0){
        biscoitao.body.velocity.x = 300;
    }else{
        biscoitao.body.velocity.x = -300;
    }
}
