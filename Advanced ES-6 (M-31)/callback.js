function greating(ReceiveFunction, name) {       //receive function as a name of 'ReceiveFunction'
    ReceiveFunction(name);  //againg call the function which came 
}

function greatinghandler(name) {
    console.log('Good Morning', name)
}
function greatingEvening(name) {
    console.log('Good Evening', name)
}
function greatingNight(name) {
    console.log('Good Night', name)
}

greating(greatinghandler, 'safaruzzaman')
greating(greatingEvening, 'Ahteshamul Haque')
greating(greatingNight, 'Monowar Islam')