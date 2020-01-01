var context = new AudioContext();
var o;
// var g;
var replacedArray;

function generateMusic() {
    o = context.createOscillator();
    // g = context.createGain();
    // o.connect(g);
    o.start(context.currentTime);
    o.stop(context.currentTime + 20);
   
    o.onended = function() {
        console.log("Music Finished");
    }   
    // context.resume().then(() => {
    //     console.log('Playback resumed successfully');
    //   });
    //generate 500 random numbers within 60 to 1000
    var randomNumberArray = [];
    for(var i = 0; i < 1500; i++) {
        randomNumberArray.push(getRandomizer(100,400)());
    }
    // console.log(randomNumberArray[0]);
    // console.log(randomNumberArray.length);
    replacedArray = [];
    console.log(replacedArray[0]);
    // console.log("Music Started");
    quickSort(randomNumberArray, 0, randomNumberArray.length - 1);
    for(var i = 0; i < replacedArray.length; i++) {
        playSound(replacedArray[i], 'triangle', i)
    }
    
    console.log(replacedArray.length);
    console.log(randomNumberArray[0]);
    console.log(replacedArray[0]);
    // console.log("Music Finished");
}

function quickSort(randomNumberArray, left, right) {
    if(left < right) {
        var pivot = partition(randomNumberArray, left, right);
        quickSort(randomNumberArray, left, pivot - 1);
        quickSort(randomNumberArray, pivot + 1, right);
    }
}

function partition(randomNumberArray, left, right) {
    var now = new Date().getTime();
    var millisecondsToWait = 100; /* i.e. 1 second */
    var pivot = randomNumberArray[right];
    var i = left - 1;
    for(var j = left; j < right; j++) {
        if(randomNumberArray[j] < pivot) {
            i++;
            var temp = randomNumberArray[i];
            randomNumberArray[i] = randomNumberArray[j];
            randomNumberArray[j] = temp;
            replacedArray.push(temp);
            // playSound(temp, 'sine');
            // while ( new Date().getTime() < now + millisecondsToWait ) {}
        }
    }
    var temp = randomNumberArray[++i];
    randomNumberArray[i] = randomNumberArray[right];
    randomNumberArray[right] = temp;
    replacedArray.push(temp);
    // playSound(temp, 'sine');
    // while ( new Date().getTime() < now + millisecondsToWait ) {}
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
    console.log("=======================");
    console.log(frequency)
    // g.frequency.se(0.00001, context.currentTime + (time+1));
    
}

