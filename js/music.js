var randomNumberArray = []

function generateMusic() {
    //generate 500 random numbers within 60 to 1000
    for(var i = 0; i < 500; i++) {
        randomNumberArray.push(getRandomizer(60,1001)())
    }
    // console.log(randomNumberArray.length)
    // for(var i = 0; i < 500; i++) {
    //     console.log(randomNumberArray[i])
    // }
}

function getRandomizer(minimum, maximum) {
    return function() {
        return Math.floor( Math.random() * ( 1 + maximum - minimum ) ) + minimum;
    }
}
function playSound(frequency, type) {
    var context = new AudioContext()
    o = context.createOscillator()
    g = context.createGain()
    o.type = type
    o.connect(g)
    o.frequency.value = frequency
    g.connect(context.destination)
    o.start(0)
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
}

