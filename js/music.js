var context = new AudioContext();
var o;
var replacedArray;

function generateMusic() {
    var button = document.getElementById("buttonID");
    button.style.pointerEvents = "none";
    button.style.color = "#686161ad";
    
    o = context.createOscillator();
    o.start(context.currentTime);
    o.stop(context.currentTime + 20);
   
    o.onended = function() {
        console.log("Music Finished");
        button.style.pointerEvents = "";
        button.style.color = "white";
    }   
   
    var randomNumberArray = [];
    for(var i = 0; i < 1500; i++) {
        randomNumberArray.push(getRandomizer(100,400)());
    }
    replacedArray = [];
    quickSort(randomNumberArray, 0, randomNumberArray.length - 1);
    for(var i = 0; i < replacedArray.length; i++) {
        playSound(replacedArray[i], 'triangle', i)
    }
}

function quickSort(randomNumberArray, left, right) {
    if(left < right) {
        var pivot = partition(randomNumberArray, left, right);
        quickSort(randomNumberArray, left, pivot - 1);
        quickSort(randomNumberArray, pivot + 1, right);
    }
}

function partition(randomNumberArray, left, right) {
    var pivot = randomNumberArray[right];
    var i = left - 1;
    for(var j = left; j < right; j++) {
        if(randomNumberArray[j] < pivot) {
            i++;
            var temp = randomNumberArray[i];
            randomNumberArray[i] = randomNumberArray[j];
            randomNumberArray[j] = temp;
            replacedArray.push(temp);
        }
    }
    var temp = randomNumberArray[++i];
    randomNumberArray[i] = randomNumberArray[right];
    randomNumberArray[right] = temp;
    replacedArray.push(temp);
    return i;
}

function getRandomizer(minimum, maximum) {
    return function() {
        return Math.floor( Math.random() * ( 1 + maximum - minimum ) ) + minimum;
    }
}
function playSound(frequency, type, time) {
    o.type = type;
    o.frequency.setValueAtTime(frequency, context.currentTime + time);
    o.connect(context.destination);
}

