/*
function teste(string){
	var iguais='====================================================================================================================='.split('')
	var esquerda=Math.floor(iguais.length/2);
	esquerda-=Math.round(string.length/2);
	var retorno='';
	while(esquerda>0){
		retorno+='=';
		esquerda--;
	}
	retorno+=string;
	while(retorno.length<iguais.length){
		retorno+='='
	}
	console.log(retorno)
}
*/
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
const Discord = require('discord.js');
var peixes={
    'Lixo':{vara:1,pesoMin:75,pesoMax:450,multiplicador:0.0001,chance:200},
    'Peixe Comum':{vara:1,pesoMin:100,pesoMax:800,multiplicador:0.00015,chance:100},
    'Peixe Incomum':{vara:1,pesoMin:100,pesoMax:1000,multiplicador:0.0002,chance:45},
    'Peixe Raro':{vara:2,pesoMin:230,pesoMax:1500,multiplicador:0.0005,chance:12},
    'Peixe Super Raro':{vara:3,pesoMin:230,pesoMax:1750,multiplicador:0.00075,chance:6},
    'Peixe Lendário':{vara:5,pesoMin:500,pesoMax:2000,multiplicador:0.0001,chance:1}
}
var verBG=[false];
function limitePalavras(palavra,limite,ctx){
    while(ctx.measureText(palavra).width>limite){
        palavra=palavra.split('');
        palavra.pop();
        palavra.pop();
        palavra.pop();
        palavra.pop();
        palavra.push('.');
        palavra.push('.');
        palavra.push('.');
        palavra=palavra.join('');
    }
    return palavra;
}
const XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest;
const Canvas = require('canvas');
var imagens=[{
    "anime":"Sakurasou no Pet na Kanojo",
    "char":"Mashiro Shiina",
    "url":"imgs/bg0.jpg",
    "preco":5000
},
{
    "anime":"Sakurasou no Pet na Kanojo",
    "char":"Mashiro Shiina",
    "url":"imgs/bg1.jpg",
    "preco":8500
},
{
    "anime":"Charlotte",
    "char":"Ayumi Otosaka",
    "url":"imgs/bg2.jpg",
    "preco":5000
},
{
    "anime":"Gabriel Dropout",
    "char":"Gabriel Tenma White",
    "url":"imgs/bg3.jpg",
    "preco":5000
},
{
    "anime":"Kokoro Connect",
    "char":"Himeko Inaba",
    "url":"imgs/bg4.jpg",
    "preco":5000
},
{
    "anime":"Kokoro Connect",
    "char":"Iori Nagase",
    "url":"imgs/bg5.jpg",
    "preco":5000
},
{
    "anime":"Gabriel Dropout",
    "char":"Gabriel Tenma White",
    "url":"imgs/bg6.jpg",
    "preco":5000
},
{
    "anime":"K-on!",
    "char":"Hirasawa Yui",
    "url":"imgs/bg7.jpg",
    "preco":5000
},
{
    "anime":"No Game No Life",
    "char":"Shiro",
    "url":"imgs/bg8.jpg",
    "preco":5000
},
{
    "anime":"K-on!",
    "char":"Azusa Nakano",
    "url":"imgs/bg9.jpg",
    "preco":5000
},
{
    "anime":"Kiniro Mosaic",
    "char":"Kujou Karen",
    "url":"imgs/bg10.jpg",
    "preco":8500
},
{
    "anime":"New Game!",
    "char":"Suzukaze Aoba",
    "url":"imgs/bg11.jpg",
    "preco":5000
},
{
    "anime":"Sakurasou no Pet na Kanojo",
    "char":"Mashiro Shiina",
    "url":"imgs/bg12.jpg",
    "preco":12500
},
{
    "anime":"Charlotte",
    "char":"Tomori Nao",
    "url":"imgs/bg13.jpg",
    "preco":12500
},
{
    "anime":"Kimi No Na Wa",
    "char":"Taki Tachibana/Mitsuha Miyamizu",
    "url":"imgs/bg14.jpg",
    "preco":10000
},
{
    "anime":"Charlotte",
    "char":"Ayumi Otosaka",
    "url":"imgs/bg15.jpg",
    "preco":7500
},
{
    "anime":"Charlotte",
    "char":"Tomori Nao",
    "url":"imgs/bg16.jpg",
    "preco":5000
},
{
    "anime":"Koe no Katachi",
    "char":"Nishimiya Shouko",
    "url":"imgs/bg17.jpg",
    "preco":5000
},
{
    "anime":"Kiniro Mosaic",
    "char":"Youko Inokuma/Aya Komichi",
    "url":"imgs/bg18.jpg",
    "preco":5000
},
{
    "anime":"Love Live! Sunshine!",
    "char":"You Watanabe",
    "url":"imgs/bg19.jpg",
    "preco":10000
},
{
    "anime":"Love Live! Sunshine!",
    "char":"Aqours",
    "url":"imgs/bg20.jpg",
    "preco":15000
},
{
    "anime":"Love Live! School Idol Project!",
    "char":"µs",
    "url":"imgs/bg21.jpg",
    "preco":15000
},
{
    "anime":"New Game!",
    "char":"Suzukaze Aoba",
    "url":"imgs/bg22.jpg",
    "preco":8500
},
{
    "anime":"Sakurasou no Pet na Kanojo",
    "char":"Todo mundo",
    "url":"imgs/bg23.jpg",
    "preco":5000
},
{
    "anime":"Doki Doki Literatura Club!",
    "char":"Yuri",
    "url":"imgs/bgw0.jpg",
    "preco":12500
},
{
    "anime":"Doki Doki Literatura Club!",
    "char":"Natsuki",
    "url":"imgs/bgw1.jpg",
    "preco":12500
},
{
    "anime":"Doki Doki Literatura Club!",
    "char":"Sayori",
    "url":"imgs/bgw2.jpg",
    "preco":12500
},
{
    "anime":"Doki Doki Literatura Club!",
    "char":"Monika",
    "url":"imgs/bgw3.jpg",
    "preco":12500
},
{
    "anime":"Charlotte",
    "char":"Tomori Nao",
    "url":"imgs/bgw4.jpg",
    "preco":12500
}];
function dectohex2(dec){
    var char1;
    switch(dec){
        case 10:
            char1='A';
            break;
        case 11:
            char1='B';
            break;
        case 12:
            char1='C';
            break;
        case 13:
            char1='D';
            break;
        case 14:
            char1='E';
            break;
        case 15:
            char1='F';
            break;
        default:
            char1=dec.toString();
            break;
    }
    return char1;
}
function dectohex(dec){
    var char1=dectohex2(Math.floor(dec/16));
    var char2=dectohex2(dec%16);
    return char1+char2
}
var niveisXP=[0];
for(i=1;i<=50;i++){
    var xp=1;
    for(n=0;n<i;n++){
        xp=xp*2;
    }
    xp=1000*xp;
    niveisXP[i]=xp;
}
function calcXP(usuario,message){
    while(usuario.experiencia>=niveisXP[usuario.nivel]){
        usuario.experiencia-=niveisXP[usuario.nivel];
        var ganho=(1500+12*Math.pow(usuario.nivel,0.4)).toFixed(2);
        usuario.nivel++;
        usuario.dinheiro+=ganho;
        message.channel.send('Parabéns <@'+message.author.id+'>, você subiu para o nível '+usuario.nivel+', você recebeu $'+ganho+' e agora possui $'+usuario.dinheiro+'!');
    }
    return usuario;
}
try{
    var autor;
    var idBot='564804740152557568';
    const bot = new Discord.Client();
    function criaPerfil(usuario,callback){
        var http=new XMLHttpRequest();
        http.onreadystatechange=function(){
            if(this.readyState==4&&this.status==200){
                verificaUsuario(usuario,callback);
            }
        }
        http.open('GET','http://wantmob.com.br/eniac/medialab/websites/timer/criaUsuario.php?usuario='+usuario.discriminator+'&nome='+usuario.username);
        http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        http.send();
    }
    function guardaUsuario(callback){
        var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
            if(xhttp.readyState==4&&xhttp.status==200){
                guardado=true;
                if(callback!=null){
                    callback();
                }
            }
        }
        xhttp.open('POST','http://wantmob.com.br/eniac/medialab/websites/timer/guardaUsuario.php?objeto='+JSON.stringify(autor));
        xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhttp.send('objeto='+JSON.stringify(autor));
    }
    function verificaUsuario(usuario,callback){
        var https=new XMLHttpRequest();
        https.onreadystatechange=function(){
            if(this.status==200&&this.readyState==4){
                if(this.responseText==0){
                    criaPerfil(usuario,callback);
                }else{
                    autor=JSON.parse(this.responseText);
                    Object.keys(autor).forEach(function(value){
                        if(!isNaN(autor[value])){
                            autor[value]=parseFloat(autor[value]);
                        }
                    })
                    if(callback!=null){
                        callback();
                    }
                }
            }
        }
        https.open('POST','http://wantmob.com.br/eniac/medialab/websites/timer/buscaUsuario.php');
        https.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        https.send('usuario='+usuario.discriminator);
    }
    function criaImg(autor,msgRecebida){
        var dpi=1.3499999046325684;
        Canvas.loadImage(imagens[autor.background].url).then((imgBG)=>{
            var url;
            if(msgRecebida.author.avatarURL!=null){
                url=msgRecebida.author.avatarURL.split('');
                url.pop();
                url.pop();
                url.pop();
                url.pop();
                url.push('1')
                url.push('2')
                url.push('8')
                url=url.join('');
            }else{
                url='avatar128.png';
            }
            Canvas.loadImage(url).then(perfilAvatar=>{
                var w=800*dpi;
                var h=500*dpi;
                var imgPerfil=Canvas.createCanvas(w,h);
                var ctxImgPerfil=imgPerfil.getContext('2d');
                ctxImgPerfil.setTransform(dpi, 0, 0, dpi, 0, 0);
                ctxImgPerfil.drawImage(imgBG,0,0,800,500);
                var x=[10,138];
                var y=[10,138];
                ctxImgPerfil.strokeStyle='Black';
                ctxImgPerfil.strokeRect(x[0],y[0],x[1],y[1]);
                ctxImgPerfil.drawImage(perfilAvatar,x[0],y[0],x[1],y[1]);
                ctxImgPerfil.font='35px Arial';
                ctxImgPerfil.lineWidth=0.5;
                ctxImgPerfil.fillStyle='White';
                var texto=msgRecebida.author.username;
                texto=limitePalavras(texto,390,ctxImgPerfil);
                ctxImgPerfil.fillText(texto,160,50);
                ctxImgPerfil.strokeText(texto,160,50);
                ctxImgPerfil.font='25px Arial';
                texto=msgRecebida.author.discriminator;
                ctxImgPerfil.fillText(texto,160,80);
                ctxImgPerfil.strokeText(texto,160,80);
                texto='$'+autor.dinheiro;
                texto=limitePalavras(texto,385,ctxImgPerfil);
                ctxImgPerfil.fillText(texto,160,105);
                ctxImgPerfil.strokeText(texto,160,105);
                texto='Nível '+autor.nivel;
                texto=limitePalavras(texto,365,ctxImgPerfil);
                ctxImgPerfil.fillText(texto,160,130);
                ctxImgPerfil.strokeText(texto,160,130);
                ctxImgPerfil.font='30px Arial';
                texto='Gênero';
                ctxImgPerfil.fillText(texto,20,212);
                ctxImgPerfil.strokeText(texto,20,212);
                if(typeof(autor.genero)!='string'){
                    ctxImgPerfil.fillText('-Indefinido',30,251.5);
                    ctxImgPerfil.strokeText('-Indefinido',30,251.5);
                }else{
                    texto=autor.genero;
                    ctxImgPerfil.fillText('-'+texto,30,251.5);
                    ctxImgPerfil.strokeText('-'+texto,30,251.5);
                }
                texto='Aniversário';
                ctxImgPerfil.fillText(texto,20,291);
                ctxImgPerfil.strokeText(texto,20,291);
                if(typeof(autor.aniversario)!='string'){
                    ctxImgPerfil.fillText('-Indefinido',30,330.5);
                    ctxImgPerfil.strokeText('-Indefinido',30,330.5);
                }else{
                    texto=autor.aniversario.replace(/-/g,'/');
                    ctxImgPerfil.fillText('-'+texto,30,330.5);
                    ctxImgPerfil.strokeText('-'+texto,30,330.5);
                }
                texto='Descrição';
                ctxImgPerfil.fillText(texto,20,370);
                ctxImgPerfil.strokeText(texto,20,370);
                if(typeof(autor.descricao)!='string'){
                    ctxImgPerfil.fillText('-Indefinido',30,409.5);
                    ctxImgPerfil.strokeText('-Indefinido',30,409.5);
                }else{
                    var altura=409.5
                    var largura=470;
                    texto=('-'+autor.descricao);
                    while(ctxImgPerfil.measureText(texto).width>largura){
                        texto=texto.split('');
                        var texto2=[];
                        while(ctxImgPerfil.measureText(texto).width>largura){
                            if(texto[texto.length-1]=='—'){
                                break;
                            }
                            texto2.unshift(texto.pop());
                            while(texto[texto.length-1]!=' '){
                                if(ctxImgPerfil.measureText(texto).width<=largura-30){
                                    texto.push('—');
                                    break;
                                }else{
                                    texto2.unshift(texto.pop());
                                }
                            }
                        }
                        if(texto[texto.length-1]!='—'){
                            texto2.unshift(texto.pop());
                        }
                        texto=texto.join('');
                        ctxImgPerfil.fillText(texto,30,altura);
                        ctxImgPerfil.strokeText(texto,30,altura);
                        texto=texto2.join('');
                        altura+=35;
                        largura-=5;
                    }
                    if(ctxImgPerfil.measureText(texto).width<=largura){
                        ctxImgPerfil.fillText(texto,30,altura);
                        ctxImgPerfil.strokeText(texto,30,altura);
                    }
                }
                var imgMsg=new Discord.Attachment(imgPerfil.toBuffer(),'imgs/bg0.jpg');
                msgRecebida.channel.send('',imgMsg);
        })
        });
    }
    bot.on('message',message=>{
        if(message.author.bot) return;
        if(verBG[0]==true){
            switch(verBG[2]){
                case 0:
                    if(verBG[1]==message.author.id&&imagens[parseInt(message.content)]!=undefined){
                        var msgFalsa={
                            'author':{
                                'avatarURL':message.guild.members.get(idBot).user.avatarURL,
                                'username':'MongoBot',
                                'discriminator':"#3025",
                            },
                            'channel':message.channel
                        };
                        var descricao='Teste do fundo de ID '+message.content+', deseja comprá-lo por $'+imagens[parseInt(message.content)].preco+'? (s/n)'
                        verificaUsuario(message.author,function(){
                            if(autor.bgsComprados.toString().split(',').indexOf(parseInt(message.content))!=-1){
                                descricao='Teste do fundo de ID '+message.content+', deseja alterar para este fundo?';
                            }
                        })
                        autorFalso={
                            'background':parseInt(message.content),
                            'dinheiro':10491,
                            'nivel':4401,
                            'genero':'Bot',
                            'aniversario':'08/04/2019',
                            'descricao':descricao
                        }
                        criaImg(autorFalso,msgFalsa);
                        verBG=[true,message.author.id,1,parseInt(message.content)]
                    }
                break;
                case 1:
                    verificaUsuario(message.author,function(){
                        if(message.content=='s'){
                            if(autor.bgsComprados.toString().split(',').indexOf(verBG[3])==-1){
                                console.log(imagens)
                                if(autor.dinheiro>=imagens[verBG[3]].preco){
                                    autor.dinheiro-=imagens[verBG[3]].preco;
                                    autor.bgsComprados=autor.bgsComprados.toString().split(',');
                                    console.log(autor.bgsComprados);
                                    autor.background=verBG[3];
                                }else{
                                    message.channel.send('❌ <@'+message.author.id+'>, Você não tem dinheiro suficiente!')
                                }
                            }else{
                                autor.background=verBG[3];
                            }
                            guardaUsuario();
                            criaImg(autor,message);
                        }
                    })
                    verBG=[false]
                break;
            }
        }
        guardado=false;
        try{
            if(message.content.substring(0, 2).toLowerCase() == 'm!') {
                var args = message.content.substring(2).split(' ');
                var cmd = args[0].toLowerCase();
                switch(cmd) {
                    //======================================================ECONOMIA======================================================
                    case 'transfer':
                        if(parseInt(args[2])>0){
                            verificaUsuario(message.author,function(){
                                if(autor.dinheiro>args[2]){
                                    autor.dinheiro-=parseInt(args[2]);
                                    guardaUsuario(function(){
                                        verificaUsuario(message.mentions.users.first(),function(){
                                            autor.dinheiro+=parseInt(args[2]);
                                            message.channel.send('✅ <@'+message.author.id+'>, você enviou $'+args[2]+' para '+message.mentions.users.first().username);
                                            guardaUsuario();
                                        })
                                    });
                                }
                            })
                        }
                    break;
                    case 'daily':
                        verificaUsuario(message.author,function(){
                            var hoje=new Date();
                            var msg="❌ <@"+message.author.id+"> Você poderá resgatar o bônus diário em ";
                            if(isNaN(autor.dailyh)&&isNaN(autor.dailym)&&isNaN(autor.dailyd)){
                                autor.dailyd=hoje.getDate();
                                autor.dailym=hoje.getMinutes();
                                autor.dailyh=hoje.getHours();
                                autor.dinheiro+=250;
                                msg=new Discord.RichEmbed();
                                msg
                                .addField("✅ "+message.author.username+", você resgatou o bônus diário com sucesso!","Agora você tem um total de $"+autor.dinheiro)
                                .setColor('#0F0')
                            }else{
                                if(autor.dailyd!=hoje.getDate()){
                                    if(autor.dailyh<hoje.getHours()){
                                        autor.dinheiro+=250;
                                        autor.dailyd=hoje.getDate();
                                        msg=new Discord.RichEmbed();
                                        msg
                                        .addField("✅ "+message.author.username+", você resgatou o bônus diário com sucesso!","Agora você tem um total de $"+autor.dinheiro)
                                        .setColor('#0F0')
                                    }else if(autor.dailyh==hoje.getHours()){
                                        if(autor.dailym>hoje.getMinutes()){
                                            msg+=(autor.dailym-hoje.getMinutes()).toString()+'m';
                                        }else{
                                            autor.dinheiro+=250;
                                            autor.dailyd=hoje.getDate();
                                            msg=new Discord.RichEmbed();
                                            msg
                                            .addField("✅ "+message.author.username+", você resgatou o bônus diário com sucesso!","Agora você tem um total de $"+autor.dinheiro)
                                            .setColor('#0F0')
                                        }
                                    }else{
                                        if(autor.dailym>hoje.getMinutes()){
                                            msg+=(autor.dailyh-hoje.getHours())+'h '+(autor.dailym-hoje.getMinutes()).toString()+'m';
                                        }else if(autor.dailym<hoje.getMinutes()){
                                            msg+=(autor.dailyh-hoje.getHours()-1).toString()+'h '+(autor.dailym+60-hoje.getMinutes()).toString()+'m';
                                        }else{
                                            msg+=(autor.dailyh-hoje.getHours()).toString()+'h';
                                        }
                                    }
                                }else{
                                    if(autor.dailym>hoje.getMinutes()){
                                        msg+=(autor.dailyh+24-hoje.getHours())+'h '+(autor.dailym-hoje.getMinutes()).toString()+'m';
                                    }else if(autor.dailym<hoje.getMinutes()){
                                        msg+=(autor.dailyh+23-hoje.getHours()).toString()+'h '+(autor.dailym+60-hoje.getMinutes()).toString()+'m';
                                    }else{
                                        msg+=(autor.dailyh+24-hoje.getHours()).toString()+'h';
                                    }
                                }
                            }
                            message.channel.send(msg);
                            guardaUsuario();
                        })
                    break;
                    case 'claim':
                        verificaUsuario(message.author,function(){
                            if(autor.claim==false){
                                autor.dinheiro+=1000;
                                autor.claim=true;
                                var claimMsg=new Discord.RichEmbed();
                                claimMsg
                                .addField('✅ '+message.author.username+' Você recebeu os 1000 iniciais!'," Agora você tem um total de $"+autor.dinheiro)
                                .setColor('#0F0');
                                message.channel.send(claimMsg);
                                guardaUsuario();
                            }else{
                                message.channel.send("❌ <@"+message.author.id+"> você já recebeu os seus 1000 iniciais!");
                            }
                        })
                    break;
                    case 'money':
                        verificaUsuario(message.author,function(){
                            message.channel.send("<@"+message.author.id+">, você tem $"+autor.dinheiro);
                        })
                    break;
                    //=======================================================PESCA========================================================
                    case 'fish':
                    case 'f':
                        verificaUsuario(message.author,function(){
                            var listaPeixes=[];
                            Object.keys(peixes).forEach(function(value,index){
                                if(peixes[Object.keys(peixes)[index]].vara<=autor.vara){
                                    for(i=0;i<peixes[Object.keys(peixes)[index]].chance;i++){
                                        listaPeixes.push(Object.keys(peixes)[index]);
                                    }
                                }
                            })
                            var pescado=listaPeixes[Math.floor(Math.random()*listaPeixes.length)];
                            var peso=Math.floor(Math.random()*peixes[pescado].pesoMax+peixes[pescado].pesoMin);
                            var inventario;
                            if(autor.inventario.indexOf('|separacao|')!=-1){
                                inventario=autor.inventario.split('|separacao|');
                            }else{
                                inventario=[autor.inventario];
                            }
                            inventario.push(JSON.stringify({nome:pescado,peso:peso,valor:(peso*peixes[pescado].multiplicador).toFixed(2)}));
                            autor.inventario=inventario.join('|separacao|');
                            if(inventario.length>5000){
                                channel.message.send('<@'+message.author.id+'>, seu inventário atingiu o limite, por favor, venda seus peixes.');
                            }else{
                                message.channel.send('<@'+message.author.id+'>, você pescou um '+pescado+' de '+peso+' gramas ou '+(peso/1000)+'kg');
                            }
                            guardaUsuario();
                        })
                    break;
                    case 'inventory':
                    case 'inv':
                        verificaUsuario(message.author,function(){
                            var mensagem=new Discord.RichEmbed();
                            mensagem.addField('Inventário de '+autor.nome,'sdgoasfd');
                            autor.inventario.split('|separacao|').forEach(function(value,index){
                                if(index==0){
                                    mensagem.fields[0].value='';
                                }
                                if(value.substring(0,1)=='{'){
                                    mensagem.fields[0].value+=JSON.parse(value).nome+' de '+(JSON.parse(value).peso/1000)+'kg | Valor:$'+JSON.parse(value).valor;
                                }else{
                                    mensagem.fields[0].value+=value;
                                }
                                if(index!=autor.inventario.length-1){
                                    mensagem.fields[0].value+='\n';
                                }
                            })
                            message.channel.send(mensagem);
                        })
                    break;
                    //=======================================================PERFIL=======================================================
                    case 'bgs':
                    case 'backgrounds':
                        var mensagem=new Discord.RichEmbed();
                        mensagem.setTitle('Fundos Para Perfil');
                        mensagem.setColor('#47c1ff');
                        var listaAnimes={};
                        imagens.forEach(function(v,i){
                            if(listaAnimes[v.anime]==undefined){
                                listaAnimes[v.anime]=[];
                            }
                            listaAnimes[v.anime].push([i,v.char,v.preco]);
                        })
                        Object.keys(listaAnimes).forEach(function(v,i){
                            var valueMsg='';
                            Object.values(listaAnimes)[i].forEach(function(v2,i2){
                                valueMsg+='•'+v2[0]+'.'+v2[1]+'→ $'+v2[2];
                                if(i2!=Object.values(listaAnimes).length-1){
                                    valueMsg+='\n';
                                }
                            })
                            mensagem.addField(v,valueMsg)
                        })
                        verBG=[true,message.author.id,0];
                        message.channel.send(mensagem);
                    break;
                    case 'profile':
                        verificaUsuario(message.author,function(){
                            criaImg(autor,message);
                        })
                    break;
                    case 'gender':
                        verificaUsuario(message.author,function(){
                            if(args[1]!=undefined){
                                if(args[1].toLowerCase()=='m'){
                                    autor.genero="Masculino";
                                }else if(args[1].toLowerCase()=='f'){
                                    autor.genero='Feminino';
                                }else if(args[1].toLowerCase()=='o'){
                                    if(args[2]!=undefined){
                                        autor.genero=args[2].split('')[0].toUpperCase()+args[2].substr(1).toLowerCase();
                                    }else{
                                        message.channel.send('❌ Você deve usar m!gender O *genero*');
                                    }
                                }
                                message.channel.send("✅ Gênero selecionado com sucesso!");
                            }else{
                                message.channel.send('❌ Você deve usar m!gender *gênero(M/F/O)*');
                            }
                            guardaUsuario();
                        })
                    break;
                    case 'desc':
                        verificaUsuario(message.author,function(){
                            if(args.length>1){
                                var descricao=args;
                                descricao.shift();
                                autor.descricao=descricao.join(' ');
                                guardaUsuario(function(){
                                    message.channel.send('✅ <@'+message.author.id+'> sua descrição foi salva com sucesso!');
                                });
                            }else{
                                message.channel.send('❌ <@'+message.author.id+'> o modo certo de usar o comando é m!desc *descrição*')
                            }
                        })
                    break;
                    case 'birthday':
                        verificaUsuario(message.author,function(){
                            var data=args[1].split('/');
                            if(data.length==3){
                                autor.aniversario=data[2]+'-'+data[1]+'-'+data[0];
                                guardaUsuario(function(){
                                    message.channel.send('✅ <@'+message.author.id+'> a data de aniversário foi registrada com sucesso!');
                                });
                            }else{
                                message.channel.send('❌ <@'+message.author.id+'> o modo certo de usar o comando é m!birthday *dd/mm/yyyy*');
                            }
                        })
                    break;
                    case 'xp':
                        verificaUsuario(message.author,function(){
                            var restante=niveisXP[autor.nivel]-autor.experiencia;
                            message.channel.send('<@'+message.author.id+'> falta '+restante+' de experiência para você chegar ao nível '+(autor.nivel+1)+'!');
                        })
                    break;
                    //=======================================================APOSTA=======================================================
                    case 'dice':
                        verificaUsuario(message.author,function(){
                            if(!isNaN(args[1])){
                                if(args[1]<=autor.dinheiro){
                                    message.channel.send('🎲 Rolando dados 🎲').then((msg)=>{
                                        var dadoBot=Math.floor(Math.random()*11+2);
                                        var dadoUsuario=Math.floor(Math.random()*11+2);
                                        var resultado=new Discord.RichEmbed();
                                        resultado
                                        .addField('🎲Resultado🎲','<@'+message.author.id+'>, você tirou '+dadoUsuario+'\nO <@'+idBot+'> tirou '+dadoBot)
                                        .setColor('#c93c3c');
                                        if(dadoBot!=dadoUsuario){
                                            switch(Math.max(dadoBot,dadoUsuario)){
                                                case dadoBot:
                                                    resultado.fields[0].value+='\nVocê perdeu $'+args[1]+' e recebeu '+(15+Math.floor(args[1]/3.9))+' de experiência.';
                                                    msg.edit(resultado);
                                                    autor.dinheiro-=parseFloat(args[1]);
                                                    autor.experiencia+=parseInt((15+Math.floor(args[1]/3.9)));
                                                    if(autor.experiencia>=niveisXP[autor.nivel]){
                                                        autor.nivel++;
                                                        autor.experiencia=autor.experiencia-niveisXP[autor.nivel];
                                                    }
                                                break;
                                                case dadoUsuario:
                                                    resultado.fields[0].value+='\nVocê recebeu $'+args[1]+' e '+(30+Math.floor(args[1]/3.9))+' de experiência.';
                                                    msg.edit(resultado);
                                                    autor.dinheiro+=parseFloat(args[1]);
                                                    autor.experiencia+=parseInt((30+Math.floor(args[1]/3.9)));
                                                    if(autor.experiencia>=niveisXP[autor.nivel]){
                                                        autor.nivel++;
                                                        autor.experiencia=autor.experiencia-niveisXP[autor.nivel];
                                                    }
                                                break;
                                            }
                                        }else{
                                            resultado.fields[0].value+='\nVocê recebeu '+(15+Math.floor(args[1]/3.9))+' de experiência.';
                                            msg.edit(resultado);
                                            autor.experiencia+=(15+Math.floor(args[1]/3.9));
                                            if(autor.experiencia>=niveisXP[autor.nivel]){
                                                autor.nivel++;
                                                autor.experiencia=autor.experiencia-niveisXP[autor.nivel];
                                            }
                                        }
                                        autor=calcXP(autor,message);
                                        guardaUsuario();
                                    })
                                }else{
                                    message.channel.send('❌ <@'+message.author.id+'>, você não tem dinheiro suficiente');
                                }
                            }else{
                                message.channel.send('❌ <@'+message.author.id+'> o modo certo de usar o comando é m!dice *valor da aposta*');
                            }
                        })
                    break;
                    //=======================================================AJUDA========================================================
                    case 'help':
                        var help=new Discord.RichEmbed()
                        if(args[1]==null){
                            var red=Math.floor(Math.random()*256);
                            var blue=Math.floor(Math.random()*256);
                            var green=Math.floor(Math.random()*256);
                            var hex='#'+dectohex(red)+dectohex(green)+dectohex(blue);
                            help
                            .addField(':tools:Tipos de Comandos:tools:',"**m!help *tipo de comando***\n→ :bust_in_silhouette:Perfil:bust_in_silhouette: \n→ :money_with_wings:Economia:money_with_wings:\n→ :slot_machine:Apostas:slot_machine:\n→ :fishing_pole_and_fish:Pesca:fishing_pole_and_fish:",true)
                            .setColor(hex);
                            message.channel.send(help)
                        }else{
                            switch(args[1].toLowerCase()){
                                case 'perfil':
                                    help.addField(':bust_in_silhouette:Perfil:bust_in_silhouette:','•m!profile→Mostra o perfil do usuário\n•m!gender *M/F*→Define o gênero do usuário\n•m!birthday *dd/mm/yyyy*→Define o aniversário do usuário\n•m!desc *descrição(max 300 caracteres)*→Define a descrição do usuário\n•m!xp→Mostra a quantidade de XP necessária para upar\n•m!backgrounds→Mostra a lista de planos de fundo',true);
                                    help.setColor('#DDDDDD')
                                    message.channel.send(help);
                                    break;
                                case 'economia':
                                    help
                                        .addField(':money_with_wings:Economia:money_with_wings:','•m!claim→Recolhe os 1000 iniciais\n•m!money→Exibe o saldo do usuário\n•m!transfer *nome do usuário* *quantidade*→Envia dinheiro à um usuário\n•m!daily→Recolhe o bônus diário\n•m!quest→Exibe o progresso da missão disponível',true)
                                        .setColor('#00FF00');
                                    message.channel.send(help);
                                    break;
                                case 'apostas':
                                    help
                                        .addField(':slot_machine:Apostas:slot_machine:','•m!slots *valor*→Aposta nos slots\n•m!dice *valor*→Aposta nos dados\n•m!lottery *quantidade de tickets*→Compra tickets da loteria(500/un)\n•m!flip *Cara/Coroa* *valor*→Cara ou coroa',true)
                                        .setColor('#c93c3c');
                                    message.channel.send(help);
                                    break;
                                case 'pesca':
                                    help
                                        .addField(':fishing_pole_and_fish:Pesca:fishing_pole_and_fish:','•m!fish→Pesca\n•m!inventory→Vê o inventário\n•m!sell→Vende tudo que tem no inventário\n•m!shop→Abre a loja\n•m!buy *id*→Compra um item da loja\n•m!fish→Pesca\n•m!buff→Exibe o(s) buff(s) ativo(s)\n•m!rod→Exibe a vara equipada',true)
                                        .setColor('#0056ff')
                                    message.channel.send(help);
                                break;
                                default:
                                    var red=Math.floor(Math.random()*256);
                                    var blue=Math.floor(Math.random()*256);
                                    var green=Math.floor(Math.random()*256);
                                    var hex='#'+dectohex(red)+dectohex(green)+dectohex(blue);
                                    help
                                    .addField(':tools:Tipos de Comandos:tools:',"**m!help *tipo de comando***\n→ :bust_in_silhouette:Perfil:bust_in_silhouette: \n→ :money_with_wings:Economia:money_with_wings:\n→ :slot_machine:Apostas:slot_machine:\n→ :fishing_pole_and_fish:Pesca:fishing_pole_and_fish:",true)
                                    .setColor(hex);
                                    message.channel.send(help)
                                break;
                            }
                        }
                    break;
                }
            }
        }catch(error){
            console.log(error)
        }
    });
    bot.login("NTY0ODA0NzQwMTUyNTU3NTY4.XKtPyw.O1NuCCH3Ie8c3aGVZVmbAYrwDHA")
}catch(e){
    console.log(e)
}
