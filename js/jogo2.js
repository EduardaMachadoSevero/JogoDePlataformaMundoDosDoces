var jogoState2 = { create:criar2,update:atualizar2}

var personagem,inimigo;
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
var bombas;
var timerr1;
var cont1 = 0;

function precarregar2()
{



}

function criar2()
{
pontos ;
pontos2 ;
//define o cursor (setas)
cursors = game.input.keyboard.createCursorKeys();
//definindo o "sistema de física do jogo"
game.physics.startSystem(Phaser.Physics.ARCADE);
game.add.sprite(0,0, "ceu2");
game.add.sprite(320,8, "estrela2"); 
game.add.sprite(460,8, "estrela3");   
plataformas = game.add.group();

//habilitar o corpo para minhas plataformas
plataformas.enableBody = true;
var chao = plataformas.create(0, game.world.height-43, "plataforma");
chao.scale.setTo(2,2);
chao.body.immovable = true; 
var bloco = plataformas.create(350, 380, "plataformaf1");
bloco.body.immovable = true;
bloco = plataformas.create(-80,240,"plataformaf2");
bloco.body.immovable = true;
bloco = plataformas.create(570,209,"plataformaf3");
bloco.body.immovable = true;
bloco = plataformas.create(250,130,"plataformaf4");
bloco.body.immovable = true;

    // Adicionamos o player ao nosso jogo
    personagem = game.add.sprite(32, game.world.height - 150, 'personagem');
    personagem2 = game.add.sprite(62, game.world.height - 150, 'personagem2');
    inimigo = game.add.sprite(600, game.world.height - 120, 'migo');
    // Habilitamos a física ao jogador'
    game.physics.arcade.enable(personagem);
    game.physics.arcade.enable(personagem2);
    game.physics.arcade.enable(inimigo);
   
    // Propriedades físicas do jogador'
    personagem.body.bounce.y = 0.2; //salto
    personagem.body.gravity.y = 300; //gravidade
    personagem.body.collideWorldBounds = true;
    inimigo.body.collideWorldBounds = true;  
   
   
   
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
    
    carregarEstrelas2();
    carregarBombas2();
  
    
    texto = game.add.text(352,15,+pontos,
    {font:"25px Arial", fill:"#FFFEEF"});
    
    //carregarEstrelas();
    texto2 = game.add.text(440,15,+pontos2,
    {font:"25px Arial", fill:"#FFFEEF"});

   
   
    A = game.input.keyboard.addKey(Phaser.Keyboard.A);
    W = game.input.keyboard.addKey(Phaser.Keyboard.W);
    D = game.input.keyboard.addKey(Phaser.Keyboard.D);
   
    timerr1 = game.time.create(false);
    timerr1.loop(1500, moveini9, this);
    timerr1.start();
}

function atualizar2()
{
//colisões
    var cpp = game.physics.arcade.collide(personagem,plataformas);
    var cpp = game.physics.arcade.collide(personagem2,plataformas);
    game.physics.arcade.collide(estrelasa,plataformas);
    
    game.physics.arcade.collide(personagem,estrelasa, pegarEstrela2);
    game.physics.arcade.collide(personagem2,estrelasa, pegarEstrela2);
    
    game.physics.arcade.collide(bombas,plataformas);
    game.physics.arcade.collide(personagem,bombas, pegarbombas2);
    game.physics.arcade.collide(personagem2,bombas, pegarbombas2);
    game.physics.arcade.collide(inimigo,plataformas);
    game.physics.arcade.collide(personagem,inimigo, pegarInimigo2);
    game.physics.arcade.collide(personagem2,inimigo, pegarInimigo2);
    
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

function carregarEstrelas2(){

    estrelasa = game.add.group();
    estrelasa.enableBody = true;

    for(var i = 0; i<1; i++){
    var estrela1 = estrelasa.create(i*100, Math.random()*300*-1, 'estrela1');
    estrela1.body.gravity.y = y=100;
    estrela1.body.bounce.y = 0.0;
        
    }

}

function carregarBombas2(){
    
    bombas = game.add.group();
    bombas.enableBody = true;
    
    for(var i = 0; i<6; i++){
        
    var bom = bombas.create(i*100, Math.random()*400*-3, 'bom');
    bom.body.gravity.y = y=90;
    bom.body.bounce.y = 0.9;
}
  }
  

function pegarInimigo2(personagem,o){
    o.kill();
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

function pegarbombas2(personagem,f){
    f.kill();
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
 
 function pegarEstrela2(personagem,estr){
 estr.kill();
 if(personagem.key=="personagem"){

 pontos++;
 texto.text = pontos;
}else{
 pontos2++;
texto2.text = pontos2;
}


if(estrelasa.countLiving()==0){
    game.state.start("fase3")


}
    }

    function moveini9() {
        cont1++;
        if(cont1%2 == 0){
            inimigo.body.velocity.x = 300;
        }else{
            inimigo.body.velocity.x = -300;
        }
    }
