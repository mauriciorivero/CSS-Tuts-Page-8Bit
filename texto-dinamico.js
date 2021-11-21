function stringColoresLetters (string) {
    const array = string.split("");
    let stringColorLetter = "";

    array.map(elemn => {
        stringColorLetter += `<span style="color: ${getRandomColor()}">${elemn}</span>`;
    })

    return `<p>${stringColorLetter}</p>`;
}

function getRandomColor(){
    var num = (Math.floor(Math.random()*4)*4).toString(16);
    var letters = ['0','F',num];
    var color = '#';

    for(var i=0;i<3;i++){
        let pos = Math.floor(Math.random()*letters.length);
        color += letters[pos];
        letters.splice(pos,1);
    }
    return color;
}

const div = document.querySelector('div');
div.innerHTML=stringColoresLetters("super mario");