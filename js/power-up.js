const colors = ["#009CDA","#FCD000","#E71E07","#42B132","#FCD000","#E71E07","#42B132","#FCD000"];

function textoDinamico(){
    const str = '#RetosPlatziCSS & Guías paso a paso';
    const arrayTitulo1 = Array.from(str);
    console.log(arrayTitulo1); 
    var textoTituloFinal = "";
    for(var i=0;i<arrayTitulo1.length;i++){
        console.log("el valor de la posición es: "+arrayTitulo1[i]);
        letra = arrayTitulo1[i];
        textoTituloFinal+="<span style='color: "+colorMario(colors)+"'>"+letra+"</span>";
    }
    return textoTituloFinal;
}

let counter=0;
function colorMario(color){    
    let respond = color[counter];
    counter+=1;
    if(counter === color.length){
        counter = 0;
    }
    return respond;
}

/*  A tener en cuenta */
//https://sebhastian.com/javascript-echo/
//https://www.codegrepper.com/code-examples/javascript/createelement+with+id

document.getElementById("titulo_ppal").innerHTML=textoDinamico();

var count_tutorial1 = 0;
var count_tutorial2 = 0;
var count_tutorial3 = 0;
var count_tutorial4 = 0;
var count_tutorial5 = 0;
var count_tutorial6 = 0;
var count_tutorial7 = 0;
var count_tutorial8 = 0;
var count_tutorial9 = 0;
var count_tutorial10 = 0;
var count_tutorial11 = 0;
document.getElementById("like_tut1").onclick = function(){
    count_tutorial1++;
    document.getElementById("count_tut1").innerHTML = count_tutorial1;
}

document.getElementById("like_tut2").onclick = function(){
    count_tutorial2++;
    document.getElementById("count_tut2").innerHTML = count_tutorial2;
}

document.getElementById("like_tut3").onclick = function(){
    count_tutorial3++;
    document.getElementById("count_tut3").innerHTML = count_tutorial3;
}

document.getElementById("like_tut4").onclick = function(){
    count_tutorial4++;
    document.getElementById("count_tut4").innerHTML = count_tutorial4;
}

document.getElementById("like_tut5").onclick = function(){
    count_tutorial5++;
    document.getElementById("count_tut5").innerHTML = count_tutorial5;
}

document.getElementById("like_tut6").onclick = function(){
    count_tutorial6++;
    document.getElementById("count_tut6").innerHTML = count_tutorial6;
}

document.getElementById("like_tut7").onclick = function(){
    count_tutorial7++;
    document.getElementById("count_tut7").innerHTML = count_tutorial7;
}

document.getElementById("like_tut8").onclick = function(){
    count_tutorial8++;
    document.getElementById("count_tut8").innerHTML = count_tutorial8;
}

document.getElementById("like_tut9").onclick = function(){
    count_tutorial9++;
    document.getElementById("count_tut9").innerHTML = count_tutorial9;
}

document.getElementById("like_tut10").onclick = function(){
    count_tutorial10++;
    document.getElementById("count_tut10").innerHTML = count_tutorial10;
}

document.getElementById("like_tut11").onclick = function(){
    count_tutorial11++;
    document.getElementById("count_tut11").innerHTML = count_tutorial11;
}