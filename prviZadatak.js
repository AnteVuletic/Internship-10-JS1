let choice
while(choice !== "Kraj"){
    choice = prompt(`Odaberi redni broj algoritma kojeg zelis izvrsit \n
    1 \u27A4 Reverse \n
    2 \u27a4 Max letter repeat \n
    3 \u27a4 Capitalize first letters \n
    4 \u27a4 Reverse each word \n
    Kraj \u27a4 Kraj programa`);
    switch (choice){
        case "1":
            alert(Reverse(AlgorithmInput()));
        break;
        case "2":
            alert(MaxLetter(AlgorithmInput()));
        break;
        case "3":
            alert(CapitalizeFirstLetters(AlgorithmInput()));
        break;
        case "4":
            alert(ReverseEachWord(AlgorithmInput()));
        break;
    }
}
function AlgorithmInput(){
    return prompt("Unesite tekst za algoritam");
}
function Reverse(prop){
    let buffer = "";
    for(let i = 0; i < prop.length;i++){
        buffer += prop[prop.length - 1 - i];
    }
    return buffer;
}
function MaxLetter(prop){
    let buffer ="";
    for(let i = 0; i < prop.length;i++){
        let found = false;
        for(let j = 0; j < buffer.length;j++){
            if(buffer[j] === prop[i]){
                found = true;
                break;
            }
        }
        if(!found){
            buffer += prop[i];
        }
    }
    let currentBiggestCounter = 0;
    let currentBiggest = 0;
    for(let i = 0; i < buffer.length; i++){
        let counterCurrent = 0;
        for(let j = 0; j < prop.length; j++){
            if(buffer[i] === prop[j]){
                counterCurrent++;
            }
        }
        if(counterCurrent > currentBiggestCounter){
            currentBiggestCounter = counterCurrent;
            currentBiggest = i;
        }
    }
    return buffer[currentBiggest];
}
function CapitalizeFirstLetters(prop){
    let buffer = "";
    prop = prop.toLowerCase();
    for(let i = 0; i < prop.length;i++){
        if(i === 0 || prop[i-1] === " "){
            buffer += prop[i].toUpperCase();
        }
        else{
            buffer += prop[i];
        }
    }
    return buffer;
}
function ReverseEachWord(prop){
    let indexesOfWords = [0];
    let buffer = "";
    for(let i = 0; i < prop.length; i++){
        if(prop[i] === " "){
            indexesOfWords.push(i); 
        }
    }
    indexesOfWords.push(prop.length);
    for(let j= 0; j < indexesOfWords.length-1; j++){
        buffer += " " + Reverse(prop.slice(indexesOfWords[j],indexesOfWords[j+1]));
    }
    return buffer;
}